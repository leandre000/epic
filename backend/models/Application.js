const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: [true, 'Please provide a job']
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please provide an applicant']
  },
  coverLetter: {
    type: String,
    maxlength: [2000, 'Cover letter cannot exceed 2000 characters']
  },
  resume: {
    type: String,
    required: [true, 'Please provide a resume']
  },
  status: {
    type: String,
    enum: ['pending', 'reviewing', 'shortlisted', 'interview', 'rejected', 'accepted', 'withdrawn'],
    default: 'pending'
  },
  notes: [{
    note: String,
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  interviewSchedule: {
    date: Date,
    time: String,
    location: String,
    type: {
      type: String,
      enum: ['phone', 'video', 'onsite']
    },
    notes: String
  },
  feedback: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    providedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    providedAt: Date
  }
}, {
  timestamps: true
});

// Prevent duplicate applications
applicationSchema.index({ job: 1, applicant: 1 }, { unique: true });
applicationSchema.index({ applicant: 1, status: 1 });
applicationSchema.index({ job: 1, status: 1 });

module.exports = mongoose.model('Application', applicationSchema);


