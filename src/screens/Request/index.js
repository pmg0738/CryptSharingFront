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

import { getItem, getItemImages } from '../../actions/api'
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
                            <Form.Group controlId="formBasicEmail">
                            <div className="item-post-form-label">料金</div>                                                        
                                    <Row>
                                    <Form.Control 
                                        className="item-post-price-form"
                                        type="number" placeholder="20"/>
                                    <p className="item-post-price-label">円　 /</p>
                                    <select
                                        className="item-post-unit-time-select"
                                        // value={this.state.tag}
                                        onChange={(e) => this.setState({tag: e.target.value})}
                                    >
                                        <option>１分</option>
                                        <option>５分</option>
                                        <option>１０分</option>
                                        <option>１５分</option>
                                        <option>３０分</option>
                                        <option>１時間</option>
                                        <option>１週間</option>
                                        <option>１ヶ月</option>
                                        <option>１年</option>
                                    </select>
                                    </Row>
                                    <Row>
                                    <Form.Control 
                                        className="item-post-price-form"
                                        type="number" placeholder="20"/>
                                    <p className="item-post-price-label">円　 /</p>
                                    <select
                                        className="item-post-unit-time-select"
                                        // value={this.state.tag}
                                        onChange={(e) => this.setState({tag: e.target.value})}
                                    >
                                        <option>１年</option>
                                    </select>
                                    </Row>
                                    <div className="item-post-form-label">その他の情報</div>                                                        
                                    <textarea
                                        className="item-post-item-detail-textarea"
                                        type="text"
                                        placeholder='購入価格: 32400円'
                                    />
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
