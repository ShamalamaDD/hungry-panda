"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardHeader = DashboardHeader;
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _AppBar = _interopRequireDefault(require("@mui/material/AppBar"));
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Toolbar = _interopRequireDefault(require("@mui/material/Toolbar"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Menu = _interopRequireDefault(require("@mui/icons-material/Menu"));
var _MenuOpen = _interopRequireDefault(require("@mui/icons-material/MenuOpen"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _context = require("../shared/context");
var _AppTitle = require("./AppTitle");
var _ToolbarActions = require("./ToolbarActions");
var _jsxRuntime = require("react/jsx-runtime");
var _MenuOpenIcon, _MenuIcon;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const AppBar = (0, _styles.styled)(_AppBar.default)(({
  theme
}) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: 'none',
  zIndex: theme.zIndex.drawer + 1
}));
/**
 *
 * Demos:
 *
 * - [Dashboard Layout](https://mui.com/toolpad/core/react-dashboard-layout/)
 *
 * API:
 *
 * - [DashboardHeader API](https://mui.com/toolpad/core/api/dashboard-header)
 */
function DashboardHeader(props) {
  const {
    branding: brandingProp,
    menuOpen,
    onToggleMenu,
    hideMenuButton,
    slots,
    slotProps
  } = props;
  const brandingContext = React.useContext(_context.BrandingContext);
  const branding = {
    ...brandingContext,
    ...brandingProp
  };
  const handleMenuOpen = React.useCallback(() => {
    onToggleMenu(!menuOpen);
  }, [menuOpen, onToggleMenu]);
  const getMenuIcon = React.useCallback(isExpanded => {
    const expandMenuActionText = 'Expand';
    const collapseMenuActionText = 'Collapse';
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tooltip.default, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1000,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.default, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: handleMenuOpen,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_MenuOpen.default, {})) : _MenuIcon || (_MenuIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Menu.default, {}))
        })
      })
    });
  }, [handleMenuOpen]);
  const ToolbarActionsSlot = slots?.toolbarActions ?? _ToolbarActions.ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? (() => null);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(AppBar, {
    color: "inherit",
    position: "absolute",
    sx: {
      displayPrint: 'none'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Toolbar.default, {
      sx: {
        backgroundColor: 'inherit',
        mx: {
          xs: -0.75,
          sm: -1
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        sx: {
          flexWrap: 'wrap',
          width: '100%'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
          direction: "row",
          children: [!hideMenuButton ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                display: {
                  xs: 'block',
                  md: 'none'
                },
                mr: {
                  sm: 1
                }
              },
              children: getMenuIcon(menuOpen)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                display: {
                  xs: 'none',
                  md: 'block'
                },
                mr: 1
              },
              children: getMenuIcon(menuOpen)
            })]
          }) : null, slots?.appTitle ? /*#__PURE__*/(0, _jsxRuntime.jsx)(slots.appTitle, {
            ...slotProps?.appTitle
          }) :
          /*#__PURE__*/
          /* Hierarchy of application of `branding`
           * 1. Branding prop passed in the `slotProps.appTitle`
           * 2. Branding prop passed to the `DashboardLayout`
           * 3. Branding prop passed to the `AppProvider`
           */
          (0, _jsxRuntime.jsx)(_AppTitle.AppTitle, {
            branding: branding,
            ...slotProps?.appTitle
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Stack.default, {
          direction: "row",
          alignItems: "center",
          spacing: 1,
          sx: {
            marginLeft: 'auto'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ToolbarActionsSlot, {
            ...slotProps?.toolbarActions
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ToolbarAccountSlot, {
            ...slotProps?.toolbarAccount
          })]
        })]
      })
    })
  });
}
process.env.NODE_ENV !== "production" ? DashboardHeader.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Branding options for the header.
   * @default null
   */
  branding: _propTypes.default.shape({
    homeUrl: _propTypes.default.string,
    logo: _propTypes.default.node,
    title: _propTypes.default.string
  }),
  /**
   * Whether the menu icon should always be hidden.
   * @default false
   */
  hideMenuButton: _propTypes.default.bool,
  /**
   * If `true`, show menu button as if menu is expanded, otherwise show it as if menu is collapsed.
   */
  menuOpen: _propTypes.default.bool.isRequired,
  /**
   * Callback fired when the menu button is clicked.
   */
  onToggleMenu: _propTypes.default.func.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    appTitle: _propTypes.default.shape({
      branding: _propTypes.default.shape({
        homeUrl: _propTypes.default.string,
        logo: _propTypes.default.node,
        title: _propTypes.default.string
      })
    }),
    toolbarAccount: _propTypes.default.shape({
      localeText: _propTypes.default.object,
      slotProps: _propTypes.default.shape({
        popover: _propTypes.default.object,
        popoverContent: _propTypes.default.object,
        preview: _propTypes.default.object,
        signInButton: _propTypes.default.object,
        signOutButton: _propTypes.default.object
      }),
      slots: _propTypes.default.shape({
        popover: _propTypes.default.elementType,
        popoverContent: _propTypes.default.elementType,
        preview: _propTypes.default.elementType,
        signInButton: _propTypes.default.elementType,
        signOutButton: _propTypes.default.elementType
      })
    }),
    toolbarActions: _propTypes.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: _propTypes.default.shape({
    appTitle: _propTypes.default.elementType,
    toolbarAccount: _propTypes.default.elementType,
    toolbarActions: _propTypes.default.elementType
  })
} : void 0;