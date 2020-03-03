import { MobileMenuActionTypes } from './mobile-menu.types';

const INITIAL_STATE = {
    display: false
}

const mobileMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MobileMenuActionTypes.TOGGLE_MOBILE_MENU_DISPLAY:
            return {
                ...state,
                display: action.payload
            }
        default:
            return state;
    }
}

export default mobileMenuReducer;