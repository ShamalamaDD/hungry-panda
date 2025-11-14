"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TanStackRouterAppProvider = TanStackRouterAppProvider;
var React = _interopRequireWildcard(require("react"));
var _reactRouter = require("@tanstack/react-router");
var _collections = require("@toolpad/utils/collections");
var _AppProvider = require("../AppProvider/AppProvider");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const Link = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    href,
    history,
    ...rest
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouter.Link, {
    ref: ref,
    to: href,
    replace: history === 'replace',
    ...rest
  });
});
function TanStackRouterAppProvider(props) {
  const {
    pathname,
    search
  } = (0, _reactRouter.useLocation)();

  // TansStack Router's search automatically parses stringified values, which is incompatible with our standard implementation.
  const searchParams = React.useMemo(() => new URLSearchParams((0, _collections.mapProperties)(search, ([key, value]) => [key, JSON.stringify(value)])), [search]);
  const navigate = (0, _reactRouter.useNavigate)();
  const navigateImpl = React.useCallback((url, {
    history = 'auto'
  } = {}) => {
    if (history === 'auto' || history === 'push') {
      return navigate({
        to: url
      });
    }
    if (history === 'replace') {
      return navigate({
        to: url,
        replace: true
      });
    }
    throw new Error(`Invalid history option: ${history}`);
  }, [navigate]);
  const routerImpl = React.useMemo(() => ({
    pathname,
    searchParams,
    navigate: navigateImpl,
    Link
  }), [navigateImpl, pathname, searchParams]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppProvider.AppProvider, {
    router: routerImpl,
    ...props
  });
}