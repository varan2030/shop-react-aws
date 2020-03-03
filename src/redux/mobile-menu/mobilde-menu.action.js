import { MobileMenuActionTypes } from './mobile-menu.types';

export const setMobileMenuAction = mobileMenuDisplay => ({
    type: MobileMenuActionTypes.TOGGLE_MOBILE_MENU_DISPLAY,
    payload: mobileMenuDisplay
});
