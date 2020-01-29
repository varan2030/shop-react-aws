import React from "react";

import './sign-in-up-menu.styles.scss';
import { withRouter } from "react-router-dom";
import { Row } from "react-bootstrap";
import NavItem from "../nav-item/nav-item.component";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function SignInUpMenu (props) {

    const handleClickToLoginPage = () => {
		props.history.push("/login");
	};

	const handleClickToSignUpPage = () => {
		props.history.push("/signup");
	};

    const handleClickCartPage = () => {
        console.log('Cart')
        props.history.push("/cart")
    }

    return (
        <div className="sign-in-up-menu">
            <Row>
                <NavItem
                    className="auth-nav-item"
                    onClick={handleClickCartPage}
                    title="Cart"
                >
                    <ShoppingCartIcon></ShoppingCartIcon>	
                </NavItem>
                <NavItem
                    className="auth-nav-item"
                    onClick={handleClickToLoginPage}
                    title="Login"
                >
                    <ExitToAppIcon></ExitToAppIcon>

                </NavItem>
                <NavItem
                    className="auth-nav-item"
                    onClick={handleClickToSignUpPage}
                    title="Sign Up"
                >
                    <PersonAddIcon></PersonAddIcon>

                </NavItem>
            </Row>
        </div>
    )
}

export default withRouter(SignInUpMenu);