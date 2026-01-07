# Deployment Guide

This guide covers deploying the Dreamize platform to production.

## Backend Deployment

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or self-hosted MongoDB)
- Cloudinary account (for file uploads)
- SMTP service (for emails)

### Environment Variables

Create a `.env` file with the following variables:

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
FRONTEND_URL=https://your-frontend-domain.com
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
FROM_NAME=Dreamize
FROM_EMAIL=noreply@dreamize.com
```

### Deployment Options

#### Heroku
1. Install Heroku CLI
2. `heroku create your-app-name`
3. `git push heroku main`
4. Set environment variables in Heroku dashboard

#### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically on push

#### AWS/DigitalOcean
1. Set up a server (Ubuntu recommended)
2. Install Node.js and PM2
3. Clone repository
4. Install dependencies: `npm install`
5. Set environment variables
6. Start with PM2: `pm2 start backend/server.js`

## Frontend Deployment

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-backend-api.com/api
```

### Deployment Options

#### Vercel (Recommended)
1. Import your GitHub repository
2. Set environment variables
3. Deploy automatically

#### Netlify
1. Connect GitHub repository
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/.next`
4. Set environment variables

#### AWS Amplify
1. Connect repository
2. Configure build settings
3. Set environment variables

## Database Setup

1. Create MongoDB Atlas cluster
2. Whitelist your server IP addresses
3. Create database user
4. Get connection string
5. Update `MONGODB_URI` in environment variables

## SSL/HTTPS

Ensure your production URLs use HTTPS:
- Backend: `https://api.yourdomain.com`
- Frontend: `https://yourdomain.com`

## Monitoring

Consider setting up:
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Uptime monitoring (UptimeRobot)

