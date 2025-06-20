"""
Flask API for KPB Supports Solutions
Main application file with authentication endpoints
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import re
import os
from database import init_database, Collections, DatabaseOperations, get_db
from routes import api_routes
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)

# Configuration
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key-change-in-production')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)
app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=30)

# Initialize extensions
CORS(app, origins=["http://localhost:3000", "http://localhost:5173"])  # Allow React dev server
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(api_routes)

# Store blacklisted tokens (in production, use Redis or database)
blacklisted_tokens = set()

@jwt.token_in_blocklist_loader
def check_if_token_revoked(jwt_header, jwt_payload):
    """Check if token is blacklisted"""
    return jwt_payload['jti'] in blacklisted_tokens

# Utility functions
def validate_email(email):
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_password(password):
    """Validate password strength"""
    if len(password) < 8:
        return False, "Password must be at least 8 characters long"
    if not re.search(r'[A-Z]', password):
        return False, "Password must contain at least one uppercase letter"
    if not re.search(r'[a-z]', password):
        return False, "Password must contain at least one lowercase letter"
    if not re.search(r'\d', password):
        return False, "Password must contain at least one number"
    return True, "Password is valid"

# Authentication Routes

@app.route('/api/auth/register', methods=['POST'])
def register():
    """Register a new user"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['email', 'password', 'firstName', 'lastName']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        email = data['email'].lower().strip()
        password = data['password']
        first_name = data['firstName'].strip()
        last_name = data['lastName'].strip()
        phone = data.get('phone', '').strip()
        company = data.get('company', '').strip()
        
        # Validate email format
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Validate password strength
        is_valid, message = validate_password(password)
        if not is_valid:
            return jsonify({'error': message}), 400
        
        # Check if user already exists
        existing_user = DatabaseOperations.find_one(Collections.USERS, {'email': email})
        if existing_user:
            return jsonify({'error': 'User with this email already exists'}), 409
        
        # Hash password
        password_hash = generate_password_hash(password)
        
        # Create user document
        user_doc = {
            'email': email,
            'password_hash': password_hash,
            'first_name': first_name,
            'last_name': last_name,
            'phone': phone,
            'company': company,
            'is_active': True,
            'is_verified': False,
            'role': 'user',
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'login_count': 0,
            'last_login': None
        }
        
        # Insert user into database
        user_id = DatabaseOperations.insert_one(Collections.USERS, user_doc)
        
        if not user_id:
            return jsonify({'error': 'Failed to create user'}), 500
        
        # Create access and refresh tokens
        access_token = create_access_token(identity=str(user_id))
        refresh_token = create_refresh_token(identity=str(user_id))
        
        # Return user data (without password hash)
        user_data = {
            'id': user_id,
            'email': email,
            'firstName': first_name,
            'lastName': last_name,
            'phone': phone,
            'company': company,
            'role': 'user',
            'isActive': True,
            'isVerified': False
        }
        
        logger.info(f"New user registered: {email}")
        
        return jsonify({
            'message': 'User registered successfully',
            'user': user_data,
            'access_token': access_token,
            'refresh_token': refresh_token
        }), 201
        
    except Exception as e:
        logger.error(f"Registration error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/login', methods=['POST'])
def login():
    """Login user"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('email') or not data.get('password'):
            return jsonify({'error': 'Email and password are required'}), 400
        
        email = data['email'].lower().strip()
        password = data['password']
        
        # Find user in database
        user = DatabaseOperations.find_one(Collections.USERS, {'email': email})
        
        if not user:
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Check if user is active
        if not user.get('is_active', True):
            return jsonify({'error': 'Account is deactivated'}), 401
        
        # Verify password
        if not check_password_hash(user['password_hash'], password):
            return jsonify({'error': 'Invalid email or password'}), 401
        
        # Update login information
        update_data = {
            '$set': {
                'last_login': datetime.utcnow(),
                'updated_at': datetime.utcnow()
            },
            '$inc': {
                'login_count': 1
            }
        }
        DatabaseOperations.update_one(Collections.USERS, {'_id': user['_id']}, update_data)
        
        # Create access and refresh tokens
        access_token = create_access_token(identity=str(user['_id']))
        refresh_token = create_refresh_token(identity=str(user['_id']))
        
        # Return user data (without password hash)
        user_data = {
            'id': str(user['_id']),
            'email': user['email'],
            'firstName': user['first_name'],
            'lastName': user['last_name'],
            'phone': user.get('phone', ''),
            'company': user.get('company', ''),
            'role': user.get('role', 'user'),
            'isActive': user.get('is_active', True),
            'isVerified': user.get('is_verified', False)
        }
        
        logger.info(f"User logged in: {email}")
        
        return jsonify({
            'message': 'Login successful',
            'user': user_data,
            'access_token': access_token,
            'refresh_token': refresh_token
        }), 200
        
    except Exception as e:
        logger.error(f"Login error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    """Refresh access token"""
    try:
        current_user_id = get_jwt_identity()
        
        # Verify user still exists and is active
        user = DatabaseOperations.find_one(Collections.USERS, {'_id': current_user_id})
        
        if not user or not user.get('is_active', True):
            return jsonify({'error': 'User not found or inactive'}), 401
        
        # Create new access token
        access_token = create_access_token(identity=current_user_id)
        
        return jsonify({
            'access_token': access_token
        }), 200
        
    except Exception as e:
        logger.error(f"Token refresh error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/logout', methods=['POST'])
@jwt_required()
def logout():
    """Logout user and blacklist token"""
    try:
        jti = get_jwt()['jti']
        blacklisted_tokens.add(jti)
        
        return jsonify({'message': 'Successfully logged out'}), 200
        
    except Exception as e:
        logger.error(f"Logout error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/profile', methods=['GET'])
@jwt_required()
def get_profile():
    """Get user profile"""
    try:
        current_user_id = get_jwt_identity()
        
        # Find user in database
        user = DatabaseOperations.find_one(Collections.USERS, {'_id': current_user_id})
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Return user data (without password hash)
        user_data = {
            'id': str(user['_id']),
            'email': user['email'],
            'firstName': user['first_name'],
            'lastName': user['last_name'],
            'phone': user.get('phone', ''),
            'company': user.get('company', ''),
            'role': user.get('role', 'user'),
            'isActive': user.get('is_active', True),
            'isVerified': user.get('is_verified', False),
            'loginCount': user.get('login_count', 0),
            'lastLogin': user.get('last_login'),
            'createdAt': user.get('created_at')
        }
        
        return jsonify({'user': user_data}), 200
        
    except Exception as e:
        logger.error(f"Get profile error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    """Update user profile"""
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        # Find user in database
        user = DatabaseOperations.find_one(Collections.USERS, {'_id': current_user_id})
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Prepare update data
        update_fields = {}
        
        if 'firstName' in data:
            update_fields['first_name'] = data['firstName'].strip()
        if 'lastName' in data:
            update_fields['last_name'] = data['lastName'].strip()
        if 'phone' in data:
            update_fields['phone'] = data['phone'].strip()
        if 'company' in data:
            update_fields['company'] = data['company'].strip()
        
        if not update_fields:
            return jsonify({'error': 'No valid fields to update'}), 400
        
        update_fields['updated_at'] = datetime.utcnow()
        
        # Update user in database
        success = DatabaseOperations.update_one(
            Collections.USERS, 
            {'_id': current_user_id}, 
            {'$set': update_fields}
        )
        
        if not success:
            return jsonify({'error': 'Failed to update profile'}), 500
        
        # Return updated user data
        updated_user = DatabaseOperations.find_one(Collections.USERS, {'_id': current_user_id})
        
        user_data = {
            'id': str(updated_user['_id']),
            'email': updated_user['email'],
            'firstName': updated_user['first_name'],
            'lastName': updated_user['last_name'],
            'phone': updated_user.get('phone', ''),
            'company': updated_user.get('company', ''),
            'role': updated_user.get('role', 'user'),
            'isActive': updated_user.get('is_active', True),
            'isVerified': updated_user.get('is_verified', False)
        }
        
        return jsonify({
            'message': 'Profile updated successfully',
            'user': user_data
        }), 200
        
    except Exception as e:
        logger.error(f"Update profile error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/auth/change-password', methods=['POST'])
@jwt_required()
def change_password():
    """Change user password"""
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        # Validate required fields
        if not data.get('currentPassword') or not data.get('newPassword'):
            return jsonify({'error': 'Current password and new password are required'}), 400
        
        current_password = data['currentPassword']
        new_password = data['newPassword']
        
        # Find user in database
        user = DatabaseOperations.find_one(Collections.USERS, {'_id': current_user_id})
        
        if not user:
            return jsonify({'error': 'User not found'}), 404
        
        # Verify current password
        if not check_password_hash(user['password_hash'], current_password):
            return jsonify({'error': 'Current password is incorrect'}), 401
        
        # Validate new password strength
        is_valid, message = validate_password(new_password)
        if not is_valid:
            return jsonify({'error': message}), 400
        
        # Hash new password
        new_password_hash = generate_password_hash(new_password)
        
        # Update password in database
        success = DatabaseOperations.update_one(
            Collections.USERS, 
            {'_id': current_user_id}, 
            {'$set': {
                'password_hash': new_password_hash,
                'updated_at': datetime.utcnow()
            }}
        )
        
        if not success:
            return jsonify({'error': 'Failed to update password'}), 500
        
        return jsonify({'message': 'Password changed successfully'}), 200
        
    except Exception as e:
        logger.error(f"Change password error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    try:
        db_health = get_db().health_check()
        
        return jsonify({
            'status': 'healthy',
            'timestamp': datetime.utcnow().isoformat(),
            'database': db_health
        }), 200
        
    except Exception as e:
        logger.error(f"Health check error: {str(e)}")
        return jsonify({
            'status': 'unhealthy',
            'timestamp': datetime.utcnow().isoformat(),
            'error': str(e)
        }), 500

@app.route('/')
def home():
    return jsonify({"message": "Welcome to KPB Supports Solutions API"})

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({'error': 'Method not allowed'}), 405

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

# Initialize database connection
def initialize_database():
    """Initialize database connection"""
    if not init_database():
        logger.error("Failed to initialize database connection")
        raise Exception("Database initialization failed")

if __name__ == '__main__':
    # Initialize database
    initialize_database()
    logger.info("Database initialized successfully")
    app.run(debug=True, host='0.0.0.0', port=5000)