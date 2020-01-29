import React from "react";

import './sign-in-up-menu.styles.scss';
import { withRouter } from "react-router-dom";
import { Row } from "react-bootstrap";
import NavItem from "../nav-item/nav-item.component";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


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
                    <AddShoppingCartIcon></AddShoppingCartIcon>	
                </NavItem>
                <NavItem
                    className="auth-nav-item"
                    onClick={handleClickToLoginPage}
                    title="Login"
                >
                    <AccountCircleIcon></AccountCircleIcon>
                </NavItem>
                <NavItem
                    className="auth-nav-item"
                    onClick={handleClickToSignUpPage}
                    title="Sign Up"
                >
                    <MeetingRoomIcon></MeetingRoomIcon>
                </NavItem>
            </Row>
        </div>
    )
}

export default withRouter(SignInUpMenu);