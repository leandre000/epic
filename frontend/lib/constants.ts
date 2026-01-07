export const JOB_CATEGORIES = [
  'engineering',
  'design',
  'product',
  'marketing',
  'sales',
  'operations',
  'finance',
  'hr',
  'other',
] as const;

export const EMPLOYMENT_TYPES = [
  'full-time',
  'part-time',
  'contract',
  'internship',
  'freelance',
] as const;

export const EXPERIENCE_LEVELS = [
  'entry',
  'mid',
  'senior',
  'executive',
] as const;

export const APPLICATION_STATUSES = [
  'pending',
  'reviewing',
  'shortlisted',
  'interview',
  'rejected',
  'accepted',
  'withdrawn',
] as const;

export const USER_ROLES = {
  JOB_SEEKER: 'job_seeker',
  EMPLOYER: 'employer',
  ADMIN: 'admin',
} as const;

