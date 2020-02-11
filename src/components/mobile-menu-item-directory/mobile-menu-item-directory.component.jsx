import React from "react";
import { withRouter } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './mobile-menu-item-directory.styles.scss';

function MobileMenuItemDirectory ({directoryName, dataShop, ...props}) {
    return (
        <div>
        <div>
            <MenuItem id="mobile-menu">
          <h6>{directoryName}</h6>
          </MenuItem> 
            { dataShop.items.map(item =>
                <MenuItem
                    key={item.id}
                >
                <ListItemIcon>
                    <NavigateNextIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary={item.name} />
            </MenuItem>
            )}
            </div>
        </div>
       
    )
}

export default withRouter(MobileMenuItemDirectory);