import React from 'react';
import firebase from 'firebase';
import api from '../../../redux/apis';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { fetchMyData } from '../../../redux/actions/user';
// Material UI Component
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
// Material UI Icon

// else
import dogImage from '../../../images/dog.png';




class Chat extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			inputtingMessage: '',
			sendButtonStyle: styles.sendButtonDeactive,
			me: {}
		}
	}

	componentDidMount() {
		this.scrollToBottom();
		this.setMyData();
	}

	
	setMyData = async () => {
		if(Object.keys(this.props.me).length==0) {
			this.props.fetchMyData()
				.then(response => this.setState({me: response}));
		} else {
			this.setState({ me: this.props.me });
		}
	}

	// Ctrl + Enter でメッセージを送信
	sendMessageByKeyboard = (e) => {
		if(e.ctrlKey && e.keyCode===13){
			this.sendMessage();
		}
	}

	// メッセージを送信
	sendMessage = () => {
		if(this.state.inputtingMessage!="") {
			const newMessage = this.state.inputtingMessage;
			// let messages = this.props.messages;

			// messages.push({
			// 	id: 0,   // 0自分が送ったやつ
			// 	message: newMessage,
			// });

			// メッセージを追加
			// this.props.setMessages(this.props.roomId, messages);

			// Firestoreに保存
			this.postMessageToFirestore(newMessage);
			// Djangoに保存
			this.postMessageToDjango(newMessage);

			// テキストエリアの中身を空にする
			this.setState({
				inputtingMessage: '',
				sendButtonStyle: styles.sendButtonDeactive,
			})
	
			setTimeout(() => {
				this.scrollToBottom();
			}, 100)
		}
	}

	// Firestoreにデータを保存
	postMessageToFirestore = (message) => {
		const db = firebase.firestore();

		const timestamp = String(new Date().getTime());

		db.collection('/rooms/' + this.props.roomId + '/messages').doc(timestamp).set({
			sender: this.state.me.user_id,
			message: message,
			is_read: false,
			sent_date_time: new Date(),
		}).then((docRef) => console.log('docRef', docRef))
	}

	// Djangoにデータほ保存
	postMessageToDjango = (message) => {
		api.post('chat/messages/', {
			room_id: this.props.roomId,
			message: message,
			sender: this.state.me.user_id,
		})
		.then(res => {
			this.props.setRoomLastMessage(this.props.roomId,
				res.data.message, new Date())
		})
	}



	// テキストを入力
	inputTextInTextarea = (e) => {
		const text = e.target.value;

		// テキストが入力されていたら送信ボタンをアクティブにする
		if (text=="") {
			this.setState({sendButtonStyle: styles.sendButtonDeactive});
		} else {
			this.setState({sendButtonStyle: styles.sendButtonActive});
		}
		this.setState({ inputtingMessage: text });
	}


	scrollToBottom = () => {
		// this.messagesEnd.scrollIntoView({ block: "end" });
	}

	// 自分と相手を判別してメッセージコンポーネントを表示
	renderMessages = () => {
		return (
			this.props.messages.map(item => {
					if(item.sender===this.state.me.user_id){
						return <ChatBoxMe message = {item.message}/>;
					} else {
						return <ChatBoxOther message = {item.message}/>;
					}
				}
			)
		);
	}

	render() {
		if(this.props.roomId==0) {
			return (
				<div className="chat-main-not-selected">
					<p>Chat !!</p>
					<img src={dogImage} />
				</div>
			);
		}
		else {
			return (
				<div>
					<div id="chat-view-container" className="chat-view-container">
						<div className="chat-view">
							{this.renderMessages()}
						</div>
						<div ref={(el) => {this.messagesEnd = el;}}></div>
					</div>
					<div className="chat-form-container">
							<div className="chat-textarea-container">
								<TextField
									id="outlined-multiline-static"
									multiline
									rows="4"
									placeholder="テキストを入力"
									style={styles.textfield}
									margin="normal"
									variant="outlined"
									onChange={this.inputTextInTextarea}
									value={this.state.inputtingMessage}
									onKeyDown={(e) => this.sendMessageByKeyboard(e)}
								/>
							</div>
							<div className="chat-send-button-container">
								{/* <div>
									<IconButton aria-label="delete" onClick={() => console.log("画像を選択")}>
										<PhotoLibraryOutlinedIcon style={styles.imageButtonIcon} />
									</IconButton>
								</div> */}
								<Button onClick={this.sendMessage} style={this.state.sendButtonStyle}>送信</Button>
							</div>
						
					</div>
					{/* <IconButton aria-label="delete" style={styles.closeButton} onClick={this.props.close}>
						<CloseIcon style={styles.closeButtonIcon} />
					</IconButton> */}
				</div>
			);
		}
	}
}


const mapStateProps = (store) => {
	return { me: store.me };
}

export default connect( mapStateProps, { fetchMyData })(Chat);


class ChatBoxMe extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
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
		);
	}
}


class ChatBoxOther extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
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


const styles = {
	closeButton: {
		position: "absolute",
		top: 80,
		left: 20,
	},
	closeButtonIcon: {

		fontSize: 30,
	},
	imageButtonIcon: {
		fontSize: 40,
	},
	sendButtonActive: {
		backgroundColor: "#34a853",

		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingRight: 20,
	},
	sendButtonDeactive: {
		backgroundColor: "#999999",

		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingRight: 20,
	},
	textfield: {

		borderRadius: 8,
		width: "100%",
		maxHeight: 300,
	}
}