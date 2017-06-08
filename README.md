## `kickoff-koa2`

> An opinionated boilerplate for koa v2 with batteries included.

#### Requirements
```bash
- Node >=v7.7.2
- NPM >=v4.1.2
- MongoDB
```
#### Features
```bash
- Local Authentication using Email and Password (Login, Register)
- Contact form request (powered by Mailgun, Sendgrid or Mandrill)
- File upload using Amazon S3
- Authorised routes using JWT tokens (Get current logged in data, profile update, password reset)
- GraphQL loaded (Apollo Data)
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

### Structure
```bash
├── README.md           # you're here
├── bin                 # folder that bootstraps the application
├── src                 # contains source files
│   ├── conf            # wraps configurations files
│   ├── controller      # contains all controllers in the application
│   ├── graphql         # contains graphql schema and resolvers
│   ├── middleware      # folder with all middlewares
│   ├── route           # wraps all the routes and exports a single composed middleware
│   └── service         # contains all the service logic
│   └── utils           # contains all extra utilities
└── test                # unit tests
```

**Suggestion:** Every folder name is _singular_ like `route`, `middleware` instead of `routes`, `middlewares`. If you want to add more folders as per your need, make sure they should be singular too (for e.g. `util`, `helper` etc) only for the sake of consistency.

### Included

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Next.js](https://github.com/zeit/next.js) Framework for server-rendered React apps
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [Koa Context Validator](https://github.com/chentsulin/koa-context-validator) A robust context validator for koajs.
- [Nodemailer](https://github.com/nodemailer/nodemailer) Send e-mails with Node.JS – easy as cake!
- [Passport.js](https://github.com/jaredhanson/passport) Simple, unobtrusive authentication for Node.js.
- [Mongoose](https://github.com/Automattic/mongoose) MongoDB object modeling designed to work in an asynchronous environment.
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [AWS SDK](https://github.com/aws/aws-sdk-js) AWS SDK for JavaScript in the browser and Node.js. strings.
- [Ava](https://github.com/avajs/ava) For unit tests.
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

**Suggestion:** To turn on debug messages, set `DEBUG` environment variable to `kickstarter:*`
- `DEBUG=kickstarter:* yarn run watch`

To use Node chrome debug, make sure to install this extension
https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj/

### Some other great Koa.js boilerplates

- https://github.com/umayr/koa2-kickstarter
- https://github.com/entria/koa-passport-mongoose-graphql
- https://github.com/llambda/koa-boiler
- https://github.com/crocodilejs/crocodile-node-mvc-framework
