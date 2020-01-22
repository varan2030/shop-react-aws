import React from 'react';
import Login from '../../components/login/login.component';
import { Col, Container, Row } from 'react-bootstrap';

import './login-signup-page.styles.scss';
import Signup from '../../components/singup/signup.component';


function LoginSignUpPage(props) {
    return (
        <div>
            <Container>
                <Row>
                <Col className="login-signup">
                    <Login />
                </Col> 
                <Col  className="login-signup">
                    <Signup />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginSignUpPage;