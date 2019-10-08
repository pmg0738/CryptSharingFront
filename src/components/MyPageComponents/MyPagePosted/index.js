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
  



export default class MyPagePosted extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Card className="item-list-item-card">
                    <div className="item-list-item-card-image-container">
                        <Image src={item.image} className="item-list-item-card-image"/>
                        {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][item.status]}
                    </div>
                    <p className={"item-list-item-card-title-" + item.color}>{item.title}</p>
                    {this.renderRentaringMessage(!item.status)}
                </Card>
            </div>
        )
    }
}

