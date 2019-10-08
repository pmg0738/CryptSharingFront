import React from 'react';
import './style.scss';
import { 
    Container,
    Form,
    Row,
    Col,
    Button,
} from 'react-bootstrap';

import Navbar from '../../components/Navbar';

export default class Chat extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            messages: [
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

            ],
            inputtingMessage: '',
        }
    }

    sendMessage = (e) =>{
        if (e.keyCode === 13) {
            console.log('if no naka', e.keyCode);
            console.log('value', e.target.value);
            let messages = this.state.messages;
            messages.push(
                {
                    id: 0,   // 0自分が送ったやつ
                    message: e.target.value
                    }
                );
            this.setState({
                messages: messages,
                inputtingMessage: '',
            })
          }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ block: "end" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                        <div id="chat-view-container" className="chat-view-container">
                            <div className="chat-view">
                                {this.state.messages.map(item =>
                                    [
                                    <ChatBoxMe message = {item.message}/>,
                                    <ChatBoxOther message = {item.message}/>,
                                ][item.id]                
                                    )}
                            </div>
                            <div ref={(el) => {this.messagesEnd = el;}}></div>
                        </div>

                        <Form.Control 
                            className="chat-textarea" 
                            as="textarea" 
                            rows="3"
                            value={this.state.inputtingMessage}
                            onChange={(e) => this.setState({inputtingMessage: e.target.value})}
                            onKeyDown={(e) => this.sendMessage(e)}
                        ></Form.Control>
                </Container>
            </div>
        )
    }
}


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