'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/klair/Sites/gms/api/client/lib/withData.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _initApollo = require('./initApollo');

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        (0, _inherits3.default)(WithData, _React$Component);
        (0, _createClass3.default)(WithData, null, [{
            key: 'getInitialProps',
            value: function () {
                var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
                    var serverState, composedInitialProps, apollo, url, app, state;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    serverState = {};

                                    // Evaluate the composed component's getInitialProps()

                                    composedInitialProps = {};

                                    if (!ComposedComponent.getInitialProps) {
                                        _context.next = 6;
                                        break;
                                    }

                                    _context.next = 5;
                                    return ComposedComponent.getInitialProps(ctx);

                                case 5:
                                    composedInitialProps = _context.sent;

                                case 6:
                                    if (process.browser) {
                                        _context.next = 20;
                                        break;
                                    }

                                    apollo = (0, _initApollo2.default)();
                                    // Provide the `url` prop data in case a graphql query uses it

                                    url = { query: ctx.query, pathname: ctx.pathname };

                                    // Run all graphql queries

                                    app = _react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 30
                                        }
                                    }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 31
                                        }
                                    })));
                                    _context.prev = 10;
                                    _context.next = 13;
                                    return (0, _reactApollo.getDataFromTree)(app);

                                case 13:
                                    _context.next = 18;
                                    break;

                                case 15:
                                    _context.prev = 15;
                                    _context.t0 = _context['catch'](10);

                                    // Catch any Apollo Client GraphQL errors as they crash
                                    // SSR. Errors are handled via data.error in the JSX.
                                    console.log('apollo get on server error', _context.t0);

                                case 18:

                                    // Extract query data from the Apollo's store
                                    state = apollo.getInitialState();

                                    serverState = {
                                        apollo: { // Make sure to only include Apollo's data state
                                            data: state.data
                                        }
                                    };

                                case 20:
                                    return _context.abrupt('return', (0, _extends3.default)({
                                        serverState: serverState
                                    }, composedInitialProps));

                                case 21:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[10, 15]]);
                }));

                function getInitialProps(_x) {
                    return _ref.apply(this, arguments);
                }

                return getInitialProps;
            }()
        }]);

        function WithData(props) {
            (0, _classCallCheck3.default)(this, WithData);

            var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

            _this.apollo = (0, _initApollo2.default)(_this.props.serverState);
            return _this;
        }

        (0, _createClass3.default)(WithData, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 67
                    }
                })));
            }
        }]);
        return WithData;
    }(_react2.default.Component), _class.displayName = 'WithData(' + ComposedComponent.displayName + ')', _class.propTypes = {
        serverState: _propTypes2.default.object.isRequired
    }, _temp;
};