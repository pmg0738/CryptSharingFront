import React from 'react';
import Faker from 'faker';

import _ from 'lodash'

import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Col,
    Row,    
 } from 'react-bootstrap';



import './style.scss';
import { API_ROOT } from '../../../config.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../../../components/common/Pagination';
import Item from '../ItemCard';

import eraiza from '../../../images/eraiza.png';



export default class ItemListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }        
    }   

    renderRentaringMessage = (isRented) => {
        if(isRented){
            return(
            <p className="item-list-item-card-status-unavailable">貸出中</p>
            )
        }
    }

    renderItems = () => {
        return (
            _.map(this.props.items, item => (
                <Col xc={6} sm={6} md={4} lg={4} key={item.item_uid}>
                    <Item 
                        to={`/items/${item.item_uid}`}
                        image={item.image}
                        pricePerHour={10}
                        status={1}
                    />
                </Col>
            ))
        );
    }

    handlePagination = (page) => {
        // this.props.getItems(page);
    }

    renderItems = () => {
        console.log("1111", this.props);
        console.log("2222", this.props.items);
        console.log("3333", typeof(this.props.items));

        const array = _.map(this.props.items.item, item => (
            <Col sm={12} md={6} lg={4}>
                <Item
                    data={item}
                    to={'/items/' + item.item_id}
                    status={1}
                />
            </Col>
        ));

        console.log("array", array);
        return array;
    }

    render() {
        return (
            <Container className="item-list-container">
                <Row>
                {/* {this.state.items.map((item) => 
                    <Col sm={12} md={6} lg={4}>
                        <Item
                            data={item}
                            to={'/items/' + item.item_id}
                            status={1}
                        />
                    </Col>                    
                )} */}
                {this.renderItems()}
                 <Link to='/items/new/post'>
                    <Button className="item-list-add-button">
                        <p className="item-list-add-button-label">出品する</p>
                        <FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
                    </Button>
                </Link>
                {/* {this.renderItems()} */}
                </Row>
               
                <Pagination numOfPage={2} handlePagination={this.handlePagination}/>
                {/* <Pagination numOfPage={this.state.numOfItems} /> */}
            </Container>
        );
    }
}


