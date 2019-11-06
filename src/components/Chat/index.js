import React from 'react';
import './style.scss';
import { 
    Container,
    Form,
    Row,
    Col,
    Button,
} from 'react-bootstrap';

let valueOfTextarea ;

export default class Chat extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedchatRoom: 1,
            chatRoom :[
                {
                    id:'1',
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
                        {
                            id: 0,
                            message: '近い!'
                        },
                        
                    ],
                },

                {
                    id:'2',
                    messages: [
                        {
                            id: 0,
                            message: 'こんにちは！',
                        },
                        {
                            id: 1,
                            message: 'えぐい',
                        },
                    ],
                },
            ],
            inputtingMessage: '',
        }
    }

    sendMessage = (e) =>{
        if (e.keyCode === 13) {
            if(e.target.value!=""){
                let latestMessages = this.state.chatRoom[this.state.selectedchatRoom].messages;
                latestMessages.push(
                    {
                        id: 0,   // 0自分が送ったやつ
                        message: e.target.value
                        }
                    );
                this.setState({
                    messages: latestMessages,
                    inputtingMessage: '',
                })
                setTimeout(() => {
                    this.scrollToBottom();
                }, 100)
          }
        }
    }

    sendMessageByButton = (e) =>{
        console.log('return e.target.value by global variable', valueOfTextarea);
        let latestMessages = this.state.chatRoom[this.state.selectedchatRoom].messages;
        if(latestMessages!=""){
            latestMessages.push(
                {
                    id: 0,
                    message: valueOfTextarea
                }
            )
            this.setState({
                messages: latestMessages,
                inputtingMessage: '',
            })
            setTimeout(() => {
                this.scrollToBottom();
            }, 50)
        }
    }

    

    inputTextInTextarea = (e) =>{
        this.setState({inputtingMessage: e.target.value});
        valueOfTextarea = e.target.value;
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ block: "end" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
    render() {
        return (
            <div>
                <div id="chat-view-container" className="chat-view-container">
                    <div className="chat-view">
                        {this.state.chatRoom[this.state.selectedchatRoom].messages.map(item =>
                            [
                            <ChatBoxMe message = {item.message}/>,
                            <ChatBoxOther message = {item.message}/>,
                        ][item.id]                
                            )}
                    </div>
                    <div ref={(el) => {this.messagesEnd = el;}}></div>
                </div>

                <div className="chat-form-container">
                    <Form.Row>
                        <Form.Group>
                            <div className="chat-textarea-container">
                                <Form.Control 
                                    className="chat-textarea" 
                                    as="textarea" 
                                    rows="5"
                                    value={this.state.inputtingMessage}
                                    onChange = {this.inputTextInTextarea}
                                    onKeyDown={(e) => this.sendMessage(e)}
                                />
                            </div>
                            <div className="chat-send-button-container">
                            <Button className="chat-send-button" onClick={this.sendMessageByButton}>送信</Button>
                            </div>
                        </Form.Group>
                    </Form.Row>
                </div>
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