import React from 'react';
import './style.scss';

import {
    Button,
    Card,
    Container,
    Col,
    Row,    
 } from 'react-bootstrap';
 import image from '../../images/art.jpg';
 import bicycle from '../../images/bicycle.jpg';
 import umbrella from '../../images/umbrella.jpg';


export default class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        }
    }


    render() {
        return(
            <Container>
                <Row>
                {this.state.items.map((item) => 
                    <Col xc={6} sm={6} md={4} lg={3}>
                        <Card className="item-list-item-card">
                            <img src={bicycle} className="item-list-item-card-image" />
                            <p className="item-list-item-card-title">自転車</p>
                            <p className="item-list-item-card-status">利用可能</p>
                            <p className="item-list-item-card-price">10円</p>
                            <Button className="item-list-item-card-detail-button">詳細</Button>
                        </Card>
                    </Col>
                )}
                </Row>
            </Container>
        )
    }
}