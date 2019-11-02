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

import speaker from '../../../images/speaker.jpg';
import cap from '../../../images/cap.jpg';
import cup from '../../../images/cup.jpg';



export default class MyPageRentNow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: [
                {
                    color: "red",
                    image: speaker,
                    title: "スピーカ",
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
            ]
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Item/>
                    {/* {this.state.items.map(item =>
                        <Col xc={6} sm={6} md={4} lg={3}>
                            <Card className="mypage-posted-item-card">
                                <div className="mypage-posted-item-card-image-container">
                                    <Image src={item.image} className="mypage-posted-item-card-image"/>
                                    {[<div className="mypage-posted-item-card-image-smoke-not-available" />,<div/>][item.status]}
                                </div>
                                <p className={"mypage-posted-item-card-title-" + item.color}>{item.title}</p>
                            </Card>
                        </Col>
                    )} */}
                </Row>
            </Container>
        )
    }
}

