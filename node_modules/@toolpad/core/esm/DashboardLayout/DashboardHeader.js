var _MenuOpenIcon, _MenuIcon;
import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Stack from '@mui/material/Stack';
import { BrandingContext } from "../shared/context.js";
import { AppTitle } from "./AppTitle.js";
import { ToolbarActions } from "./ToolbarActions.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AppBar = styled(MuiAppBar)(({
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
  const brandingContext = React.useContext(BrandingContext);
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
    return /*#__PURE__*/_jsx(Tooltip, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1000,
      children: /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx(IconButton, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: handleMenuOpen,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = /*#__PURE__*/_jsx(MenuOpenIcon, {})) : _MenuIcon || (_MenuIcon = /*#__PURE__*/_jsx(MenuIcon, {}))
        })
      })
    });
  }, [handleMenuOpen]);
  const ToolbarActionsSlot = slots?.toolbarActions ?? ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? (() => null);
  return /*#__PURE__*/_jsx(AppBar, {
    color: "inherit",
    position: "absolute",
    sx: {
      displayPrint: 'none'
    },
    children: /*#__PURE__*/_jsx(Toolbar, {
      sx: {
        backgroundColor: 'inherit',
        mx: {
          xs: -0.75,
          sm: -1
        }
      },
      children: /*#__PURE__*/_jsxs(Stack, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        sx: {
          flexWrap: 'wrap',
          width: '100%'
        },
        children: [/*#__PURE__*/_jsxs(Stack, {
          direction: "row",
          children: [!hideMenuButton ? /*#__PURE__*/_jsxs(React.Fragment, {
            children: [/*#__PURE__*/_jsx(Box, {
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
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                display: {
                  xs: 'none',
                  md: 'block'
                },
                mr: 1
              },
              children: getMenuIcon(menuOpen)
            })]
          }) : null, slots?.appTitle ? /*#__PURE__*/_jsx(slots.appTitle, {
            ...slotProps?.appTitle
          }) :
          /*#__PURE__*/
          /* Hierarchy of application of `branding`
           * 1. Branding prop passed in the `slotProps.appTitle`
           * 2. Branding prop passed to the `DashboardLayout`
           * 3. Branding prop passed to the `AppProvider`
           */
          _jsx(AppTitle, {
            branding: branding,
            ...slotProps?.appTitle
          })]
        }), /*#__PURE__*/_jsxs(Stack, {
          direction: "row",
          alignItems: "center",
          spacing: 1,
          sx: {
            marginLeft: 'auto'
          },
          children: [/*#__PURE__*/_jsx(ToolbarActionsSlot, {
            ...slotProps?.toolbarActions
          }), /*#__PURE__*/_jsx(ToolbarAccountSlot, {
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
  branding: PropTypes.shape({
    homeUrl: PropTypes.string,
    logo: PropTypes.node,
    title: PropTypes.string
  }),
  /**
   * Whether the menu icon should always be hidden.
   * @default false
   */
  hideMenuButton: PropTypes.bool,
  /**
   * If `true`, show menu button as if menu is expanded, otherwise show it as if menu is collapsed.
   */
  menuOpen: PropTypes.bool.isRequired,
  /**
   * Callback fired when the menu button is clicked.
   */
  onToggleMenu: PropTypes.func.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: PropTypes.shape({
    appTitle: PropTypes.shape({
      branding: PropTypes.shape({
        homeUrl: PropTypes.string,
        logo: PropTypes.node,
        title: PropTypes.string
      })
    }),
    toolbarAccount: PropTypes.shape({
      localeText: PropTypes.object,
      slotProps: PropTypes.shape({
        popover: PropTypes.object,
        popoverContent: PropTypes.object,
        preview: PropTypes.object,
        signInButton: PropTypes.object,
        signOutButton: PropTypes.object
      }),
      slots: PropTypes.shape({
        popover: PropTypes.elementType,
        popoverContent: PropTypes.elementType,
        preview: PropTypes.elementType,
        signInButton: PropTypes.elementType,
        signOutButton: PropTypes.elementType
      })
    }),
    toolbarActions: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: PropTypes.shape({
    appTitle: PropTypes.elementType,
    toolbarAccount: PropTypes.elementType,
    toolbarActions: PropTypes.elementType
  })
} : void 0;
export { DashboardHeader };