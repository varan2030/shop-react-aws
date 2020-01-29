import React from "react";

import './nav-item.styles.scss';
import { MenuItem } from "@material-ui/core";

function NavItem({className, onClick, children, title, ...props}) {
    return (
        <MenuItem className={`${className} menu-item`} onClick={onClick}>
            {children}
            {title}
        </MenuItem>
    )
}

export default NavItem;