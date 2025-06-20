# KPB Supports Solutions API

A Flask-based REST API for the KPB Supports Solutions website with authentication, contact forms, newsletter subscriptions, and more.

## Features

- **Authentication System**
  - User registration and login
  - JWT token-based authentication
  - Password strength validation
  - Profile management
  - Password change functionality

- **Contact Management**
  - Contact form submissions
  - Contact retrieval with filtering

- **Newsletter System**
  - Newsletter subscriptions
  - Unsubscribe functionality
  - Duplicate prevention

- **Blog System**
  - Blog post retrieval
  - Category filtering
  - View tracking

- **Analytics Tracking**
  - Event tracking
  - User behavior analytics

- **Quote Requests**
  - Service quote submissions
  - Quote management

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kpb-intern/api
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   # or
   source venv/bin/activate  # On macOS/Linux
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   copy .env.example .env
   # Edit .env file with your configuration
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `POST /api/auth/change-password` - Change password

### Contact

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)

### Newsletter

- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter

### Blog

- `GET /api/blogs` - Get blog posts
- `GET /api/blogs/<id>` - Get specific blog post

### Analytics

- `POST /api/analytics/track` - Track analytics events

### Quote Requests

- `POST /api/quote` - Submit quote request

### Health Check

- `GET /api/health` - API and database health check

## Request/Response Examples

### User Registration

**POST** `/api/auth/register`

```json
{
  "email": "john@example.com",
  "password": "SecurePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "company": "Example Corp"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "company": "Example Corp",
    "role": "user",
    "isActive": true,
    "isVerified": false
  },
  "access_token": "jwt_token",
  "refresh_token": "refresh_token"
}
```

### Contact Form Submission

**POST** `/api/contact`

```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+1234567890",
  "company": "Smith Industries",
  "subject": "Website Development Inquiry",
  "message": "I would like to discuss a website development project.",
  "serviceType": "Web Development"
}
```

### Newsletter Subscription

**POST** `/api/newsletter/subscribe`

```json
{
  "email": "subscriber@example.com",
  "name": "Subscriber Name",
  "interests": ["web-development", "digital-marketing"]
}
```

## Database Collections

The API uses MongoDB with the following collections:

- `users` - User accounts and profiles
- `contacts` - Contact form submissions
- `newsletters` - Newsletter subscriptions
- `blogs` - Blog posts
- `analytics` - Analytics events
- `quote_requests` - Quote requests

## Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Environment Variables

See `.env.example` for all available environment variables.

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Error message description"
}
```

HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `409` - Conflict
- `500` - Internal Server Error

## Security Features

- Password hashing using Werkzeug
- JWT token authentication
- Input validation and sanitization
- Email format validation
- CORS configuration
- Token blacklisting on logout

## Development

To run in development mode:

```bash
python app.py
```

The API will reload automatically when files are changed.

## Production Deployment

1. Set `FLASK_ENV=production` in environment variables
2. Use a production WSGI server like Gunicorn
3. Set up proper secret keys
4. Configure database connection pooling
5. Set up logging and monitoring

## Dependencies

- Flask - Web framework
- Flask-CORS - Cross-origin resource sharing
- Flask-JWT-Extended - JWT token handling
- PyMongo - MongoDB driver
- Werkzeug - Password hashing
- python-dotenv - Environment variable loading
