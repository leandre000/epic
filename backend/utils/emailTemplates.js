// Enhanced email templates
const emailTemplates = {
  welcome: (name) => ({
    subject: 'Welcome to Dreamize!',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
          .button { display: inline-block; padding: 12px 24px; background: #2563eb; color: white; text-decoration: none; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Dreamize!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for joining Dreamize. We're excited to help you find your dream job or the perfect candidate.</p>
            <p><a href="#" class="button">Get Started</a></p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  applicationReceived: (jobTitle, applicantName) => ({
    subject: 'New Application Received',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Application</h1>
          </div>
          <div class="content">
            <p>Hello,</p>
            <p>${applicantName} has applied for the position: <strong>${jobTitle}</strong></p>
            <p>Please review the application in your dashboard.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  applicationStatusUpdate: (jobTitle, status) => ({
    subject: 'Application Status Update',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9fafb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Application Update</h1>
          </div>
          <div class="content">
            <p>Hello,</p>
            <p>Your application for <strong>${jobTitle}</strong> has been updated to: <strong>${status}</strong></p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),
};

module.exports = emailTemplates;

