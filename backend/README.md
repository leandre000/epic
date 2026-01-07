# Dreamize Backend API

RESTful API for the Dreamize careers platform built with Node.js, Express, and MongoDB.

## Features

- User authentication (JWT)
- Job management
- Company management
- Application system
- Notification system
- File uploads (Cloudinary)
- Email notifications
- Rate limiting
- Input validation
- Error handling
- Caching
- Analytics

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get single job
- `POST /api/jobs` - Create job (Employer)
- `PUT /api/jobs/:id` - Update job (Employer)
- `DELETE /api/jobs/:id` - Delete job (Employer)

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications` - Get applications
- `GET /api/applications/:id` - Get single application
- `PUT /api/applications/:id/status` - Update status

### Companies
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get single company
- `POST /api/companies` - Create company
- `PUT /api/companies/:id` - Update company

## Development

```bash
npm install
npm run dev
```

## Testing

```bash
npm test
```

## Environment Variables

See `env.example` for required environment variables.

