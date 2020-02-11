import React from 'react';
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import DropdownMobileMenu from "../dropdown-mobile-menu/dropdown-mobile-menu.component"

import './directory-navigation-menu.styles.scss';
import { Row } from 'react-bootstrap';

function DirectoryNavigationMenu (props) {

    const handleClickToHomePage = () => {
		props.history.push("/");
	};

 return (
     <Row className="directory-navigation">
        <DropdownMobileMenu />
        <Typography
            onClick={handleClickToHomePage}
            className="nav-item"
            variant="h6"
        >
            Split
        </Typography>
    </Row>
 )
}

export default withRouter(DirectoryNavigationMenu);