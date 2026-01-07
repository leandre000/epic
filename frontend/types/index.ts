// TypeScript type definitions
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'job_seeker' | 'employer' | 'admin';
  avatar?: string;
  bio?: string;
  skills?: string[];
}

export interface Job {
  _id: string;
  title: string;
  description: string;
  company: Company;
  location: {
    type: 'remote' | 'onsite' | 'hybrid';
    city?: string;
    country?: string;
  };
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  experienceLevel: 'entry' | 'mid' | 'senior' | 'executive';
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  status: 'draft' | 'active' | 'closed' | 'paused';
  createdAt: string;
}

export interface Company {
  _id: string;
  name: string;
  description?: string;
  industry: string;
  location?: {
    city: string;
    country: string;
  };
  logo?: string;
}

export interface Application {
  _id: string;
  job: Job;
  applicant: User;
  status: 'pending' | 'reviewing' | 'shortlisted' | 'interview' | 'rejected' | 'accepted' | 'withdrawn';
  coverLetter?: string;
  resume: string;
  createdAt: string;
}

