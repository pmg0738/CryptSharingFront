import React from 'react';
import Faker from 'faker';
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

import Chat from '../../components/Chat';
import ChatListComponent from '../../components/ChatListComponent';

import Pagination from '../../components/Pagination';
import eraiza from '../../images/eraiza.png';

let valueOfTextarea ;

export default class FriendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            friends: friends,
            inputtingMessage: '',
            selectedChatroom: '',
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

    showSelectedChatRoom = (e) =>{
        console.log('selectedroomid', e);
    }

    render(){
        return(
            <Container>
                <Row>
                <Col md={12} lg={6}>
                    <ChatListComponent
                        friends = {this.state.friends}
                        onClick = {(e)=> this.showSelectedChatRoom(e)}
                    />
                </Col>
                <Col md={12} lg={6} className={this.state.chatStyle}
                        onMouseOver={this.onChat}
                    >
                        <Chat/>
                </Col>
                </Row>
            </Container>
            // <Container className="friend-list-container">
            //     <Row className="chat-container-row">
            //         <Col md={12} lg={6} className={this.state.listStyle}
            //             onMouseOver={this.onList}
            //         >
            //             {
            //                 this.state.friends.map(friend => 
            //                 <Card className="friend-card">
            //                     <img src={friend.image} className="friend-card-image"/>
            //                     <h4 className="friend-card-name">{friend.name}</h4>
            //                     <h6 className="friend-card-lastMessage">{friend.lastMessage}</h6>
            //                         <Button 
            //                             className="friend-card-button"
            //                             onClick={(e)=> this.showSelectedChatRoom(e)}
            //                             id={friends.userId}
            //                         >
            //                             <h6>トーク</h6>
            //                         </Button>                                    
            //                 </Card>
            //                 )
            //             }
            //             <Pagination
            //                     numOfPage={2}
            //                 />
            //         </Col>
            //         <Col md={12} lg={6} className={this.state.chatStyle}
            //             onMouseOver={this.onChat}
            //         >
            //             <Chat/>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

const friends = [
    {
        name: "池田エライザ",
        image: eraiza,
        numOfCards: 3,
        numOfGood: 100,
        lastMessage: "近い！",
        userId: 1,
    },
]



for(let i= 0; i<10; i++){
    friends.push(
        {
            name: Faker.internet.userName(),
            image: Faker.internet.avatar(),
            numOfCards: Faker.random.number(),
            numOfGood: Faker.random.number(),
            lastMessage: Faker.lorem.words(),
            userId: i+2,
        }
    )
}
