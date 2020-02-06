import React from "react";

import './nav-item.styles.scss';
import { MenuItem, Hidden } from "@material-ui/core";

function NavItem({className, onClick, children, title, ...props}) {
    return (
        <MenuItem className={`${className} menu-item`} onClick={onClick} {...props}>
            {children}
            <Hidden only='xs'>{title}</Hidden>
        </MenuItem>
    )
}

export default NavItem;