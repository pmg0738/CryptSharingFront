import React from 'react';
import './style.scss';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Faker from 'faker';

import {
    Button,
    Card,
    Container,
    Row,
    Col,
    Nav,
    Image,
  } from 'react-bootstrap';
import eroi from '../../../images/eraiza.png';





export default class MyPageUsedHistory extends React.Component {
    constructor(props) {
        super(props);
                
    }

    
    

    render() {
        return (
            <Container>
                <Card>

                    <Card.Body>
                        <Row>
                            <Col sm={12} md={2} >
                                <Image className="mypage-used-history-image" src={Faker.internet.avatar()}/>
                            </Col>
                            <Col sm={12} md={10} >
                                <Row>
                                    <Col sm={12} md={5}>
                                        <Card.Title>Dell モニター</Card.Title>
                                    </Col>
                                    <Col sm={12} md={7}>
                                        <Card.Title>{Faker.internet.userName()} ☆☆☆☆☆</Card.Title>
                                    </Col>       
                                </Row>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <p>利用開始：2019年10月20日13:30</p>
                                        <p>返却時刻：2019年10月21日13:30</p>
                                    </Col>
                                    <Col> 
                                        <p>支払金額：500円</p>
                                        <div>
                                            <Link to='/items/2'>
                                                <Button variant="primary" className="mypage-used-history-detail-button">詳細</Button>
                                            </Link>
                                        </div>   
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}


