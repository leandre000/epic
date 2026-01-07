const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

// Send email
const sendEmail = async (options) => {
  const transporter = createTransporter();
  
  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: options.html
  };

  await transporter.sendMail(message);
};

// Email templates
const emailTemplates = {
  welcome: (name) => ({
    subject: 'Welcome to Dreamize!',
    html: `
      <h1>Welcome ${name}!</h1>
      <p>Thank you for joining Dreamize. Start exploring amazing career opportunities today!</p>
    `
  }),
  applicationReceived: (jobTitle) => ({
    subject: 'Application Received',
    html: `
      <h1>Application Received</h1>
      <p>Your application for ${jobTitle} has been received and is under review.</p>
    `
  })
};

module.exports = { sendEmail, emailTemplates };

