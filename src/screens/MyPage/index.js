import React from 'react';
import './style.scss';

import { Button, Card, Container, Col, Form, Row,
    ListGroup, Tabs, Tab,
 } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import MyPageRentNow from '../../components/MyPageComponents/MyPageRentNow';
import MyPageBooked from '../../components/MyPageComponents/MyPageBooked';
import MyPagePosted from '../../components/MyPageComponents/MyPagePosted';
import Navbar from '../../components/NavbarNoLogo';
import logo from '../../images/logo.png';


export default class MainSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (

                <Container>
                    <Tabs defaultActiveKey="rent-now" id="uncontrolled-tab-example">
                        <Tab eventKey="rent-now" title="借りてる">
                            <div className="my-page-tab-explanation">現在借りているもの</div>
                            <MyPageRentNow/>
                        </Tab>
                        <Tab eventKey="booked" title="予約">
                            <div className="my-page-tab-explanation">予約一覧</div>
                            <MyPageBooked/>
                        </Tab>
                        <Tab eventKey="posted" title="投稿一覧">
                            <div className="my-page-tab-explanation">投稿一覧</div>
                            <MyPagePosted/>
                        </Tab>    
                    </Tabs>
                </Container>
        );
    }
}