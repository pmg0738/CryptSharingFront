import React from 'react';
import {
    Button,
    Card,
    Container,
    Col,
    Form,
    Image,
    Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
import logo from '../../images/knock_black.png';

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="login-background">
                <div className="login-background-image-smoke"/>
                    <Container className="login-container">
                        <Row className="login-card-row-contaienr">
                            <Card className="login-card">
                                {/* <h6 className="signin-title">ログイン</h6> */}
                                {/* <h6 className="signin-title">KNOCK</h6>    */}
                                <Image src={logo} className="login-logo-image" />
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text> */}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Link to='/signup' className="go-to-sign-up-button">
                                        <p className="go-to-sign-up-button">Sing Up</p>
                                    </Link>
                                </Form>
                                <Link to='/years'>
                                    <Button className="login-button">
                                        <h6 className="login-button-text">LINE ログイン</h6>
                                    </Button>
                                </Link>
                            </Card>
                        </Row>
                    </Container>
            </div>
        )
    }
}