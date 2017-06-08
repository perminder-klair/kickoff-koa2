'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/klair/Sites/gms/api/client/components/CustomersList.js'; // eslint-disable-line

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query allCustomers {\n        allCustomers {\n            id\n            fullName\n        }\n    }\n'], ['\n    query allCustomers {\n        allCustomers {\n            id\n            fullName\n        }\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _underscore = require('underscore');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CustomersList = function CustomersList(_ref) {
    var allCustomers = _ref.data.allCustomers;

    console.log('data', allCustomers);
    if ((0, _underscore.isUndefined)(allCustomers)) {
        return _react2.default.createElement('div', {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 8
            }
        }, 'Loading...');
    }

    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, allCustomers.map(function (customer) {
        return _react2.default.createElement('li', { key: customer.id, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
            }
        }, _react2.default.createElement('a', { href: '#', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
            }
        }, customer.fullName));
    })));
};

var allCustomers = (0, _reactApollo.gql)(_templateObject);

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
exports.default = (0, _reactApollo.graphql)(allCustomers)(CustomersList);