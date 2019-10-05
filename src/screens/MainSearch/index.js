import React from 'react';
import './style.scss';

import { Button, Container, Form, Row } from 'react-bootstrap';

import Navbar from '../../components/NavbarNoLogo';
import logo from '../../images/logo.png';

export default class MainSearch extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Container className="main-search-container">
                    <img src={logo} className="main-search-logo"/>
                    <Form>
                        <Row className="main-search-form-row">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control className="main-search-search-form" type="text" placeholder="Search" />
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}