import React, { useState } from "react";
import {IconButton} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import './dropdown-mobile-menu.styles.scss';

import SHOP_DATA from "../../assets/shop-data/shop-data";

function DropdownMobileMenu (props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const dataShop = SHOP_DATA;
    const directoryList = Object.keys(dataShop);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div>
     <IconButton
        onClick={handleClick}
        className="nav-item"
        aria-label="menu"
    >
        <FormatListBulletedIcon />
    </IconButton>
    </div>
    )
}

export default withRouter(DropdownMobileMenu);