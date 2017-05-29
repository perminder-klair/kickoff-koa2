import convict from 'convict';
import fs from 'fs';
import debug from 'debug';

const conf = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    ip: {
        doc: 'The ip address to bind.',
        format: 'ipaddress',
        default: '127.0.0.1',
        env: 'IP_ADDRESS',
    },
    port: {
        doc: 'The port to bind.',
        format: 'port',
        default: 4000,
        env: 'PORT',
    },
    mongodb: {
        doc: 'URL to mongodb.',
        format: String,
        default: 'mongodb://gms:gmsgms@cockney.2.mongolayer.com:10231/gms?replicaSet=set-55e6c9795556ddd3af0005ab',
        env: 'MONGODB',
    },
    jwtSecret: {
        doc: 'JWT secret.',
        format: String,
        default: 'my-super-secure-secret',
        env: 'JWTSECRET',
    },
    mailer: {
        user: {
            doc: 'Mailer user.',
            format: String,
            default: '',
        },
        password: {
            doc: 'Mailer password.',
            format: String,
            default: '',
        }
    },
    s3: {
        bucket: {
            doc: 'S3 Bucket name.',
            format: String,
            default: '',
        },
        key: {
            doc: 'S3 AWS_ACCESS_KEY_ID.',
            format: String,
            default: '',
        },
        secret: {
            doc: 'S3 AWS_SECRET_ACCESS_KEY.',
            format: String,
            default: '',
        }
    }
});

const d = debug('kickstarter:conf');
const env = conf.get('env');
try {
    const path = `${__dirname}/${env}.json`;

    d('trying to access %s', path);
    fs.accessSync(path, fs.F_OK);

    conf.loadFile(path);
} catch (error) {
    d('file doesn\'t exist, loading defaults');
}

conf.validate({ allowed: 'strict' });

export default conf;
