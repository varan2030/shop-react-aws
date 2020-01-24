import React from 'react';
import Login from '../../components/login/login.component';
import { Col, Container, Row } from 'react-bootstrap';

import './login-page.styles.scss';


function LoginPage(props) {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                <Col className="login" lg="6">
                    <Login props={props}/>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage;