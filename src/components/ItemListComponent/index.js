import React from 'react';
import Faker from 'faker';
import axios from 'axios';

import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Col,
    Row,    
 } from 'react-bootstrap';



import './style.scss';
import { API_ROOT } from '../../config.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../../components/Pagination';
import Item from '../../components/Item';

import eraiza from '../../images/eraiza.png';



export default class ItemListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                // {
                //     item_id: 1,
                //     image: eraiza,
                //     price: 990000,
                // },
                // {
                //     item_id: 2,
                //     image: eraiza,
                //     price: 10000,
                // },
                // {
                //     item_id: 3,
                //     image: eraiza,
                //     price: 100,
                // },                
            ]
        }
        
        // for(let i= 0; i<30; i++){
        //     this.state.items.push(
        //         {
        //             image: Faker.internet.avatar(),
        //             price: Faker.random.number(),
        //         }
        //     )
        // }
    }

    componentWillMount() {
        this.getItems();
    }

    getItems = () => {
        console.log("GET");
        axios.get(API_ROOT + 'items/')
            .then(res => {
                this.setState({items: res.data});
                console.log("GET", res);
                console.log("GET", res.data);
                console.log("GET", res.data[0]);
            })
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

    render() {
        return (
            <Container className="item-list-container">
                <Row>
                {this.state.items.map((item) => 
                    <Col xc={6} sm={6} md={4} lg={4}>
                        <Item
                            data={item}
                            to={'/items/' + item.item_id}
                            status={1}
                        />
                    </Col>                    
                )}
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



