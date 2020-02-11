import React, { useState } from "react";
import {IconButton} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import './dropdown-mobile-menu.styles.scss';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SHOP_DATA from "../../assets/shop-data/shop-data";
import MobileMenuItemDirectory from '../mobile-menu-item-directory/mobile-menu-item-directory.component';

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
    <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          {directoryList.map(directory =>
                <MobileMenuItemDirectory 
                    key={directory}
                    directoryName={dataShop[directory].title}
                    dataShop={dataShop[directory]}
                    {...props} 
                    / >
                )
          }    
      </Menu>
    </div>
    )
}

export default withRouter(DropdownMobileMenu);