import React from 'react';
import './style.scss';
import { 
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';
import { items } from '../../datas/items.js';
import eraiza from '../../images/eraiza.png';

export default class UsedHistoryDetail extends React.Component {
    constructor(props){
        super(props);
        
       
        
    }


    render() {


        return (
            <div>
                <Container className="used-history-detail-container">
                    <Row>
                        <Col sm={12} md={6} className="used-history-detail-pic">
                            <Image className="used-history-detail-selected-pic" src={eraiza}/>
                            <Row>
                                <p className="used-history-detail-item-name">商品名:電動自転車</p>
                            
                            </Row>
                            <Row>
                                <FontAwesomeIcon className="used-history-detail-favorite-heart"  icon={faHeart}/>
                                <div className="used-history-detail-favorite-num">合計：300 いいね！！</div>
                            </Row>
                            <div className="used-history-detail-borrow-num">合計：100 borrow</div>
                            <div className="used-history-detail-charge-per-hour">1時間：100円</div>
                            <div className="used-history-detail-charge-per-day">1日：1000円</div>
                        </Col>
                        <Col sm={12} md={6} className="used-history-detail-left">
                            <Link to='/mypage'>
                                <Button className="used-history-detail-goto-back">戻る</Button>
                            </Link>
                            <div className="used-history-detail-poster-name">・投稿者名：パク</div>
                            <FontAwesomeIcon className="used-history-detail-poster-average-value"  icon={faStar}/>(average)
                            <div className="used-history-detail-borrowed-time">2019年5月20日 ~ 2019年5月21日</div>
                            <div className="used-history-detail-total-charge">合計金額：1000円</div>
                            <FontAwesomeIcon className="used-history-detail-poster-value"  icon={faStar}/>
                            <div className="used-history-detail-value-comments">
                                借りたときからギアに不具合があった<br/>
                                返却時にLINEを聞かれた<br/>
                            </div>
                            <Link to='/request'>
                                <Button className="used-history-detail-goto-request">借りる</Button>
                            </Link>
                        </Col>
                        
                    </Row>
                </Container>
                <Navbar/>
            </div>

        )
    }
}

