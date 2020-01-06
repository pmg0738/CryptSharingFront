import React from 'react';
import './style.scss';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Button,
    Card,
    ListGroup,
    Nav,
  } from 'react-bootstrap';




export default class NavbarForSearch extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showMenu: false,
            menu: <div/>
        }
    }
    
    handleMenu = () => {
        if(this.state.showMenu){
            this.setState({
                menu: <div/>,
                showMenu: false,
            })
        }
        else {
            this.setState({
                menu: this.renderMenu(),
                showMenu: true
            })
        }
    }

    renderMenu = () => {
        return (
            
                <Card className="navbar-hamburger-menu-button-items">
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Link to='/search' className="navbar-hamburger-menu-button-item">Search</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/items' className="navbar-hamburger-menu-button-item">Items</Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Link to='/chat' className="navbar-hamburger-menu-button-item">Chat</Link>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                            <Link to='/what_i_posted' className="navbar-hamburger-menu-button-item">What I Post</Link>
                        </ListGroup.Item> */}
                        <ListGroup.Item>
                            <Link to='/mypage' className="navbar-hamburger-menu-button-item">MyPage</Link>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>
                            <Link to='/history' className="navbar-hamburger-menu-button-item">History</Link>
                        </ListGroup.Item> */}
                    </ListGroup>
                </Card>
            
        )
    }


    render() {
        return (
            <Nav className="navbar-container">
                    <Button className="navbar-hamburger-menu-button" onClick={this.handleMenu}>
                        <FontAwesomeIcon icon={faBars}/>
                    </Button>
                {this.state.menu}
                {/* {this.renderMenu()} */}
            </Nav>
        )
    }
}

