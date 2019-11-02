import React from 'react';
import './style.scss';
import { 
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,
    Form,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faHeart } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';
import eroi from '../../images/eraiza.png';


export default class Request extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }


    render() {
        // console.log('this.props', this.props);

        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="left">
                            <Image className="request-image" src={eroi}/>
                            <div className="request-posted-person">
                                出品者：Park
                            </div>
                            <div className="request-posted-person-value">
                                ★★★★★
                            </div>
                            <div className="request-item-brand-name">ブランド名：Nike</div>
                            <div className="request-item-price">購入金額: 4万</div>
                        </Col>
                        <Col sm={12} md={6} className="right">
                        <Form>
                            <p>
                                使用時間：<input type="text" name="num" size="10"/>
                                        <select name="time" className="request-use-time">
                                            <option value="hour">時間</option>
                                            <option value="day">日</option>
                                        </select>
                            </p>
                            <p>
                                金額：<input type="text" name="money" size="20"/>円
                            </p> 
                            <p> 
                                希望日：<select name="month">
                                            <option value="1">1月</option>
                                            <option value="2">2月</option>
                                            <option value="3">3月</option>
                                            <option value="4">4月</option>
                                            <option value="5">5月</option>
                                            <option value="6">6月</option>
                                            <option value="7">7月</option>
                                            <option value="8">8月</option>
                                            <option value="9">9月</option>
                                            <option value="10">10月</option>
                                            <option value="11">11月</option>
                                            <option value="12">12月</option>
                                    </select>
                                    <input type="text" name="days" size="2"/>日
                            </p>
                            <p>
                                受け渡し場所：<input type="text" name="place" size="30"/>
                            </p>


                                            
                                    <div className="item-post-form-label">コメント</div>                                                        
                                    <textarea
                                        className="item-post-item-detail-textarea"
                                        type="text"
                                        placeholder='メッセージを記入してください'
                                    />
                
                        </Form>
                        <Button variant="warning"
                                className="request-request-button"
                                >リクエストを送る</Button>
                        
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
