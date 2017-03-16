import nodemailer from 'nodemailer';
import aws from 'aws-sdk';
import html from 'html-template-tag';
import asyncBusboy from 'async-busboy';

import conf from '../conf';

const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: conf.get('mailer.user'),
        pass: conf.get('mailer.password')
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

// Ref: https://devcenter.heroku.com/articles/s3-upload-node#uploading-directly-to-s3
export const upload = async (ctx) => {
    const s3 = new aws.S3({ accessKeyId: conf.get('s3.key'), secretAccessKey: conf.get('s3.secret') });

    const { files } = await asyncBusboy(ctx.req);
    // console.log('files', files, fields);
    const file = files[0];

    const fileName = file.filename;
    const fileType = file.mimeType;
    const s3Params = {
        Bucket: conf.get('s3.bucket'),
        Key: fileName,
        Expires: 60,
        ContentType: fileType,
        ACL: 'public-read'
    };

    try {
        const data = await new Promise((resolve, reject) => {
            s3.getSignedUrl('putObject', s3Params, (err, url) => {
                if (err) { reject(err); } else { resolve(url); }
            });
        });
        ctx.body = {
            signedRequest: data,
            url: `https://${conf.get('s3.bucket')}.s3.amazonaws.com/${fileName}`
        };
    } catch (err) {
        ctx.status = 400;
        ctx.body = { status: 'error', message: err.message };
    }
};
