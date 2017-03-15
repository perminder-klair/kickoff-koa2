## `koa2-kickstarter`

> An opinionated boilerplate for koa v2 with batteries included.

#### Requirements
```bash
- Node v7.7.2
- NPM v4.1.2
```
#### Features
```bash
- Local Authentication using Email and Password
- MVC Structure
- Contact Form (powered by Mailgun, Sendgrid or Mandrill)
- Image upload using Amazon S3
```
### Setup
```bash
  # clone the repository
  λ git clone https://github.com/umayr/koa2-kickstarter
  # change the current directory
  λ cd koa2-kickstarter
  # install all dependencies
  λ npm install
  # run the project
  λ npm start
```

### Structure
```bash
├── README.md           # you're here
├── bin                 # folder that bootstraps the application
├── src                 # contains source files
│   ├── conf            # wraps configurations files
│   ├── controller      # contains all controllers in the application
│   ├── middleware      # folder with all middlewares
│   ├── route           # wraps all the routes and exports a single composed middleware
│   └── service         # contains all the service logic
│   └── utils           # contains all extra utilities
└── test                # unit tests
```

**Suggestion:** Every folder name is _singular_ like `route`, `middleware` instead of `routes`, `middlewares`. If you want to add more folders as per your need, make sure they should be singular too (for e.g. `util`, `helper` etc) only for the sake of consistency.

### Included

- [Koa](https://github.com/koajs/koa) Well, duh.
- [Koa Router](https://github.com/alexmingoia/koa-router) For routing and all.
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [Ava](https://github.com/avajs/ava) For unit tests.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [Convict](https://github.com/mozilla/node-convict) Configuration management.
- [Babel](https://github.com/babel/babel) Support ES6/ES7 features.
- [ESLint](https://github.com/eslint/eslint/) Linting purposes (comes with extended Airbnb's base eslint configurations).
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).
- [Passport.js](https://github.com/jaredhanson/passport) Simple, unobtrusive authentication for Node.js.
- [Mongoose](https://github.com/Automattic/mongoose) MongoDB object modeling designed to work in an asynchronous environment.
- [Nodemailer](https://github.com/nodemailer/nodemailer) Send e-mails with Node.JS – easy as cake!
- [AWS SDK](https://github.com/aws/aws-sdk-js) AWS SDK for JavaScript in the browser and Node.js.
- [html-template-tag](https://github.com/AntonioVdlC/html-template-tag) ES6 Tagged Template for compiling HTML template strings.

And many more small packages.

### Scripts

- `npm start` - simply starts the server
- `npm test` - execute all unit tests
- `npm run lint` - lints all the files in `src/` folder
- `npm run lint:fix` - fixes all the possible linting errors
- `npm run watch` - starts the server with hot-reloading

**Suggestion:** To turn on debug messages, set `DEBUG` environment variable to `kickstarter:*`
- `DEBUG=kickstarter:* npm run watch`

### Some other Koa.js boilerplates

- https://github.com/umayr/koa2-kickstarter
- https://github.com/entria/koa-passport-mongoose-graphql
- https://github.com/llambda/koa-boiler
