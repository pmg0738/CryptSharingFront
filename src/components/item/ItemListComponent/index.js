import React from 'react';
import axios from 'axios';

import _ from 'lodash'

import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Col,
    Row,    
 } from 'react-bootstrap';

import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../../../components/common/Pagination';
import Item from '../ItemCard';



export default class ItemListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }        
    }   
    componentWillMount(){
		axios.get('https://challecara-pok-2019.lolipop.io/api/v1/items/')
			.then(res => {
                console.log('res', res.data);
                let allItems = res.data;
                this.setState({items: allItems});
                console.log('image', res.data[0].images[0].url);
            })
    }

    renderRentaringMessage = (isRented) => {
        if(isRented){
            return(
            <p className="item-list-item-card-status-unavailable">貸出中</p>
            )
        }
    }

    handlePagination = (page) => {
        // this.props.getItems(page);
    }

    renderItems = () => {
       this.state.items.map(item => (
            <Col sm={12} md={6} lg={4}>
                <Item
                    to={'/items/' + item.item_id}
                    image={item.images}
                    price={item.fee_per_hour}
                />
            </Col>
        ));
        console.log('aaaaaaaaaa');
    }

    render() {
        return (
            <Container className="item-list-container">
                <Row>
                {this.state.items.map(item => (
                    <Col sm={12} md={6} lg={4}>
                        <Item
                            to={'/items/' + item.item_id}
                            image={item.images.url}
                            price={item.fee_per_hour}
                        />
                    </Col>
                ))}
                 <Link to='/items/new/post'>
                    <Button className="item-list-add-button">
                        <p className="item-list-add-button-label">出品する</p>
                        <FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
                    </Button>
                </Link>
                </Row>
                <Pagination numOfPage={2} handlePagination={this.handlePagination}/>
                {/* <Pagination numOfPage={this.state.numOfItems} /> */}
            </Container>
        );
    }
}


