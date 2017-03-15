import nodemailer from 'nodemailer';
import aws from 'aws-sdk';

import conf from '../conf';

const transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: conf.get('mailerUser'),
        pass: conf.get('mailerPassword')
    }
});

export const contact = async (ctx) => {
    const { name, email, message } = ctx.request.body;

    // TODO better validation
    if (name && email && message) {
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
            ctx.body = { status: 'error', message: 'Invalid contact informaton provided' };
        }
    } else {
        ctx.status = 400;
        ctx.body = { status: 'error', message: 'Invalid contact informaton provided' };
    }
};

const S3_BUCKET = '';

// Ref: https://devcenter.heroku.com/articles/s3-upload-node#uploading-directly-to-s3
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
