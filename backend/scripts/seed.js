const mongoose = require('mongoose');
const User = require('../models/User');
const Company = require('../models/Company');
const Job = require('../models/Job');
require('dotenv').config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/dreamize');

    // Clear existing data
    await User.deleteMany({});
    await Company.deleteMany({});
    await Job.deleteMany({});

    // Create sample users
    const employer = await User.create({
      firstName: 'John',
      lastName: 'Employer',
      email: 'employer@example.com',
      password: 'password123',
      role: 'employer',
    });

    const jobSeeker = await User.create({
      firstName: 'Jane',
      lastName: 'Seeker',
      email: 'seeker@example.com',
      password: 'password123',
      role: 'job_seeker',
    });

    // Create sample company
    const company = await Company.create({
      name: 'Tech Corp',
      industry: 'Technology',
      description: 'Leading technology company',
      owner: employer._id,
    });

    // Create sample jobs
    await Job.create({
      title: 'Senior Software Engineer',
      company: company._id,
      description: 'We are looking for an experienced software engineer...',
      category: 'engineering',
      employmentType: 'full-time',
      experienceLevel: 'senior',
      postedBy: employer._id,
      status: 'active',
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

