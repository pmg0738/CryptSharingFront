import React from 'react';
import './style.scss';
import { Row } from 'react-bootstrap'

import Chat from '../../components/Chat';
import ChatListComponent from '../../components/ChatListComponent';


export default class FriendList extends React.Component{
    constructor(props){
        super(props);
    }

    showSelectedChatRoom = (userId) =>{
        console.log('userId',userId);
    }

    render(){
        return(
            <Row className="chat-screen-contaienr">
                <div className="chat-list-container">
                    <ChatListComponent/>
                </div>
                <div className="chat-main-container">
                    <Chat/>
                </div>
            </Row>
        );
    }
}
