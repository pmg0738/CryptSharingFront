import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,    
 } from 'react-bootstrap';

// import axiosBase from 'axios';
import { getItems, getItemCount } from '../../actions/api';

import './style.scss';
// import { API_BASE_URL } from '../../config.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../../components/Pagination';
import Item from '../../components/Item';

import eraiza from '../../images/eraiza.png';



class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [eraiza, eraiza, eraiza, eraiza, eraiza, eraiza, eraiza, eraiza, eraiza, eraiza,],
        }
    }

    componentWillMount() {
        this.props.getItems(1);
        // this.props.getItem(1);
    }

    renderRentaringMessage = (isRented) => {
        if(isRented){
            return(
            <p className="item-list-item-card-status-unavailable">貸出中</p>
            )
        }
    }


    // getNumOfItems = () => {
    //     axios.get(API_BASE_URL + '/items/count/' , {headers: {"Content-Type": "application/json"}})
    //         .then(res => res.data.count)
    //         .catch(error => console.error('ItemList get items', error))
    // }

    renderItems = () => {
        return (
            _.map(this.props.items, item => (
                <Col xc={6} sm={6} md={4} lg={3} key={item.item_uid}>
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
        this.props.getItems(page);
    }


    render() {
        // this.props.getItemCount();
        // const count = this.props.getItemCount()
        // console.log('props', this.props);
        // console.log('items', this.props.items);
        // console.log('count', this.state);

        return (
            <Container className="item-list-container">
                <Row>
                {this.state.items.map((item) => 
                    <Col xc={6} sm={6} md={4} lg={3}>
                        <Item 
                            to='/items/1'
                            image={item.image}
                            pricePerHour={10}
                            status={1}
                        />
                    </Col>                    
                )}
                
                {/* {this.renderItems()} */}
                </Row>
                <Link to='/items/new/post'>
                    <Button className="item-list-add-button">
                        <p className="item-list-add-button-label">出品する</p>
                        <FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
                    </Button>
                </Link>
                <Pagination numOfPage={2} handlePagination={this.handlePagination}/>
                {/* <Pagination numOfPage={this.state.numOfItems} /> */}
            </Container>
        );
    }
}


// const mapStateToProps = state => console.log('state', state);
const mapStateToProps = state => ({ items: state })
const mapDispatchToProps = ({ getItems, getItemCount })

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)