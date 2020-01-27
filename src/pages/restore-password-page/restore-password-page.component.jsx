import React from "react";

import './restore-password-page.styles.scss'
import RestorePassword from "../../components/restore-password/restore-password.component";
import { Col, Row, Container } from "react-bootstrap";

function RestorePasswordPage() {
    return (
        <Container>
        <Row className="justify-content-md-center">
            <Col className="login" lg="6">
                <RestorePassword />
            </Col>
        </Row>
    </Container>
    )
}

export default RestorePasswordPage;