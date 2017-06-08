
          window.__NEXT_REGISTER_PAGE('/customers', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/klair/Sites/gms/api/client/components/Header.js';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(563);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Header = function Header() {
    return _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement(_link2.default, { href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'home'))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_link2.default, { href: '/customers', __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, 'customers'))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, 'about'))), _react2.default.createElement('li', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_link2.default, { href: '/contact', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement('a', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, 'contact'))));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/klair/Sites/gms/api/client/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/klair/Sites/gms/api/client/components/Header.js"); } } })();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/Users/klair/Sites/gms/api/client/pages/customers.js?entry'; // eslint-disable-line
// eslint-disable-line

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(200);

var _head2 = _interopRequireDefault(_head);

var _withData = __webpack_require__(658);

var _withData2 = _interopRequireDefault(_withData);

var _CustomersList = __webpack_require__(655);

var _CustomersList2 = _interopRequireDefault(_CustomersList);

var _Header = __webpack_require__(564);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/klair/Sites/gms/api/client/pages/customers.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/klair/Sites/gms/api/client/pages/customers.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/customers")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(620);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/klair/Sites/gms/api/client/components/CustomersList.js'; // eslint-disable-line

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    query allCustomers {\n        allCustomers {\n            id\n            fullName\n        }\n    }\n'], ['\n    query allCustomers {\n        allCustomers {\n            id\n            fullName\n        }\n    }\n']);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactApollo = __webpack_require__(584);

var _underscore = __webpack_require__(664);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/klair/Sites/gms/api/client/components/CustomersList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/klair/Sites/gms/api/client/components/CustomersList.js"); } } })();

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// APP CONSTATNS
exports.default = {
    VERSION: '0.1.0',
    // DEBUG: false,
    DEBUG: "development" === 'development',
    MOCK: false,
    APP_NAME: 'GMS',

    API_URL: 'http://dev-api.youngworks.co.uk/',
    API_URL_DEV: 'http://localhost:4000/'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/klair/Sites/gms/api/client/lib/config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/klair/Sites/gms/api/client/lib/config.js"); } } })();

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = initApollo;

var _reactApollo = __webpack_require__(584);

var _isomorphicFetch = __webpack_require__(641);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _require$default = __webpack_require__(656).default,
    DEBUG = _require$default.DEBUG,
    API_URL_DEV = _require$default.API_URL_DEV,
    API_URL = _require$default.API_URL;

var API_BASE_URL = DEBUG ? API_URL_DEV : API_URL;

var apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
    global.fetch = _isomorphicFetch2.default;
}

function create(initialState) {
    return new _reactApollo.ApolloClient({
        initialState: initialState,
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        networkInterface: (0, _reactApollo.createNetworkInterface)({
            uri: API_BASE_URL + 'graphql' })
    });
}

function initApollo(initialState) {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/klair/Sites/gms/api/client/lib/initApollo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/klair/Sites/gms/api/client/lib/initApollo.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56), __webpack_require__(61)))

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(94);

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/klair/Sites/gms/api/client/lib/withData.js';

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(584);

var _initApollo = __webpack_require__(657);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/klair/Sites/gms/api/client/lib/withData.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/klair/Sites/gms/api/client/lib/withData.js"); } } })();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(56)))

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(602);


/***/ })

},[665]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jdXN0b21lcnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz81YTBiNzQ2Iiwid2VicGFjazovLy8uL3BhZ2VzL2N1c3RvbWVycy5qcz81YTBiNzQ2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tZXJzTGlzdC5qcz81YTBiNzQ2Iiwid2VicGFjazovLy8uL2xpYi9jb25maWcuanM/NWEwYjc0NiIsIndlYnBhY2s6Ly8vLi9saWIvaW5pdEFwb2xsby5qcz81YTBiNzQ2Iiwid2VicGFjazovLy8uL2xpYi93aXRoRGF0YS5qcz82ZTQxMjVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPHVsPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT5ob21lPC9hPjwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jdXN0b21lcnNcIj48YT5jdXN0b21lcnM8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL2Fib3V0XCI+PGE+YWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvbnRhY3RcIj48YT5jb250YWN0PC9hPjwvTGluaz48L2xpPlxuICAgIDwvdWw+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XG5pbXBvcnQgQ3VzdG9tZXJzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbWVyc0xpc3QnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKCgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5Lb2EyIFJlYWN0IGFwcDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjZW50ZXItdGV4dFwiPldlbGNvbWUgdG8gS29hLmpzICsgUmVhY3QuanMgYXBwITwvaDE+XG4gICAgICAgICAgICA8Q3VzdG9tZXJzTGlzdCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbikpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY3VzdG9tZXJzLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuaW1wb3J0IHsgZ3FsLCBncmFwaHFsIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNvbnN0IEN1c3RvbWVyc0xpc3QgPSAoeyBkYXRhOiB7IGFsbEN1c3RvbWVycyB9IH0pID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIGFsbEN1c3RvbWVycyk7XG4gICAgaWYgKGlzVW5kZWZpbmVkKGFsbEN1c3RvbWVycykpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHthbGxDdXN0b21lcnMubWFwKGN1c3RvbWVyID0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2N1c3RvbWVyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e2N1c3RvbWVyLmZ1bGxOYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IGFsbEN1c3RvbWVycyA9IGdxbGBcbiAgICBxdWVyeSBhbGxDdXN0b21lcnMge1xuICAgICAgICBhbGxDdXN0b21lcnMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGZ1bGxOYW1lXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG4vLyBUaGUgYGdyYXBocWxgIHdyYXBwZXIgZXhlY3V0ZXMgYSBHcmFwaFFMIHF1ZXJ5IGFuZCBtYWtlcyB0aGUgcmVzdWx0c1xuLy8gYXZhaWxhYmxlIG9uIHRoZSBgZGF0YWAgcHJvcCBvZiB0aGUgd3JhcHBlZCBjb21wb25lbnQgKFBvc3RMaXN0KVxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChhbGxDdXN0b21lcnMpKEN1c3RvbWVyc0xpc3QpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DdXN0b21lcnNMaXN0LmpzIiwiLy8gQVBQIENPTlNUQVROU1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIFZFUlNJT046ICcwLjEuMCcsXG4gICAgLy8gREVCVUc6IGZhbHNlLFxuICAgIERFQlVHOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcbiAgICBNT0NLOiBmYWxzZSxcbiAgICBBUFBfTkFNRTogJ0dNUycsXG5cbiAgICBBUElfVVJMOiAnaHR0cDovL2Rldi1hcGkueW91bmd3b3Jrcy5jby51ay8nLFxuICAgIEFQSV9VUkxfREVWOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwLycsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2NvbmZpZy5qcyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgY3JlYXRlTmV0d29ya0ludGVyZmFjZSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmNvbnN0IHtcbiAgICBERUJVRyxcbiAgICBBUElfVVJMX0RFVixcbiAgICBBUElfVVJMXG59ID0gcmVxdWlyZSgnLi9jb25maWcnKS5kZWZhdWx0O1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBERUJVRyA/IEFQSV9VUkxfREVWIDogQVBJX1VSTDtcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGw7XG5cbi8vIFBvbHlmaWxsIGZldGNoKCkgb24gdGhlIHNlcnZlciAodXNlZCBieSBhcG9sbG8tY2xpZW50KVxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBnbG9iYWwuZmV0Y2ggPSBmZXRjaDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXG4gICAgICAgIG5ldHdvcmtJbnRlcmZhY2U6IGNyZWF0ZU5ldHdvcmtJbnRlcmZhY2Uoe1xuICAgICAgICAgICAgdXJpOiBgJHtBUElfQkFTRV9VUkx9Z3JhcGhxbGAsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgICAgIC8vICAgb3B0czogeyAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgICAgIC8vICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFwb2xsbyhpbml0aWFsU3RhdGUpIHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUpO1xuICAgIH1cblxuICAgIC8vIFJldXNlIGNsaWVudCBvbiB0aGUgY2xpZW50LXNpZGVcbiAgICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgICAgICBhcG9sbG9DbGllbnQgPSBjcmVhdGUoaW5pdGlhbFN0YXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXBvbGxvQ2xpZW50O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL2luaXRBcG9sbG8uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IGluaXRBcG9sbG8gZnJvbSAnLi9pbml0QXBvbGxvJztcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9zZWRDb21wb25lbnQgPT4gY2xhc3MgV2l0aERhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9IGBXaXRoRGF0YSgke0NvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfSlgXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2VydmVyU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgICAgIGxldCBzZXJ2ZXJTdGF0ZSA9IHt9O1xuXG4gICAgICAvLyBFdmFsdWF0ZSB0aGUgY29tcG9zZWQgY29tcG9uZW50J3MgZ2V0SW5pdGlhbFByb3BzKClcbiAgICAgICAgbGV0IGNvbXBvc2VkSW5pdGlhbFByb3BzID0ge307XG4gICAgICAgIGlmIChDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgICAgIGNvbXBvc2VkSW5pdGlhbFByb3BzID0gYXdhaXQgQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgICAgIH1cblxuICAgICAgLy8gUnVuIGFsbCBncmFwaHFsIHF1ZXJpZXMgaW4gdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAvLyBhbmQgZXh0cmFjdCB0aGUgcmVzdWx0aW5nIGRhdGFcbiAgICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwb2xsbyA9IGluaXRBcG9sbG8oKTtcbiAgICAgICAgICAgIC8vIFByb3ZpZGUgdGhlIGB1cmxgIHByb3AgZGF0YSBpbiBjYXNlIGEgZ3JhcGhxbCBxdWVyeSB1c2VzIGl0XG4gICAgICAgICAgICBjb25zdCB1cmwgPSB7IHF1ZXJ5OiBjdHgucXVlcnksIHBhdGhuYW1lOiBjdHgucGF0aG5hbWUgfTtcblxuICAgICAgICAgICAgLy8gUnVuIGFsbCBncmFwaHFsIHF1ZXJpZXNcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IChcbiAgICAgICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgdXJsPXt1cmx9IHsuLi5jb21wb3NlZEluaXRpYWxQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBnZXREYXRhRnJvbVRyZWUoYXBwKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAvLyBDYXRjaCBhbnkgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBhcyB0aGV5IGNyYXNoXG4gICAgICAgICAgICAgICAvLyBTU1IuIEVycm9ycyBhcmUgaGFuZGxlZCB2aWEgZGF0YS5lcnJvciBpbiB0aGUgSlNYLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcG9sbG8gZ2V0IG9uIHNlcnZlciBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRXh0cmFjdCBxdWVyeSBkYXRhIGZyb20gdGhlIEFwb2xsbydzIHN0b3JlXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGFwb2xsby5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgICAgICAgICAgc2VydmVyU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgYXBvbGxvOiB7IC8vIE1ha2Ugc3VyZSB0byBvbmx5IGluY2x1ZGUgQXBvbGxvJ3MgZGF0YSBzdGF0ZVxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdGF0ZS5kYXRhXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXJ2ZXJTdGF0ZSxcbiAgICAgICAgICAgIC4uLmNvbXBvc2VkSW5pdGlhbFByb3BzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmFwb2xsbyA9IGluaXRBcG9sbG8odGhpcy5wcm9wcy5zZXJ2ZXJTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXt0aGlzLmFwb2xsb30+XG4gICAgICAgICAgICA8Q29tcG9zZWRDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3dpdGhEYXRhLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQWpCQTtBQUNBO0FBa0JBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7O0FBR0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQVBBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNEJBO0FBQ0E7QUFoQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFLQTtBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBSEE7OztBQVdBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFBQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFYQTtBQUNBO0FBVUE7QUFYQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBWUE7QUFDQTtBQURBO0FBWkE7QUFDQTtBQURBO0FBaUJBO0FBakJBO0FBQUE7QUFrQkE7QUFDQTtBQW5CQTtBQW9CQTtBQUNBO0FBckJBO0FBQ0E7QUFzQkE7QUFDQTtBQXhCQTtBQXdCQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQUFBO0FBOEJBO0FBQ0E7QUEvQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQXRDQTtBQUNBOztBQXlDQTtBQUFBO0FBREE7QUFBQTtBQUNBO0FBMUNBOztBQUFBO0FBZ0RBO0FBQ0E7QUFqREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXFEQTtBQXJEQTtBQUNBO0FBb0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBeERBO0FBQ0E7O0FBREE7QUEyREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBO0FBN0RBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        