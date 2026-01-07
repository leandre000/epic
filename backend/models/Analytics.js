const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
    enum: ['job_view', 'application_submit', 'profile_view', 'search'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  metadata: {
    type: mongoose.Schema.Types.Mixed,
  },
  ip: String,
  userAgent: String,
}, {
  timestamps: true,
});

analyticsSchema.index({ event: 1, createdAt: -1 });
analyticsSchema.index({ user: 1, createdAt: -1 });

module.exports = mongoose.model('Analytics', analyticsSchema);

