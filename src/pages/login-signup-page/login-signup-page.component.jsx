import React from 'react';
import Login from '../../components/login/login.component';
import { Col } from 'react-bootstrap';

import './login-signup-page.styles.scss';


function LoginSignUpPage(props) {
    return (
        <div>
            <Col xs={6}  className="login-signup">
                <Login />
            </Col> 
        </div>
    )
}

export default LoginSignUpPage;