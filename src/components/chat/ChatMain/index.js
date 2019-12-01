import React from 'react';
import firebase from 'firebase';
import axios from 'axios';
import './style.scss';
import { 
	Form,
} from 'react-bootstrap';
import dogImage from '../../../images/dog.png';
// Material UI Component
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

// Material UI Icon
import CloseIcon from '@material-ui/icons/Close';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';



export default class Chat extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			inputtingMessage: '',
			sendButtonStyle: styles.sendButtonDeactive,
		}
		this.myUserId = 1;
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	// メッセージを送信
	sendMessage = () => {
		if(this.state.inputtingMessage!="") {
			const newMessage = this.state.inputtingMessage;
			let messages = this.props.messages;

			messages.push({
				id: 0,   // 0自分が送ったやつ
				message: newMessage,
			});

			// メッセージを追加
			this.props.setMessages(this.props.roomId, messages);

			// Firestoreに保存
			this.postMessageToFirestore(newMessage);

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

	// Firestoreにデータを保存する
	postMessageToFirestore = (message) => {
		const db = firebase.firestore();

		const roomId = 1;

		const timestamp = String(new Date().getTime());

		db.collection('/rooms/' + roomId + '/messages').doc(timestamp).set({
			sender: this.myUserId,
			message: message,
			is_read: false,
			sent_date_time: new Date(),
		}).then((docRef) => console.log('docRef', docRef))
	}

	// Ctrl + Enter でメッセージを送信
	sendMessageByKeyboard = (e) => {
		// if(e.ctrlKey){
		// 	if (e.keyCode === 13) {
		// 		this.sendMessage();
		// 	}
		// }
		if(e.ctrlKey && e.keyCode===13){
			this.sendMessage();
		}
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
			this.props.messages.map(item =>
				[
					<ChatBoxMe message = {item.message}/>,
					<ChatBoxOther message = {item.message}/>,
				][Number(this.myUserId==item.id)]
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
								<div>
									<IconButton aria-label="delete" onClick={() => console.log("画像を選択")}>
										<PhotoLibraryOutlinedIcon style={styles.imageButtonIcon} />
									</IconButton>
								</div>
								<Button onClick={this.sendMessage} style={this.state.sendButtonStyle}>送信</Button>
							</div>
						
					</div>
					<IconButton aria-label="delete" style={styles.closeButton} onClick={this.props.close}>
						<CloseIcon style={styles.closeButtonIcon} />
					</IconButton>
				</div>
			);
		}
	}
}


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
		backgroundColor: "#282c34",
		color: "#ffffff",
		position: "absolute",
		top: 80,
		left: 20,
	},
	closeButtonIcon: {
		color: "#ffffff",
		fontSize: 30,
	},
	imageButtonIcon: {
		color: "#ffffff",
		fontSize: 40,
	},
	sendButtonActive: {
		backgroundColor: "#34a853",
		color: "#ffffff",
		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingRight: 20,
	},
	sendButtonDeactive: {
		backgroundColor: "#999999",
		color: "#ffffff",
		fontSize: 20,
		fontWeight: "bold",
		paddingLeft: 20,
		paddingRight: 20,
	},
	textfield: {
		backgroundColor: "#ffffff",
		color: "#ffffff",
		borderRadius: 8,
		width: "100%",
		maxHeight: 300,
	}
}