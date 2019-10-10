import React from 'react';
import './style.scss';
import {
    Button,
    Card,
    Container,
    Col,
    Form, 
    Row,    
} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import Chat from '../../screens/Chat';
import Pagination from '../../components/Pagination';
import bicycle from '../../images/bicycle.jpg';
import test from '../../images/test.jpg';

let valueOfTextarea ;

export default class FriendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            friends: friends,
            inputtingMessage: '',
            messages: messages,
            selectedChatroom: '',
            listStyle: "chat-list-absolute",
            chatStyle: "chat-view-fixed",
        }
    }

// showSelectedChatRoom = () =>{
// }
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


    render(){
        return(
            <Container className="friend-list-container">
                <Row>
                    <Col sm={12} md={6} className={this.state.listStyle}
                        onMouseOver={this.onList}
                    >
                        {
                            this.state.friends.map(friend => 
                            <Card className="friend-card">
                                <img src={friend.image} className="friend-card-image"/>
                                <h6 className="friend-card-name">{friend.name}</h6>
                                <h6 className="friend-card-lastMessage">{friend.lastMessage}</h6>
                                    <Button 
                                        className="friend-card-button"
                                        onClick={this.showSelectedChatRoom}
                                    >
                                        <h6>トーク</h6>
                                    </Button>                                    
                            </Card>
                            )
                        }
                        <Pagination
                                numOfPage={2}
                            />
                    </Col>
                    <Col sm={12} md={6} className={this.state.chatStyle}
                        onMouseOver={this.onChat}
                    >
                        <Chat/>
                    </Col>
                </Row>
                {/* <Pagination
                    numOfPage={2}
                /> */}
            </Container>
        )
    }
}

const messages =[
    {
        id: 0,
        message: 'こんにちは！そのモニター借りたいです！',
    },
    {
        id: 1,
        message: 'あざす！とりま俺んちの近く着て～',
    },
    {
        id: 0,
        message: 'どこなん？',
    },
    {
        id: 1,
        message: '九工大の近くだよん～',
    },
    {
        id: 0,
        message: '近い!'
    },

]

const friends = [
    {
        name: "池田エライザ",
        image: test,
        numOfCards: 3,
        numOfGood: 100,
        lastMessage: "近い！"
    },
    {
        name: "Friend B",
        image: test,
        numOfCards: 4,
        numOfGood: 120,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 40,
        lastMessage: ""
    },
    {
        name: "Friend D",
        image: bicycle,
        numOfCards: 6,
        numOfGood: 3,
        lastMessage: ""
    },
    {
        name: "Friend E",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 11,
        lastMessage: ""
    },
    {
        name: "Friend F",
        image: bicycle,
        numOfCards: 2,
        numOfGood: 438,
        lastMessage: "了解"
    },
    {
        name: "Friend A",
        image: bicycle,
        numOfCards: 3,
        numOfGood: 109,
        lastMessage: ""
    },
    {
        name: "Friend B",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 39,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 21,
    },
    {
        name: "Friend B",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 39,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 21,
    },
    {
        name: "Friend B",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 39,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 21,
    },
    {
        name: "Friend B",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 39,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 21,
    },
]








class ChatBoxMe extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div class="chat-message chat-right">
                <div class="chat-message-box">
                    <div class="chat-message-content">
                        <div class="chat-message-text">{this.props.message}</div>
                    </div>
                </div>
                </div>
                <div class="chat-message-clear"></div>
            </div>
        )
    }
}


class ChatBoxOther extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
                <div class="chat-message chat-left">
                <div class="chat-message-box">
                    <div class="chat-message-content">
                        <div class="chat-message-text">{this.props.message}</div>
                    </div>
                </div>
                </div>
                <div class="chat-message-clear"></div>
            </div>
        )
    }
}