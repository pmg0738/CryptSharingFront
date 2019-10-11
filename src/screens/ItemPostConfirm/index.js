import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './style.scss';
import { 
    Alert,
    Container,
    Button,
    Form,
    Row,
    Col,
    Card,
    Image,
} from 'react-bootstrap';
import loadImage from 'blueimp-load-image';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';
import test from '../../images/test.jpg';

import icon from '../../images/crypt_sharing_icon.png';
import S__23519271 from '../../images/S__23519271.jpg';
import S__23519273 from '../../images/S__23519273.jpg';
import S__23519274 from '../../images/S__23519274.jpg';
import S__23519275 from '../../images/S__23519275.jpg';
import S__23519276 from '../../images/S__23519276.jpg';
import S__23519277 from '../../images/S__23519277.jpg';
import S__23519278 from '../../images/S__23519278.jpg';
import S__23519279 from '../../images/S__23519279.jpg';
import S__23519280 from '../../images/S__23519280.jpg';
import S__23519281 from '../../images/S__23519281.jpg';



export default class ItemPostConfirm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [
                S__23519271,
                S__23519273,
                S__23519274,
                S__23519275,
                S__23519276,
                S__23519277,
                S__23519278,
                S__23519279,
                S__23519280,
                S__23519281,
            ],
            imageStartIndex: 0,                
            selectedImage: S__23519271,
            isOverNumOfImage: false,
        }

    }

    render() {
        return (
            <div>
                <Container>
                    <p className="item-post-confirm-header">確認してください！</p>
                    <Row>
                        <Col sm={12} md={6} lg={6} className="item-post-confirm-image-container">
                            <p className="item-post-confirm-image-header">登録した写真</p>
                                <Row>
                                    {this.state.images.map(item => 
                                        <Col sm={12} md={4}>
                                            <Image src={item} className="item-post-confrim-image"/>
                                        </Col>
                                    )}
                                </Row>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="item-post-confirm-info-container">
                            <p className="item-post-confirm-item-name">商品名：モニター</p>
                            <p className="item-post-confirm-fee">料金：900円/1日</p>
                            <p className="item-post-confirm-extra-info-header">その他の情報</p>
                            <p className="item-post-confirm-extra-infor-text">
                                Dell モニター / 27インチ/ Full HD/ HDMI/ 購入価額：￥17,180
                                <br/>参考url<br/>
                                https://www.amazon.co.jp/
                            </p>
                        </Col>
                    </Row>
                </Container>
               {/* <Container>
                   <p className="item-post-confirm-header">確認してください！</p>
                   <Row>
                       <Col sm={12} md={6} lg={6} className="item-post-confirm-image-container">
                           <p className="item-post-confirm-image-header">登録した写真</p>
                            <Row>
                                {this.state.images.map(item => 
                                    <Col sm={12} md={4}>
                                        <Image src={item} className="item-post-confrim-image"/>
                                    </Col>
                                )}
                            </Row>
                       </Col>
                       <Col sm={12} md={6} className="item-post-item-info">
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                   
                                    <div className="item-post-form-label">商品名</div>                                                        
                                    <Row>
                                    <Form.Control 
                                        className="item-post-item-name-form"
                                        type="text" value="Dell モニター 24インチ"/>
                                    </Row>
                                    <div className="item-post-form-label">料金</div>                                                        
                                    <Row>
                                    <Form.Control 
                                        className="item-post-price-form"
                                         value="500"/>
                                    <p className="item-post-price-label">円　 /</p>
                                    <Form.Control
                                        type="text"
                                        className="item-post-unit-time-select"
                                        value="1日"
                                    />
                                    </Row>
                                </Form.Group>
                            </Form>
                            <div className="item-post-form-label">その他の情報</div>                                                        
                            <textarea
                                className="item-post-item-detail-textarea"
                                type="text"
                                value='購入価格: 32400円'
                            />
                            <Row className="item-post-confirm-button-container">
                                <Link to='#'>
                                    <Button className="item-post-confirm-button">確認</Button>
                                </Link>
                            </Row>
                        </Col>
                   </Row>
               </Container> */}
            </div>

        )
    }
}
