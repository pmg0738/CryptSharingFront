import React from 'react';
import './style.scss';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Button,
    Card,
    Container,
    Row,
    Col,
    Nav,
    Image,
  } from 'react-bootstrap';

  import Item from '../../Item';
  import eraiza from '../../../images/eraiza.png';


export default class MyPageBooked extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [
                {
                    image: eraiza,
                    price: 990000,
                },
                {
                    image: eraiza,
                    price: 10000,
                },
                {
                    image: eraiza,
                    price: 100,
                },
                
            ]
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.items.map((item) => 
                        <Col xc={6} sm={6} md={4} lg={4}>
                            <Item 
                                to='/items/1'
                                image={item.image}
                                pricePerHour={item.price}
                                status={1}
                            />
                        </Col>                    
                    )}
                </Row>
            </Container>
        )
    }
}

