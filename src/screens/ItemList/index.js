import React from 'react';
import axios from 'axios';

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
            items: [
                {
                    color: "red",
                    image: park,
                    title: "ぱく",
                    status: 0,
                }, 
                {
                    color: "yellow",
                    image: cap,
                    title: "キャップ",
                    status: 1,
                }, 
                {
                    color: "green",
                    image: cup,
                    title: "コップ",
                    status: 1,
                }, 
                {
                    color: "blue",
                    image: mouse,
                    title: "マウス",
                    status: 0,
                }, 
                {
                    color: "red",
                    image: speaker,
                    title: "スピーカー",
                    status: 0,
                }, 
                {
                    color: "yellow",
                    image: carryBag,
                    title: "キャリーバック",
                    status: 0,
                }, 
                {
                    color: "green",
                    image: bicycle,
                    title: "自転車",
                    status: 0,
                }, 
                {
                    color: "red",
                    image: monitor,
                    title: "自転車",
                    status: 1,
                }, 
                {
                    color: "yellow",
                    image: cap,
                    title: "キャップ",
                    status: 1,
                }, 
                {
                    color: "green",
                    image: cup,
                    title: "コップ",
                    status: 1,
                }, 
                {
                    color: "blue",
                    image: mouse,
                    title: "マウス",
                    status: 0,
                }, 
                {
                    color: "red",
                    image: speaker,
                    title: "スピーカー",
                    status: 0,
                }, 
                {
                    color: "yellow",
                    image: carryBag,
                    title: "キャリーバック",
                    status: 0,
                }, 
                {
                    color: "green",
                    image: bicycle,
                    title: "自転車",
                    status: 0,
                }, 
                {
                    color: "red",
                    image: monitor,
                    title: "自転車",
                    status: 1,
                }, 
            ]
        }
    }

    componentWillMount() {
        axios.get('http://localhost:8000/items')
        // axios.get(API_BASE_URL + '/items')
            .then(res => console.log('res', res))
            .catch(error => console.error('ItemList get items', error))
    }

    renderRentaringMessage = (isRented) => {
        if(isRented){
            return(
            <   p className="item-list-item-card-status-unavailable">貸出中</p>
            )
        }
    }


    render() {
        return(
            <div>
                <Container className="item-list-container">
                    <Row>
                    {this.state.items.map((item) => 
                        <Col xc={6} sm={6} md={4} lg={3}>
                        <Link to='/items/1'>
                            <Card className="item-list-item-card">
                                <div className="item-list-item-card-image-container">
                                    <Image src={item.image} className="item-list-item-card-image"/>
                                    {/* <div className="item-list-item-card-image-smoke" /> */}
                                    {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][item.status]}
                                </div>
                                <p className={"item-list-item-card-title-" + item.color}>{item.title}</p>
                                {this.renderRentaringMessage(!item.status)}
                                {/* <p className="item-list-item-card-price">10円/分</p> */}
                                {/* <Link to='/items/1'>
                                    <Button className={"item-list-item-card-detail-button-" + item.color}>詳細</Button>
                                </Link> */}
                                {/* <p className={"item-list-item-card-price-" + item.color}>{20 + "円 / 分" }</p> */}
                            </Card>
                        </Link>
                            {/* <p className="item-list-item-card-price-under">10円/分</p> */}
                        </Col>
                    )}
                    </Row>
                    <Link to='/items/post'>
                        <Button className="item-list-add-button">＋</Button>                    
                    </Link>
                    <Pagination numOfPage={10} />
                </Container>
                {/* <Navbar/> */}
            </div>
        )
    }
}