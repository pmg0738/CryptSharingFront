import React from 'react';
import Faker from 'faker';
import './style.scss';
import {
    Button,
    // Card,
    Container,
    Col,
    Form, 
    Row,    
} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

import eraiza from '../../images/eraiza.png';


import Pagination from '../Pagination';

export default class ChatListComponent extends React.Component{
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


    showSelectedChatRoom = (userId) =>{
        console.log('this is clicked userId', userId);
        
    }

    render(){
        return(
                <div className={this.state.listStyle}
                    onMouseOver={this.onList}
                >
                    {
                        this.state.friends.map(friend=>
                            <Card className="friend-card">
                                <img src={friend.image} className="friend-card-image"/>
                                <h4 className="friend-card-name">{friend.name}</h4>
                                <h6 className="friend-card-lastMessage">{friend.lastMessage}</h6>
                                    <Button 
                                        className="friend-card-button"
                                        onClick={()=>this.showSelectedChatRoom(friend.userId)}
                                    >
                                        <h6>開く</h6>
                                    </Button>                                 
                            </Card>
                        )
                    }
                    
                </div>
        );
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



for(let i= 0; i<20; i++){
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