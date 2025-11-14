'use client';

import * as React from 'react';
import { useLocation, useNavigate, Link as TanStackRouterLink } from '@tanstack/react-router';
import { mapProperties } from '@toolpad/utils/collections';
import { AppProvider } from "../AppProvider/AppProvider.js";
import { jsx as _jsx } from "react/jsx-runtime";
const Link = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    href,
    history,
    ...rest
  } = props;
  return /*#__PURE__*/_jsx(TanStackRouterLink, {
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
  } = useLocation();

  // TansStack Router's search automatically parses stringified values, which is incompatible with our standard implementation.
  const searchParams = React.useMemo(() => new URLSearchParams(mapProperties(search, ([key, value]) => [key, JSON.stringify(value)])), [search]);
  const navigate = useNavigate();
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
  return /*#__PURE__*/_jsx(AppProvider, {
    router: routerImpl,
    ...props
  });
}
export { TanStackRouterAppProvider };