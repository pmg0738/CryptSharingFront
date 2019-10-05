import React from 'react';
import './style.scss';
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
import bicycle from '../../images/bicycle.jpg';
import test from '../../images/test.jpg';

//  import umbrella from '../../images/umbrella.jpg';


export default class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [bicycle, bicycle, test, bicycle, test, bicycle, test, bicycle, test, bicycle, test, bicycle],
        }
    }


    render() {
        return(
            <div>
                <Navbar/>
                <Container>
                    <Row>
                    {this.state.items.map((item) => 
                        <Col xc={6} sm={6} md={4} lg={3}>
                            <Card className="item-list-item-card">
                                <div className="item-list-item-card-image-container">
                                    <Image src={item} className="item-list-item-card-image" />
                                </div>
                                <p className="item-list-item-card-title">自転車</p>
                                <p className="item-list-item-card-status">利用可能</p>
                                <p className="item-list-item-card-price">10円</p>
                                <Link to='/items/1'>
                                    <Button className="item-list-item-card-detail-button">詳細</Button>
                                </Link>
                            </Card>
                        </Col>
                    )}
                    </Row>
                </Container>
            </div>
        )
    }
}