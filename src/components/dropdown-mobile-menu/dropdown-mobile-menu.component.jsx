import React from "react";
import {IconButton} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import './dropdown-mobile-menu.styles.scss';

// import SHOP_DATA from "../../assets/shop-data/shop-data";

function DropdownMobileMenu (props) {
    
    return (
        <div>
     <IconButton

        className="nav-item"
        aria-label="menu"
    >
        <FormatListBulletedIcon />
    </IconButton>
    </div>
    )
}

export default withRouter(DropdownMobileMenu);