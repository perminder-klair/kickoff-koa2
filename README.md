## `kickoff-koa2-lite`

> An opinionated boilerplate for koa v2 with batteries included.

#### Requirements
```bash
- Node >=v10.13.0
- NPM >=v6.4.1
- MongoDB
```

#### Features
```bash
- Routing
- Contact form request (powered by Mailgun, Sendgrid or Mandrill)
```

### Setup

```bash
  # clone the repository
  λ git clone https://github.com/perminder-klair/kickoff-koa2
  # change the current directory
  λ cd kickoff-koa2
  # install all dependencies
  λ yarn install
  # run the project
  λ yarn start
```

### Included

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [Koa Context Validator](https://github.com/chentsulin/koa-context-validator) A robust context validator for koajs.
- [Nodemailer](https://github.com/nodemailer/nodemailer) Send e-mails with Node.JS – easy as cake!
- [Mongoose](https://github.com/Automattic/mongoose) MongoDB object modeling designed to work in an asynchronous environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [Convict](https://github.com/mozilla/node-convict) Configuration management.
- [Babel](https://github.com/babel/babel) Support ES6/ES7 features.
- [ESLint](https://github.com/eslint/eslint/) Linting purposes (comes with extended Airbnb's base eslint configurations).
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).

And many more small packages.

### Scripts

- `yarn start` - simply starts the server
- `yarn test` - execute all unit tests
- `yarn run lint` - lints all the files in `src/` folder
- `yarn run lint:fix` - fixes all the possible linting errors
- `yarn run watch` - starts the server with hot-reloading

To use Node chrome debug, make sure to install this extension
https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj/
