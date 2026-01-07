const Notification = require('../models/Notification');

// Create notification
const createNotification = async (userId, type, title, message, link = null, metadata = {}) => {
  try {
    const notification = await Notification.create({
      user: userId,
      type,
      title,
      message,
      link,
      metadata,
    });
    return notification;
  } catch (error) {
    console.error('Error creating notification:', error);
    return null;
  }
};

// Notify user about application status
const notifyApplicationStatus = async (userId, applicationId, status, jobTitle) => {
  const statusMessages = {
    reviewing: 'Your application is under review',
    shortlisted: 'Congratulations! You have been shortlisted',
    interview: 'You have been selected for an interview',
    accepted: 'Congratulations! Your application has been accepted',
    rejected: 'Thank you for your interest, but we have decided to move forward with other candidates',
  };

  return await createNotification(
    userId,
    'application',
    `Application Update: ${jobTitle}`,
    statusMessages[status] || 'Your application status has been updated',
    `/applications/${applicationId}`,
    { applicationId, status }
  );
};

// Notify employer about new application
const notifyNewApplication = async (employerId, applicationId, applicantName, jobTitle) => {
  return await createNotification(
    employerId,
    'application',
    'New Application Received',
    `${applicantName} has applied for ${jobTitle}`,
    `/applications/${applicationId}`,
    { applicationId }
  );
};

module.exports = {
  createNotification,
  notifyApplicationStatus,
  notifyNewApplication,
};

