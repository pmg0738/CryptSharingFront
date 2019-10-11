import React from 'react';
import axios from 'axios';
// import axiosBase from 'axios';

import './style.scss';
import { API_BASE_URL } from '../../config.js'
import {BrowserRouter, Route, Link} from 'react-router-dom';

import {
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,    
 } from 'react-bootstrap';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
//  import image from '../../images/art.jpg';
import Navbar from '../../components/Navbar';
import Pagination from '../../components/Pagination';

import bicycle from '../../images/bicycle.jpg';
import test from '../../images/test.jpg';

import park from '../../images/park.jpg';
import cap from '../../images/cap.jpg';
import cup from '../../images/cup.jpg';
import mouse from '../../images/mouse.jpg';
import speaker from '../../images/speaker.jpg';
import carryBag from '../../images/carry_bag.jpg';
import monitor from '../../images/monitor.jpg'
//  import umbrella from '../../images/umbrella.jpg';


export default class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            numOfItems: 0,
        }
    }

    componentWillMount() {
        this.getItems();
        this.getNumOfItems();
    }

    renderRentaringMessage = (isRented) => {
        if(isRented){
            return(
            <p className="item-list-item-card-status-unavailable">貸出中</p>
            )
        }
    }

    getItems = () => {
        // axios.get('http://localhost:8000/items/', {headers: {"Content-Type": "application/json"}})
        axios.get(API_BASE_URL + '/items/' , {headers: {"Content-Type": "application/json"}})
            .then(res => this.setState({items: res.data}))
            .catch(error => console.error('ItemList get items', error))
    }

    getNumOfItems = () => {
        axios.get(API_BASE_URL + '/items/count/' , {headers: {"Content-Type": "application/json"}})
            .then(res => console.log('res', res))
            // .then(res => this.setState({numOfItems: res.data}))
            .catch(error => console.error('ItemList get items', error))
    }


    render() {
        return (
            <Container className="item-list-container">
                <Row>
                {this.state.items.map((item) => 
                    <Col xc={6} sm={6} md={4} lg={3}>
                    <Link to='/items/1'>
                        <Card className="item-list-item-card">
                            <div className="item-list-item-card-image-container">
                                <Image src={item.image} className="item-list-item-card-image"/>
                                <div className="item-list-item-card-image-smoke" />
                                {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][item.status]}
                            </div>
                            <p className="item-list-item-card-price">100円/1時間</p>
                        </Card>
                    </Link>
                    </Col>
                )}
                </Row>
                <Link to='/items/post'>
                    <Button className="item-list-add-button">
                        <p className="item-list-add-button-label">出品する</p>
                        <FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
                    </Button>
                </Link>
                <Pagination numOfPage={this.state.numOfItems} />
            </Container>
        );
    }
}