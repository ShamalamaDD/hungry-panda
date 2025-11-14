import * as React from 'react';
import type { Branding } from "../AppProvider/index.js";
import type { AccountProps } from "../Account/index.js";
import { type AppTitleProps } from "./AppTitle.js";
export interface DashboardHeaderSlotProps {
  appTitle?: AppTitleProps;
  toolbarActions?: {};
  toolbarAccount?: AccountProps;
}
export interface DashboardHeaderSlots {
  /**
   * The component used for the app title section.
   * @default Link
   * @see [DashboardLayout#slots](https://mui.com/toolpad/core/react-dashboard-layout/#slots)
   */
  appTitle?: React.ElementType;
  /**
   * The toolbar actions component to be used.
   * @default ToolbarActions
   * @see [DashboardLayout#slots](https://mui.com/toolpad/core/react-dashboard-layout/#slots)
   */
  toolbarActions?: React.JSXElementConstructor<{}>;
  /**
   * The toolbar account component to be used.
   * @default Account
   * @deprecated Place your custom component on the right in the `toolbarActions` slot instead.
   * @see [DashboardLayout#slots](https://mui.com/toolpad/core/react-dashboard-layout/#slots)
   */
  toolbarAccount?: React.JSXElementConstructor<AccountProps>;
}
export interface DashboardHeaderProps {
  /**
   * Branding options for the header.
   * @default null
   */
  branding?: Branding | null;
  /**
   * If `true`, show menu button as if menu is expanded, otherwise show it as if menu is collapsed.
   */
  menuOpen: boolean;
  /**
   * Callback fired when the menu button is clicked.
   */
  onToggleMenu: (open: boolean) => void;
  /**
   * Whether the menu icon should always be hidden.
   * @default false
   */
  hideMenuButton?: boolean;
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots?: DashboardHeaderSlots;
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps?: DashboardHeaderSlotProps;
}
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
declare function DashboardHeader(props: DashboardHeaderProps): React.JSX.Element;
declare namespace DashboardHeader {
  var propTypes: any;
}
export { DashboardHeader };