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

import Pagination from '../../components/Pagination';
import bicycle from '../../images/bicycle.jpg';

export default class FriendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            friends: friends,
        }
    }

    render(){
        return(
            <Container className="friend-list-container">
                {
                    this.state.friends.map(friend => 
                    <Card className="friend-card">
                        <img src={friend.image} className="friend-card-image"/>
                        <h6 className="friend-card-name">{friend.name}</h6>
                        <h6 className="friend-card-lastMessage">{friend.lastMessage}</h6>
                        <Link to='/chats/1' className="friend-card-button-link">
                            <Button className="friend-card-button">
                                <h6>トーク</h6>
                            </Button>
                        </Link>
                    </Card>
                    )
                }
                <Pagination
                    numOfPage={2}
                />
            </Container>
        )
    }
}



const friends = [
    {
        name: "Friend A",
        image: bicycle,
        numOfCards: 3,
        numOfGood: 100,
        lastMessage: "よろしく"
    },
    {
        name: "Friend B",
        image: bicycle,
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
        name: "Friend D",
        image: bicycle,
        numOfCards: 6,
        numOfGood: 73,
    },
    {
        name: "Friend E",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 1,
    },
    {
        name: "Friend F",
        image: bicycle,
        numOfCards: 2,
        numOfGood: 0,
    },
]