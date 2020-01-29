import React from "react";

import './sign-out-menu.styles.scss';
import { withRouter } from "react-router-dom";
import { Row } from "react-bootstrap";
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavItem from "../nav-item/nav-item.component";
import { Auth } from "aws-amplify";
import { setCurrentUser } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";

function SignOutMenu (props) {
	const dispatch = useDispatch();

    async function handleClickSignOutPage() {
		await Auth.signOut();
		dispatch(setCurrentUser(null));
		props.history.push("/");
    }
    
    const handleClickCartPage = () => {
        props.history.push("/cart")
    }

    const handleClickAccountPage = () => {
        props.history.push("/account")
    }

    return (
        <Row>
            <NavItem
                className="auth-nav-item"
                title="Cart"
                onClick={handleClickCartPage}
            >
                <AddShoppingCartIcon></AddShoppingCartIcon>	
            </NavItem>
            <NavItem
                className="auth-nav-item"
                title="Account"
                onClick={handleClickAccountPage}
            >
                <AccountCircleIcon></AccountCircleIcon>	
            </NavItem>
            <NavItem
                className="auth-nav-item"
                onClick={handleClickSignOutPage}
                title="Sign out"
            >
                <NoMeetingRoomIcon></NoMeetingRoomIcon>
            </NavItem>	
        </Row>
    )
}

export default withRouter(SignOutMenu);