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
  import { items } from '../../../datas/items.js'


export default class MyPageBooked extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
        }
    }

    componentWillMount() {
        this.getBookedItems();
    }

    getBookedItems = () => {
        // Axios.get('/itesm')
        const items = {
            "4": {
                id: "4",
                price: 10,
                image: eraiza,
            }, 
            "5": {
                id: "5",
                price: 20,
                image: eraiza,
            }
        }

        this.setState({items: items})
    }

    render() {
        const { items } = this.state;
        // const items = this.state.items;

        return (
            <Container>
                <Row>
                    {Object.keys(items).map((id) => 
        
                        <Col xc={6} sm={6} md={4} lg={4}>
                            <Item 
                                to={'/items/' + id}
                                image={items[id].image}
                                pricePerHour={items[id].price}
                                status={1}
                            />
                        </Col>                    
                    )}
                </Row>
            </Container>
        )
    }
}

