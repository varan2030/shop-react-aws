import { createSelector } from 'reselect';

const selectMobileMenuDisplay = state => state.mobileMenuDisplay;

export const selectMobileMenu = createSelector(
    [selectMobileMenuDisplay],
    mobileMenuDisplay => mobileMenuDisplay.display
);