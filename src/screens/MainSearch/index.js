import React from 'react';
import './style.scss';

import { Button, Card, Container, Col, Form, Row,
    ListGroup,
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Navbar from '../../components/NavbarNoLogo';
import logo from '../../images/logo.png';

export default class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showItemMenu:  false,
            showHumanMenu: false,
            showMoneyMenu: false,
            showPlaceMenu: false,
        }
    }

    handleItemMenu = () => {
        let { showItemMenu } = this.state;

        if(showItemMenu){
            this.setState({
                showItemMenu:  false,
                showHumanMenu: false,
                showMoneyMenu: false,
                showPlaceMenu: false,
            })
        }
        else{
            this.setState({
                showItemMenu:  true,
                showHumanMenu: false,
                showMoneyMenu: false,
                showPlaceMenu: false,
            })
        }
    }

    handleHumanMenu = () => {
        let { showHumanMenu } = this.state;

        if(showHumanMenu){
            this.setState({
                showItemMenu:  false,
                showHumanMenu: false,
                showMoneyMenu: false,
                showPlaceMenu: false,
            })
        }
        else{
            this.setState({
                showItemMenu:  false,
                showHumanMenu: true,
                showMoneyMenu: false,
                showPlaceMenu: false,
            })
        }
    }

    handleMoneyMenu = () => {
        let { showMoneyMenu } = this.state;

        if(showMoneyMenu){
            this.setState({
                showItemMenu:  false,
                showHumanMenu: false,
                showMoneyMenu: false,
                showPlaceMenu: false,
            })
        }
        else{
            this.setState({
                showItemMenu:  false,
                showHumanMenu: false,
                showMoneyMenu: true,
                showPlaceMenu: false,
            })
        }
    }

    handlePlaceMenu = () => {
        let { showPlaceMenu } = this.state;

        if(showPlaceMenu){
            this.setState({
                showItemMenu:  false,
                showHumanMenu: false,
                showMoneyMenu: false,
                showPlaceMenu: false,
            })
        }
        else{
            this.setState({
                showItemMenu:  false,
                showHumanMenu: false,
                showMoneyMenu: false,
                showPlaceMenu: true,
            })
        }
    }


    
    renderItemMenu = (show) => {
        if(show){
            console.log('return')
            return(
                <Card className="main-search-item-menu-card">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="main-search-item-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/search' className="main-search-item-menu-link">Search</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-item-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/items' className="main-search-item-menu-link">Items</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-item-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/chats' className="main-search-item-menu-link">Chat</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card> 
            );
        }        
    }

    
    renderHumanMenu = (show) => {
        if(show){
            return(
                <Card className="main-search-human-menu-card">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="main-search-human-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/search' className="main-search-human-menu-link">Search</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-human-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/items' className="main-search-human-menu-link">Items</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-human-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/chats' className="main-search-human-menu-link">Chat</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            )
        }
    }

    renderMoneyMenu = (show) => {
        if(show){
            return(
                <Card className="main-search-money-menu-card">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="main-search-money-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/search' className="main-search-money-menu-link">Search</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-money-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/items' className="main-search-money-menu-link">Items</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-money-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/chats' className="main-search-money-menu-link">Chat</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            )
        }
    }

    renderPlaceMenu = (show) => {
        if(show){
            return(
                <Card className="main-search-place-menu-card">
                    <ListGroup variant="flush">
                        <ListGroup.Item className="main-search-place-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/search' className="main-search-place-menu-link">Search</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-place-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/items' className="main-search-place-menu-link">Items</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className="main-search-place-menu-list-group" onClick={this.closeMenu}>
                            <Link to='/chats' className="main-search-place-menu-link">Chat</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </Card> 
            )
        }
    }


    render() {
        return (
            // <div>
                <Container className="main-search-container">
                    <Card className="main-search-card">
                        <img src={logo} className="main-search-logo-image"/>
                        <Form>
                            <Row className="main-search-form-row">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className="main-search-search-form" type="text" placeholder="Search" />
                                </Form.Group>
                            </Row>
                        </Form>
                            <Link to='/filter'>
                                <p className="main-search-category-search-button">絞り込みで探す</p>
                            </Link>
                                <Row className="main-search-category-button-row">
                                    <Col>
                                        <Button className="main-search-category-button-red"
                                            onClick={this.handleItemMenu}
                                        >+</Button>
                                        {/* {this.renderItemMenu(true)} */}
                                        {this.renderItemMenu(this.state.showItemMenu)}
                                    </Col>
                                    <Col>
                                        <Button className="main-search-category-button-blue"
                                            onClick={this.handleHumanMenu}
                                        >+</Button>
                                        {/* {this.renderHumanMenu(true)} */}
                                        {this.renderHumanMenu(this.state.showHumanMenu)}
                                    </Col>
                                    <Col>
                                        <Button className="main-search-category-button-yellow"
                                            onClick={this.handleMoneyMenu}
                                        >+</Button>
                                        {/* {this.renderMoneyMenu(true)} */}
                                        {this.renderMoneyMenu(this.state.showMoneyMenu)}
                                    </Col>
                                    <Col>
                                        <Button className="main-search-category-button-green"
                                            onClick={this.handlePlaceMenu}
                                        >+</Button>
                                        {/* {this.renderPlaceMenu(true)} */}
                                        {this.renderPlaceMenu(this.state.showPlaceMenu)}
                                    </Col>
                                </Row>
                    </Card>
                </Container>
        );
    }
}