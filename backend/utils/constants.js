// Application constants
const USER_ROLES = {
  JOB_SEEKER: 'job_seeker',
  EMPLOYER: 'employer',
  ADMIN: 'admin',
};

const JOB_STATUS = {
  DRAFT: 'draft',
  ACTIVE: 'active',
  CLOSED: 'closed',
  PAUSED: 'paused',
};

const APPLICATION_STATUS = {
  PENDING: 'pending',
  REVIEWING: 'reviewing',
  SHORTLISTED: 'shortlisted',
  INTERVIEW: 'interview',
  REJECTED: 'rejected',
  ACCEPTED: 'accepted',
  WITHDRAWN: 'withdrawn',
};

const JOB_CATEGORIES = [
  'engineering',
  'design',
  'product',
  'marketing',
  'sales',
  'operations',
  'finance',
  'hr',
  'other',
];

module.exports = {
  USER_ROLES,
  JOB_STATUS,
  APPLICATION_STATUS,
  JOB_CATEGORIES,
};

