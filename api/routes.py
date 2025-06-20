"""
Additional API routes for KPB Supports Solutions
Contact forms, newsletter subscriptions, and other features
"""

from flask import Blueprint, request, jsonify
from datetime import datetime
from database import Collections, DatabaseOperations
import logging
import re

# Configure logging
logger = logging.getLogger(__name__)

# Create blueprint
api_routes = Blueprint('api_routes', __name__)

# Utility functions
def validate_email(email):
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_phone(phone):
    """Validate phone number format"""
    if not phone:
        return True  # Phone is optional
    # Basic phone validation - adjust pattern as needed
    pattern = r'^[\+]?[1-9][\d]{0,15}$'
    return re.match(pattern, phone.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')) is not None

# Contact Form Routes

@api_routes.route('/api/contact', methods=['POST'])
def submit_contact_form():
    """Submit contact form"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['firstName', 'lastName', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        first_name = data['firstName'].strip()
        last_name = data['lastName'].strip()
        email = data['email'].lower().strip()
        phone = data.get('phone', '').strip()
        company = data.get('company', '').strip()
        subject = data.get('subject', '').strip()
        message = data['message'].strip()
        service_type = data.get('serviceType', '').strip()
        
        # Validate email format
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Validate phone if provided
        if phone and not validate_phone(phone):
            return jsonify({'error': 'Invalid phone number format'}), 400
        
        # Create contact document
        contact_doc = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'phone': phone,
            'company': company,
            'subject': subject,
            'message': message,
            'service_type': service_type,
            'status': 'new',
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'responded_at': None,
            'notes': []
        }
        
        # Insert contact into database
        contact_id = DatabaseOperations.insert_one(Collections.CONTACTS, contact_doc)
        
        if not contact_id:
            return jsonify({'error': 'Failed to submit contact form'}), 500
        
        logger.info(f"New contact form submitted: {email}")
        
        return jsonify({
            'message': 'Contact form submitted successfully',
            'contact_id': contact_id
        }), 201
        
    except Exception as e:
        logger.error(f"Contact form submission error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@api_routes.route('/api/contact', methods=['GET'])
def get_contacts():
    """Get all contacts (admin only - add authentication later)"""
    try:
        # Get query parameters
        status = request.args.get('status')
        page = int(request.args.get('page', 1))
        limit = int(request.args.get('limit', 50))
        
        # Build filter
        filter_dict = {}
        if status:
            filter_dict['status'] = status
        
        # Calculate skip value for pagination
        skip = (page - 1) * limit
        
        # Get contacts from database
        contacts = DatabaseOperations.find_many(Collections.CONTACTS, filter_dict, limit)
        
        # Convert ObjectId to string for JSON serialization
        for contact in contacts:
            contact['_id'] = str(contact['_id'])
        
        return jsonify({
            'contacts': contacts,
            'page': page,
            'limit': limit
        }), 200
        
    except Exception as e:
        logger.error(f"Get contacts error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

# Newsletter Routes

@api_routes.route('/api/newsletter/subscribe', methods=['POST'])
def subscribe_newsletter():
    """Subscribe to newsletter"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('email'):
            return jsonify({'error': 'Email is required'}), 400
        
        email = data['email'].lower().strip()
        name = data.get('name', '').strip()
        interests = data.get('interests', [])
        
        # Validate email format
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Check if email already subscribed
        existing_subscription = DatabaseOperations.find_one(Collections.NEWSLETTERS, {'email': email})
        
        if existing_subscription:
            if existing_subscription.get('is_active', False):
                return jsonify({'error': 'Email is already subscribed'}), 409
            else:
                # Reactivate subscription
                success = DatabaseOperations.update_one(
                    Collections.NEWSLETTERS,
                    {'email': email},
                    {'$set': {
                        'is_active': True,
                        'updated_at': datetime.utcnow(),
                        'resubscribed_at': datetime.utcnow()
                    }}
                )
                
                if success:
                    return jsonify({'message': 'Successfully resubscribed to newsletter'}), 200
                else:
                    return jsonify({'error': 'Failed to resubscribe'}), 500
        
        # Create newsletter subscription document
        newsletter_doc = {
            'email': email,
            'name': name,
            'interests': interests,
            'is_active': True,
            'subscribed_at': datetime.utcnow(),
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'unsubscribed_at': None
        }
        
        # Insert subscription into database
        subscription_id = DatabaseOperations.insert_one(Collections.NEWSLETTERS, newsletter_doc)
        
        if not subscription_id:
            return jsonify({'error': 'Failed to subscribe to newsletter'}), 500
        
        logger.info(f"New newsletter subscription: {email}")
        
        return jsonify({
            'message': 'Successfully subscribed to newsletter',
            'subscription_id': subscription_id
        }), 201
        
    except Exception as e:
        logger.error(f"Newsletter subscription error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@api_routes.route('/api/newsletter/unsubscribe', methods=['POST'])
def unsubscribe_newsletter():
    """Unsubscribe from newsletter"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('email'):
            return jsonify({'error': 'Email is required'}), 400
        
        email = data['email'].lower().strip()
        
        # Find subscription
        subscription = DatabaseOperations.find_one(Collections.NEWSLETTERS, {'email': email})
        
        if not subscription:
            return jsonify({'error': 'Email not found in newsletter subscriptions'}), 404
        
        if not subscription.get('is_active', False):
            return jsonify({'error': 'Email is already unsubscribed'}), 400
        
        # Update subscription status
        success = DatabaseOperations.update_one(
            Collections.NEWSLETTERS,
            {'email': email},
            {'$set': {
                'is_active': False,
                'updated_at': datetime.utcnow(),
                'unsubscribed_at': datetime.utcnow()
            }}
        )
        
        if not success:
            return jsonify({'error': 'Failed to unsubscribe'}), 500
        
        logger.info(f"Newsletter unsubscription: {email}")
        
        return jsonify({'message': 'Successfully unsubscribed from newsletter'}), 200
        
    except Exception as e:
        logger.error(f"Newsletter unsubscription error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

# Blog Routes

@api_routes.route('/api/blogs', methods=['GET'])
def get_blogs():
    """Get blog posts"""
    try:
        # Get query parameters
        category = request.args.get('category')
        page = int(request.args.get('page', 1))
        limit = int(request.args.get('limit', 10))
        published_only = request.args.get('published', 'true').lower() == 'true'
        
        # Build filter
        filter_dict = {}
        if category:
            filter_dict['category'] = category
        if published_only:
            filter_dict['is_published'] = True
        
        # Get blogs from database
        blogs = DatabaseOperations.find_many(Collections.BLOGS, filter_dict, limit)
        
        # Convert ObjectId to string for JSON serialization
        for blog in blogs:
            blog['_id'] = str(blog['_id'])
        
        return jsonify({
            'blogs': blogs,
            'page': page,
            'limit': limit
        }), 200
        
    except Exception as e:
        logger.error(f"Get blogs error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

@api_routes.route('/api/blogs/<blog_id>', methods=['GET'])
def get_blog(blog_id):
    """Get a specific blog post"""
    try:
        # Find blog in database
        blog = DatabaseOperations.find_one(Collections.BLOGS, {'_id': blog_id})
        
        if not blog:
            return jsonify({'error': 'Blog post not found'}), 404
        
        # Convert ObjectId to string
        blog['_id'] = str(blog['_id'])
        
        # Increment view count
        DatabaseOperations.update_one(
            Collections.BLOGS,
            {'_id': blog_id},
            {'$inc': {'views': 1}}
        )
        
        return jsonify({'blog': blog}), 200
        
    except Exception as e:
        logger.error(f"Get blog error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

# Analytics Routes

@api_routes.route('/api/analytics/track', methods=['POST'])
def track_analytics():
    """Track analytics events"""
    try:
        data = request.get_json()
        
        # Validate required fields
        if not data.get('event_type'):
            return jsonify({'error': 'Event type is required'}), 400
        
        event_type = data['event_type']
        page_url = data.get('page_url', '')
        user_agent = request.headers.get('User-Agent', '')
        ip_address = request.environ.get('HTTP_X_FORWARDED_FOR', request.environ.get('REMOTE_ADDR'))
        referrer = data.get('referrer', '')
        session_id = data.get('session_id', '')
        user_id = data.get('user_id')
        
        # Create analytics document
        analytics_doc = {
            'event_type': event_type,
            'page_url': page_url,
            'user_agent': user_agent,
            'ip_address': ip_address,
            'referrer': referrer,
            'session_id': session_id,
            'user_id': user_id,
            'timestamp': datetime.utcnow(),
            'data': data.get('data', {})
        }
        
        # Insert analytics into database
        analytics_id = DatabaseOperations.insert_one(Collections.ANALYTICS, analytics_doc)
        
        if not analytics_id:
            logger.warning("Failed to track analytics event")
        
        return jsonify({'message': 'Event tracked successfully'}), 200
        
    except Exception as e:
        logger.error(f"Analytics tracking error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

# Quote Request Routes

@api_routes.route('/api/quote', methods=['POST'])
def request_quote():
    """Request a quote"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['firstName', 'lastName', 'email', 'company', 'serviceType']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        first_name = data['firstName'].strip()
        last_name = data['lastName'].strip()
        email = data['email'].lower().strip()
        phone = data.get('phone', '').strip()
        company = data['company'].strip()
        service_type = data['serviceType'].strip()
        project_description = data.get('projectDescription', '').strip()
        budget_range = data.get('budgetRange', '').strip()
        timeline = data.get('timeline', '').strip()
        
        # Validate email format
        if not validate_email(email):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # Validate phone if provided
        if phone and not validate_phone(phone):
            return jsonify({'error': 'Invalid phone number format'}), 400
        
        # Create quote request document
        quote_doc = {
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'phone': phone,
            'company': company,
            'service_type': service_type,
            'project_description': project_description,
            'budget_range': budget_range,
            'timeline': timeline,
            'status': 'pending',
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
            'quote_amount': None,
            'quote_sent_at': None,
            'notes': []
        }
        
        # Insert quote request into database
        quote_id = DatabaseOperations.insert_one('quote_requests', quote_doc)
        
        if not quote_id:
            return jsonify({'error': 'Failed to submit quote request'}), 500
        
        logger.info(f"New quote request submitted: {email}")
        
        return jsonify({
            'message': 'Quote request submitted successfully',
            'quote_id': quote_id
        }), 201
        
    except Exception as e:
        logger.error(f"Quote request error: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500
