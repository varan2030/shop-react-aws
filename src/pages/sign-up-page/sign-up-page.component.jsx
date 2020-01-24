import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Signup from '../../components/singup/signup.component';

import './sign-up-page.styles.scss';


function SignUpPage(props) {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                <Col className="signUp" lg="6">
                    <Signup />
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUpPage;