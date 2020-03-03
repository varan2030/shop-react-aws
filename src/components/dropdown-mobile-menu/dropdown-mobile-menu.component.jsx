import React from "react";
import { withRouter } from "react-router-dom";
import './dropdown-mobile-menu.styles.scss';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";

import Popover from '@material-ui/core/Popover';
import MobileMenuItemDirectory from '../mobile-menu-item-directory/mobile-menu-item-directory.component';
import { useDispatch, useSelector } from "react-redux";
import { setMobileMenuAction } from "../../redux/mobile-menu/mobilde-menu.action";

import ITEM_DATA from "../../assets/shop-data/item-data";

function DropdownMobileMenu (props) {
    const data = ITEM_DATA;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const open = useSelector((state) => state.mobileMenuDisplay.display);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    dispatch(setMobileMenuAction(true));
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(setMobileMenuAction(false));
  };

  const id = open ? 'simple-popover' : undefined;
  

    return (
      <div>
        <IconButton
          className="nav-item"
          aria-label="menu"
          aria-describedby={id} variant="contained" onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 75, left: 0 }}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
      >
       <MobileMenuItemDirectory itemsData={data}{...props} />
      </Popover>
      </div>
    )
}

export default withRouter(DropdownMobileMenu);