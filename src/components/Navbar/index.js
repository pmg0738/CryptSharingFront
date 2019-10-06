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

  import logo from '../../images/logo.png';



export default class Navbar extends React.Component {
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
                </ListGroup>
            </Card>            
            // <div className="navbar-menu-items">
            //     <Link to='/search'>
            //         <p className="navbar-menu-item">Search</p>
            //     </Link>
            //     <Link to='/items'>
            //         <p className="navbar-menu-item">Items</p>
            //     </Link>
            //     <Link to='/chat'>
            //         <p className="navbar-menu-item">Chat</p>
            //     </Link>
            // </div>
        )
    }



    render() {
        return (
            <div>
                <Nav className="navbar-container">
                    <Link to='/search'>
                        <img className="navbar-logo-image" src={logo}/>
                    </Link>
                        <Button className="navbar-hamburger-menu-button" onClick={this.handleMenu}>
                            <FontAwesomeIcon icon={faBars}/>
                        </Button>
                </Nav>
                {this.state.menu}
                <div className="navbar-container-dummy"/>
            </div>
        )
    }
}

