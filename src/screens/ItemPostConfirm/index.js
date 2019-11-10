import React from 'react';
import {Link} from 'react-router-dom';
import './style.scss';
import { 
    Container,
    Button,
    Form,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

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
            item:{
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
                name: "Dell モニター 25インチ",
                price:{
                    oneHourPrice: 50,
                    oneDayPrice: 500,
                },
            },
            
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
                                    {this.state.item.images.map(image => 
                                        <Col sm={12} md={4}>
                                            <Image src={image} className="item-post-confrim-image"/>
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
                                        readOlny
                                        defaultValue={this.state.item.name}/>
                                    </Row>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            <div className="item-post-one-hour-fee">1時間 料金</div>
                                        </Form.Label>
                                        <Col sm="4">
                                            <Form.Control readOnly defaultValue={this.state.item.price.oneHourPrice}/>
                                        </Col>
                                        <p className="yen">円</p>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            <div className="item-post-one-hour-fee">1日 料金</div>
                                        </Form.Label>
                                        <Col sm="4">
                                            <Form.Control readOlny defaultValue={this.state.item.price.oneDayPrice}/>
                                        </Col>
                                        <p className="yen">円</p>
                                    </Form.Group>    
                                </Form.Group>
                            </Form>
                            <div className="item-post-form-label">その他の情報</div>                                                        
                            <textarea
                                className="item-post-item-detail-textarea"
                                type="text"
                                placeholder="Dell モニター / 27インチ/ Full HD/ HDMI/ 購入価額：￥17,180
                                <br/>参考url<br/>
                                https://www.amazon.co.jp/"
                            />
                            <Row className="item-post-confirm-button-container">
                                <Button className="item-post-confirm-button">登録</Button>
                                <Link to='/items/new/post'>
                                    <Button className="item-post-confirm-button">修正</Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
