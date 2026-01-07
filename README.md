# Dreamize Platform - Fullstack Careers Platform

A professional, modern fullstack careers platform built with React/Next.js frontend and Node.js/Express backend, implementing the epicCareers Figma design.

## 🚀 Features

### For Job Seekers
- Browse and search jobs with advanced filters
- Create and manage profile with skills, experience, and education
- Apply to jobs with resume and cover letter
- Track application status
- Save favorite jobs

### For Employers
- Create and manage company profiles
- Post job listings with detailed requirements
- Review and manage applications
- Track candidate pipeline
- Schedule interviews

### Platform Features
- User authentication and authorization (JWT)
- Role-based access control (Job Seeker, Employer, Admin)
- Responsive design matching Figma specifications
- Real-time updates
- Secure file uploads
- Email notifications
- Advanced search and filtering

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React Query** - Data fetching and caching
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Express Validator** - Input validation
- **Multer** - File uploads
- **Cloudinary** - Image storage

## 📁 Project Structure

```
dreamize-platform/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   ├── server.js        # Entry point
│   └── package.json
├── frontend/
│   ├── app/             # Next.js app directory
│   ├── components/      # React components
│   ├── lib/             # Utilities and configs
│   ├── hooks/           # Custom hooks
│   ├── store/           # State management
│   └── package.json
├── package.json         # Root package.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd dreamx
```

2. **Install dependencies**
```bash
npm run install:all
```

3. **Set up environment variables**

Backend (create `backend/.env`):
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/dreamize
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
```

Frontend (create `frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. **Start development servers**
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend server on `http://localhost:3000`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Jobs
- `GET /api/jobs` - Get all jobs (with filters)
- `GET /api/jobs/:id` - Get single job
- `POST /api/jobs` - Create job (Employer)
- `PUT /api/jobs/:id` - Update job (Employer)
- `DELETE /api/jobs/:id` - Delete job (Employer)

### Companies
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get single company
- `POST /api/companies` - Create company (Employer)
- `PUT /api/companies/:id` - Update company (Owner)

### Applications
- `POST /api/applications` - Apply to job (Job Seeker)
- `GET /api/applications` - Get applications
- `GET /api/applications/:id` - Get single application
- `PUT /api/applications/:id/status` - Update status (Employer)

### Profile
- `GET /api/profile` - Get current user profile
- `PUT /api/profile` - Update profile
- `PUT /api/profile/password` - Update password

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Helmet.js security headers
- Role-based access control

## 🎨 Design Implementation

The frontend implements the epicCareers Figma design with:
- Modern, clean UI
- Responsive layouts
- Smooth animations
- Accessible components
- Professional color scheme
- Consistent typography

## 📦 Deployment

### Backend
- Deploy to Heroku, Railway, or AWS
- Set environment variables
- Configure MongoDB Atlas

### Frontend
- Deploy to Vercel, Netlify, or AWS
- Set `NEXT_PUBLIC_API_URL` to production API URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License

## 👥 Authors

Dreamize Development Team

---

Built with ❤️ for the future of careers


