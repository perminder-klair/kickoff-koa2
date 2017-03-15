import nodemailer from 'nodemailer';
import aws from 'aws-sdk';
import html from 'html-template-tag';

import conf from '../conf';

const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: conf.get('mailerUser'),
        pass: conf.get('mailerPassword')
    }
});

export const landing = (ctx) => {
    ctx.body = html`<!DOCTYPE html>
    <html>
    <head>
        <title>API</title>
    </head>
    <body>
        <h1>Welcome to API!</h1>
    </body>
    </html>`;
};

export const contact = async (ctx) => {
    const { name, email, message } = ctx.request.body;

    const mailOptions = {
        to: 'your@email.com',
        from: `${name} <${email}>`,
        subject: 'Contact Form',
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        ctx.body = { status: 'success', message: 'Contact informaton sent successfully' };
    } catch (err) {
        ctx.status = 400;
        ctx.body = { status: 'error', message: err.message };
    }
};

const S3_BUCKET = '';

// Ref: https://devcenter.heroku.com/articles/s3-upload-node#uploading-directly-to-s3
// Initialising the s3 object automatically loads the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY variables that were set into the environment earlier.
export const upload = async (ctx) => {
    const s3 = new aws.S3();
    const fileName = ctx.request.body['file-name'];
    const fileType = ctx.request.body['file-type'];
    const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    };

    try {
        const data = await s3.getSignedUrl('putObject', s3Params);
        ctx.body = {
            signedRequest: data,
            url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
    } catch (err) {
        ctx.status = 400;
        ctx.body = { status: 'error', message: err };
    }
};
