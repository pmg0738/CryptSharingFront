import React from 'react';
import api from '../../../redux/apis';
import firebase from 'firebase';
import _ from 'lodash';
import './style.scss';

// Material UI Component
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// Material UI Layout
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// Material UI Icon

import CloseIcon from '@material-ui/icons/Close';
import GroupIcon from '@material-ui/icons/Group';
// My Component
import ChatMain from '../../../components/chat/ChatMain';
import ChatListComponent from '../../../components/chat/ChatListItem';
import FriendListDialog from '../../../components/chat/ChatFriendListDialog';


// チャット画面
export default class Chat extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showFriendListDialog: false,
			roomId: 0,
			rooms: {},
		}
		this.myUserId = 1;
	}

	componentWillMount() {
		this.fetchChatRooms();
	}

	closeChat = () => {
		this.setState({roomId: 0});
	}

	// チャットルームの一覧
	setRooms = (array) => {
		// 配列をオブジェクトに変換
		const object = _.mapKeys(array, room => {
			room['messages'] = [];
			room['opponent'] = this.findChatOpponentFromMembers(room.members);
			return room.room_id;
		})
		// console.log('chat room', object)
		this.setState({ rooms: object })
	}

	// チャットルームのメンバーから自分と相手を分ける
	findChatOpponentFromMembers = (members) => {
		if(members[0].user_id!=this.myUserId) {
			return members[0];
		}
		else {
			return members[1];
		}
	}

	// 表示するチャットルームのID
	setRoomId = (num) => {
		this.setState({ roomId: num });
	}

	// チャットルーム内にメッセージを追加
	setMessages = (roomId, messages) => {
		let rooms = this.state.rooms;
		rooms[roomId]['messages'] = messages;
		this.setState({ rooms: rooms });
	}

	// 友達一覧のダイアログを開く
	openFriendListDialog = () => {
		this.setState({ showFriendListDialog: true });
	};

	// 友達一覧のダイアログを閉じる
	closeFriendListDialog = () => {
		this.setState({ showFriendListDialog: false });
	};

	// チャットルームを選択する処理（画面サイズが md 以上の時）
	selectRoom = (id) => {
		this.fetchMessages(id);
		this.setRoomId(id);
	}

	// チャットルームを選択して、チャット画面を表示する（画面サイズが md 以下の時）
	selectRoomAndOpenChatMain = (id) => {
		this.selectRoom(id);
		this.setState({ showChatMainDialog: true });
	}

	// サーバーからチャットルームのリストを取ってくる
	fetchChatRooms = () => {
		api.get('room/', {
			params: {
				requestSenderUserId: this.myUserId,
			}
		}).then(response => {
			this.setRooms(response.data);
		})
	}

	querySnapshotToArray = (querySnapshot) => {
		let tmpArray = [];
		querySnapshot.forEach(doc => {
			tmpArray.push(doc.data());
		})
		return tmpArray
	}

	// Firebaseからメッセージを取ってくる
	fetchMessages = (roomId) => {
		const notFetched = this.state.rooms[roomId].messages.length === 0;
		console.log('notFetched', notFetched);

		if(notFetched) {
			const db = firebase.firestore();

			console.log("@".repeat(100));
			db.collection('/rooms/' + roomId + '/messages')
				.onSnapshot(querySnapshot => {
					const messages = this.querySnapshotToArray(querySnapshot);
					this.setRoomMessage(roomId, messages);
				})
		}
	}

	setRoomMessage = (roomId, messages) => {
		const { rooms } = this.state;

		rooms[roomId].messages = messages;
		this.setState({rooms: rooms})
	}


	renderCloseButton = () => {
		if (this.state.roomId!=0) {
			return (
				<Button color="default"
					onClick={this.closeChat}
				>
					<Grid item>
						<CloseIcon style={styles.buttonIconBlack}/>
						<p style={styles.buttonLabelBlack}>閉じる</p>
					</Grid>
				</Button>
			);
		}
	}

	// チャットルーム内のメッセージ
	roomMssages = (roomId) => {
		if(roomId != 0)
			return this.state.rooms[roomId].messages;
	}	

	render() {
		return (
			<Grid direction="row" className="chat-screen-contaienr">
				{/* 左端に固定したメニューバー */}
				<div className="chat-menu-container">
					<Button color="default" onClick={this.openFriendListDialog}>
						<Grid item>
							<GroupIcon style={styles.buttonIconRed}/>
							<p style={styles.buttonLabelRed}>友達</p>
						</Grid>
					</Button>
					<Button color="default">
						<Grid item>
							<GroupIcon style={styles.buttonIconBlue}/>
							<p style={styles.buttonLabelBlue}>契約中</p>
						</Grid>
					</Button>
					<Button color="default">
						<Grid item>
							<GroupIcon style={styles.buttonIconYellow}/>
							<p style={styles.buttonLabelYellow}>リクエスト</p>
						</Grid>
					</Button>
					<Button color="default">
						<Grid item>
							<GroupIcon style={styles.buttonIconGreen}/>
							<p style={styles.buttonLabelGreen}>メニュー</p>
						</Grid>
					</Button>
					{this.renderCloseButton()}
				</div>
				{/* 画面サイズがmd以下のとき非表示にするコンポーネント */}
				<Hidden mdDown>
					<div className="chat-list-container-half">
						<Grid direction="row" style={{backgroundColor: "#fff00ff"}}>						
							<Grid item>
								<ChatListComponent
									rooms={this.state.rooms}
									selectRoom={this.selectRoom}
								/>
							</Grid>
						</Grid>
					</div>
					<div className="chat-main-container">
						<ChatMain
							roomId={this.state.roomId}
							messages={this.roomMssages(this.state.roomId)}
							setMessages={this.setMessages}
							close={this.closeChat}
						/>
					</div>
				</Hidden>
				{/* 画面サイズがmd以上のとき表示するコンポーネント */}
				<Hidden mdUp>
					<div className="chat-list-container-wide">
						<Grid direction="row">
							<ChatListComponent
								rooms={this.state.rooms}
								selectRoom={this.selectRoomAndOpenChatMain}
							/>
						</Grid>
					</div>
					<Dialog
						aria-labelledby="customized-dialog-title"
						open={this.state.showChatMainDialog}
						onClose={() => this.setState({ showChatMainDialog: false })}
					>
					{/* <div className="chat-main-container">
						<ChatMain
							roomId={this.state.roomId}
							messages={this.roomMssages(this.state.roomId)}
							setMessages={this.setMessages}
							close={this.closeChat}
						/>
					</div> */}
				</Dialog>
				</Hidden>
				{/* ダイアログ */}
				<Dialog
					aria-labelledby="customized-dialog-title"
					open={this.state.showFriendListDialog}
					onClose={this.closeFriendListDialog}
				>
					<FriendListDialog
						close={this.closeFriendListDialog}
					/>
				</Dialog>
			</Grid>
		);
	}
}





const styles = {
	buttonIconRed: {
		color: "#ea4335",
		fontSize: 50,
		flexDirection: "col",
		width: "100%",
	},
	buttonIconBlue: {
		color: "#4285f4",
		fontSize: 50,
		flexDirection: "col",
		width: "100%",
	},
	buttonIconYellow: {
		color: "#fbbc05",
		fontSize: 50,
		flexDirection: "col",
		width: "100%",
	},
	buttonIconGreen: {
		color: "#34a853",
		fontSize: 50,
		flexDirection: "col",
		width: "100%",
	},
	buttonIconBlack: {
		color: "#282c34",
		fontSize: 50,
		flexDirection: "col",
		width: "100%",
	},
	buttonLabelRed: {
		color: "#ea4335",
		fontWeight: "bold",
	},
	buttonLabelBlue: {
		color: "#4285f4",
		fontWeight: "bold",
	},
	buttonLabelYellow: {
		color: "#fbbc05",
		fontWeight: "bold",
	},
	buttonLabelGreen: {
		color: "#34a853",
		fontWeight: "bold",
	},
	buttonLabelBlack: {
		color: "#282c34",
		fontWeight: "bold",
	}
}