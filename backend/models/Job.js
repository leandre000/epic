const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a job title'],
    trim: true,
    maxlength: [100, 'Job title cannot exceed 100 characters']
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'Please provide a company']
  },
  description: {
    type: String,
    required: [true, 'Please provide a job description']
  },
  requirements: [{
    type: String,
    trim: true
  }],
  responsibilities: [{
    type: String,
    trim: true
  }],
  skills: [{
    type: String,
    trim: true
  }],
  location: {
    type: {
      type: String,
      enum: ['remote', 'onsite', 'hybrid'],
      default: 'onsite'
    },
    city: String,
    country: String,
    address: String
  },
  employmentType: {
    type: String,
    enum: ['full-time', 'part-time', 'contract', 'internship', 'freelance'],
    default: 'full-time'
  },
  experienceLevel: {
    type: String,
    enum: ['entry', 'mid', 'senior', 'executive'],
    default: 'mid'
  },
  salary: {
    min: Number,
    max: Number,
    currency: {
      type: String,
      default: 'USD'
    },
    period: {
      type: String,
      enum: ['hourly', 'monthly', 'yearly'],
      default: 'yearly'
    }
  },
  benefits: [{
    type: String
  }],
  category: {
    type: String,
    required: [true, 'Please provide a job category'],
    enum: [
      'engineering',
      'design',
      'product',
      'marketing',
      'sales',
      'operations',
      'finance',
      'hr',
      'other'
    ]
  },
  status: {
    type: String,
    enum: ['draft', 'active', 'closed', 'paused'],
    default: 'draft'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
  views: {
    type: Number,
    default: 0
  },
  applicationDeadline: Date,
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for search functionality
jobSchema.index({ title: 'text', description: 'text', skills: 'text' });
jobSchema.index({ company: 1, status: 1 });
jobSchema.index({ category: 1, status: 1 });
jobSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Job', jobSchema);


