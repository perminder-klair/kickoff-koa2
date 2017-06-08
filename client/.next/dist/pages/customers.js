'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/klair/Sites/gms/api/client/pages/customers.js?entry'; // eslint-disable-line
// eslint-disable-line

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _withData = require('../lib/withData');

var _withData2 = _interopRequireDefault(_withData);

var _CustomersList = require('../components/CustomersList');

var _CustomersList2 = _interopRequireDefault(_CustomersList);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _withData2.default)(function () {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('title', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, 'Koa2 React app'), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement('div', { className: 'container', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }), _react2.default.createElement('h1', { className: 'center-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, 'Welcome to Koa.js + React.js app!'), _react2.default.createElement(_CustomersList2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    })));
});