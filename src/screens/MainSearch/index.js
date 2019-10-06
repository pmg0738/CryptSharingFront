import React from 'react';
import './style.scss';

import { Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbar from '../../components/NavbarNoLogo';
import logo from '../../images/logo.png';

export default class MainSearch extends React.Component {
    render() {
        return (
            <div>
                {/* <Navbar/> */}
                <Container className="main-search-container">
                    <img src={logo} className="main-search-logo"/>
                    <Form>
                        <Row className="main-search-form-row">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control className="main-search-search-form" type="text" placeholder="Search" />
                            </Form.Group>
                        </Row>
                        <Link to='/items'>
                            <p className="main-search-category-search-button">カテゴリから探す</p>
                        </Link>
                    </Form>
                </Container>
            </div>
        );
    }
}