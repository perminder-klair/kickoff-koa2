import nodemailer from 'nodemailer';
import html from 'html-template-tag';

import conf from '../utils/config';

const transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: conf.get('mailer.user'),
    pass: conf.get('mailer.password'),
  },
});

export const landing = ctx => {
  ctx.body = html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>API</title>
      </head>
      <body>
        <h1>Welcome to API!</h1>
      </body>
    </html>
  `;
};

export const contact = async ctx => {
  const { name, email, message } = ctx.request.body;

  const mailOptions = {
    to: 'your@email.com',
    from: `${name} <${email}>`,
    subject: 'Contact Form',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    ctx.body = {
      status: 'success',
      message: 'Contact informaton sent successfully',
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { status: 'error', message: err.message };
  }
};
