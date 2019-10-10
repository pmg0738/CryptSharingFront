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
                        <Tab eventKey="rent-now" title="Rent Now">
                            <div className="my-page-tab-explanation">What You rent now</div>
                            <MyPageRentNow/>
                        </Tab>
                        <Tab eventKey="booked" title="Booked">
                            <div className="my-page-tab-explanation">What You have booked (NOT RENT YET)</div>
                            <MyPageBooked/>
                        </Tab>
                        <Tab eventKey="posted" title="Posted">
                            <div className="my-page-tab-explanation">What You Posted Before</div>
                            <MyPagePosted/>
                        </Tab>    
                    </Tabs>
                </Container>
        );
    }
}