import React from 'react';
import Faker from 'faker';
import './style.scss';
import {
    Button,
    Card,
    Container,
    Col,
    Row,    
} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import Chat from '../../components/Chat';
import ChatListComponent from '../../components/ChatListComponent';

import Pagination from '../../components/Pagination';
import eraiza from '../../images/eraiza.png';

let valueOfTextarea ;

export default class FriendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            listStyle: "chat-list-absolute",
            chatStyle: "chat-view-fixed",
        }
    }

    onList = () => {
        this.setState({
            listStyle: "chat-list-absolute",
            chatStyle: "chat-view-fixed"
        })
    }

    onChat = () => {
        this.setState({
            listStyle: "chat-list-fixed",
            chatStyle: "chat-view-absolute"
        })
    }

    showSelectedChatRoom = (userId) =>{
        console.log('userId',userId);
    }

    render(){
        return(
            <Container>
                <Row>
                <Col md={12} lg={6}>
                    <ChatListComponent/>
                </Col>

                <Col md={12} lg={6} className={this.state.chatStyle}
                        onMouseOver={this.onChat}
                    >
                        <Chat/>
                </Col>
                </Row>
            </Container>
        )
    }
}
