import * as React from 'react';
import { NavigationContext } from "../shared/context.js";

/**
 * Hook to access the current Toolpad Core navigation.
 * @returns The current navigation.
 */
export function useNavigation() {
  return React.useContext(NavigationContext);
}