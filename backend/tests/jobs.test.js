const request = require('supertest');
const app = require('../server');
const Job = require('../models/Job');
const Company = require('../models/Company');
const User = require('../models/User');

describe('Job Routes', () => {
  let authToken;
  let employer;
  let company;

  beforeEach(async () => {
    await Job.deleteMany({});
    await Company.deleteMany({});
    await User.deleteMany({});

    employer = await User.create({
      firstName: 'Employer',
      lastName: 'User',
      email: 'employer@example.com',
      password: 'password123',
      role: 'employer',
    });

    company = await Company.create({
      name: 'Test Company',
      industry: 'Technology',
      owner: employer._id,
    });

    authToken = employer.generateToken();
  });

  describe('GET /api/jobs', () => {
    it('should get all active jobs', async () => {
      await Job.create({
        title: 'Software Engineer',
        company: company._id,
        description: 'Test description',
        category: 'engineering',
        postedBy: employer._id,
        status: 'active',
      });

      const res = await request(app).get('/api/jobs');

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.data).toHaveLength(1);
    });
  });

  describe('POST /api/jobs', () => {
    it('should create a new job', async () => {
      const res = await request(app)
        .post('/api/jobs')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          title: 'Software Engineer',
          company: company._id,
          description: 'Test description',
          category: 'engineering',
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.job.title).toBe('Software Engineer');
    });
  });
});

