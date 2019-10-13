import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,    
 } from 'react-bootstrap';

// import axiosBase from 'axios';
import { getItems } from '../../actions/api';

import './style.scss';
import { API_BASE_URL } from '../../config.js'

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
//  import image from '../../images/art.jpg';
import Navbar from '../../components/Navbar';
import Pagination from '../../components/Pagination';
import Item from '../../components/Item';

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


class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            numOfItems: 2,
        }
    }

    componentWillMount() {
        // this.getItems();
        // this.getNumOfItems();
        this.props.getItems();
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

    // getNumOfItems = () => {
    //     axios.get(API_BASE_URL + '/items/count/' , {headers: {"Content-Type": "application/json"}})
    //         // .then(res => console.log('res', res))
    //         // .then(async res => this.setState({numOfItems: res.data.count}))
    //         .then(res => {
    //             return res.data.count
    //         })
    //         .catch(error => console.error('ItemList get items', error))            
    // }

    getNumOfItems = () => {
        axios.get(API_BASE_URL + '/items/count/' , {headers: {"Content-Type": "application/json"}})
            .then(res => res.data.count)
            .catch(error => console.error('ItemList get items', error))
    }

    renderItems = () => {
        return (
            _.map(this.props.items, item => (
                <Col xc={6} sm={6} md={4} lg={3}>
                    <Item 
                        to='/items/1'
                        image={item.image}
                        pricePerHour={10}
                        status={1}
                    />
                </Col>
            ))
        );
    }


    render() {
        console.log('props', this.props);
        console.log('items', this.props.items);

        return (
            <Container className="item-list-container">
                <Row>
                {/* {this.state.items.map((item) => 
                    <Col xc={6} sm={6} md={4} lg={3}>
                        <Item 
                            to='/items/1'
                            image={item.image}
                            pricePerHour={10}
                            status={1}
                        />
                    </Col>                    
                )} */}
                
                {this.renderItems()}
                </Row>
                <Link to='/items/post'>
                    <Button className="item-list-add-button">
                        <p className="item-list-add-button-label">出品する</p>
                        <FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
                    </Button>
                </Link>
                <Pagination numOfPage={12} />
                {/* <Pagination numOfPage={this.state.numOfItems} /> */}
            </Container>
        );
    }
}


// const mapStateToProps = state => console.log('state', state);
const mapStateToProps = state => ({ items: state })
const mapDispatchToProps = ({ getItems })

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)