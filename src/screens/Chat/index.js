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
                    id: 1,
                    message: 'aaaaa',
                }
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

    render() {
        return (
            <div>
                <Navbar/>
                <Container>
                        <div className="chat-view">
                            {this.state.messages.map(item =>
                                [
                                <ChatBoxMe message = {item.message}/>,
                                <ChatBoxOther message = {item.message}/>,
                            ][item.id]                
                                )}
                        </div>
                        <Form.Control 
                            className="chat-textarea" 
                            as="textarea" 
                            rows="3"
                            value={this.state.inputtingMessage}
                            onChange={(e) => this.setState({inputtingMessage: e.target.value})}
                            onKeyDown={(e) => this.sendMessage(e)}
                        />
                        {/* <Button className="chat-send-button">送信</Button> */}
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
            // <Row>
            //     <div className="chat-balloon-right">
            //         {this.props.message}
            //     </div>
            // </Row>
            <div className="entire">
                <div className="main">
                    <p className="body-text">
                        {this.props.message}
                    </p>
                </div>
                <div className="traiangle"/>
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
            <Row>
                <div className="chat-balloon-left">
                    {this.props.message}
                </div>
            </Row>
        )
    }
}