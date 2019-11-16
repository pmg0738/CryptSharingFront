import React from 'react';
import './style.scss';
import {
    Container,
    Row,
    Col,
  } from 'react-bootstrap';

import Item from '../../../item/ItemCard';
import eraiza from '../../../../images/eraiza.png';
import { items } from '../../../../datas/items.js'


export default class MyPageFavorite extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
        }
    }

    componentWillMount() {
        this.getFavoriteItems();
    }

    getFavoriteItems = () => {
        // Axios.get('/items')
        const items = {
            "2": {
                id: "2",
                price: 10,
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
