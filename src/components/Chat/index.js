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
                            message: 'こんにちは！\n明日の9時から自転車借りれませんか',
                        },
                        {
                            id: 1,
                            message: '何時まで使われますか？',
                        },
                        {
                            id: 0,
                            message: '昼までには返せるとおもます🤔',
                        },
                        {
                            id: 1,
                            message: '13時頃に外出する予定があるので、12時までとか大丈夫ですか？',
                        },
                        {
                            id: 0,
                            message: '大丈夫です!',
                        },
                        {
                            id: 0,
                            message: '遅くとも12時までには返せます！',
                        },
                        {
                            id: 1,
                            message: 'わかりました',
                        },
                        {
                            id: 1,
                            message: 'では、明日の8時45分頃受け渡しとかでいいですか？',
                        },
                    ],
                },
            ],
            inputtingMessage: '',
        }
    }

    sendMessage = (e) =>{
        if(e.ctrlKey){
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
                                    rows="4"
                                    placeholder="Ctrl + Enterで送信"
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