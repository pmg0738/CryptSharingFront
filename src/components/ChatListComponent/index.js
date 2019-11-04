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


import Pagination from '../../components/Pagination';

let valueOfTextarea ;

export default class ChatListComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // friends: friends,
            // inputtingMessage: '',
            // selectedChatroom: '',
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



    render(){
        return(
                <div className={this.state.listStyle}
                    onMouseOver={this.onList}
                >
                    {
                        this.props.friends.map(friend => 
                        <Card className="friend-card">
                            <img src={friend.image} className="friend-card-image"/>
                            <h4 className="friend-card-name">{friend.name}</h4>
                            <h6 className="friend-card-lastMessage">{friend.lastMessage}</h6>
                                <Button 
                                    className="friend-card-button"
                                    onClick={this.props.onClick}
                                >
                                    <h6>トーク</h6>
                                </Button>                                 
                        </Card>
                        )
                    }
                    <Pagination
                            numOfPage={2}
                        />
                    </div>
        );
    }
}
