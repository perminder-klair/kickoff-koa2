'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// APP CONSTATNS
exports.default = {
    VERSION: '0.1.0',
    // DEBUG: false,
    DEBUG: process.env.NODE_ENV === 'development',
    MOCK: false,
    APP_NAME: 'GMS',

    API_URL: 'http://dev-api.youngworks.co.uk/',
    API_URL_DEV: 'http://localhost:4000/'
};