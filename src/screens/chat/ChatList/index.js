import React from 'react';

// import firebase from 'firebase';
import _ from 'lodash';
import './style.scss';

// Material UI Component
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// Material UI Layout
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// Material UI Icon
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import CloseIcon from '@material-ui/icons/Close';

// My Component
import ChatAddButton  from '../../../components/chat/ChatAddButton';
import ChatMain from '../../../components/chat/ChatMain';
import ChatListComponent from '../../../components/chat/ChatListItem';
import UserListDialog from '../../../components/user/UserListDialog';


// チャット画面
export default class Chat extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showFollowerDialog: false,
			roomId: 0,
			rooms: {},
			me: {},
			followings: [],
			followers: [],
		}
		this.myUserId = 1;
	}

	componentWillMount() {
		this.setChatRooms();
		this.setMyData();
	}

	// createRoom = (opponentId) => {
	// 	// Django サーバーに作成
	// 	api.post('chat/rooms/', {
	// 		opponent_id: opponentId
	// 	}).then(res => {
	// 		const roomId = res.data.room_id;
	// 		const members = res.data.members;
	// 		// const db = firebase.firestore();

	// 		const memberIds = members.map(m => m.user_id);

	// 		console.log('res', res);
	// 		console.log('roomId', roomId);
	// 		console.log('memberIds', memberIds);

	// 		// Firebase firestoreに作成
	// 		// db.collection('/rooms').doc(String(roomId)).set({
	// 		// 	members: memberIds,
	// 		// }).then(response => console.log('firestore', response))
	// 	})
	// }

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
		if(members[0].user_id!==this.myUserId) {
			return members[0];
		}
		else {
			return members[1];
		}
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

	// querySnapshotToArray = (querySnapshot) => {
	// 	let tmpArray = [];
	// 	querySnapshot.forEach(doc => {
	// 		tmpArray.push(doc.data());
	// 	})
	// 	return tmpArray
	// }

	// // Firebaseからメッセージを取ってくる
	// fetchMessages = (roomId) => {
	// 	console.log('this.state.rooms', this.state.rooms);
	// 	const notFetched = this.state.rooms[roomId].messages.length === 0;

	// 	if(notFetched) {
	// 		const db = firebase.firestore();

	// 		db.collection('/rooms/' + roomId + '/messages')
	// 			.onSnapshot(querySnapshot => {
	// 				const messages = this.querySnapshotToArray(querySnapshot);
	// 				this.setRoomMessage(roomId, messages);
	// 			})
	// 	}
	// }

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

	setRoomMessage = (roomId, messages) => {
		const { rooms } = this.state;

		rooms[roomId].messages = messages;
		this.setState({rooms: rooms})
	}

	// TODO: setStateは成功しているが、リアルタイムで更新されない
	//Djangoに送信後、最新メッセージをフロントのみで更新する
	setRoomLastMessage = (roomId, message, sentDateTime) => {
		const { rooms } = this.state;

		rooms[roomId]['last_message'] = {
			message: message,
			sent_date_time: sentDateTime,
		};
		this.setState({rooms: rooms});
		this.render();
	}


	renderCloseButton = () => {
		if (this.state.roomId!==0) {
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
		if(roomId !== 0)
			return this.state.rooms[roomId].messages;
	}

	setMyData = async () => {
		// if(Object.keys(this.props.me).length==0) {
		// 	this.props.fetchMyData()
		// 		.then(response => this.setState({me: response}));
		// } else {
		// 	this.setState({ me: this.props.me });
		// }
	}

	// チャットルームのデータをstateに保存
	setChatRooms = async () => {
		// this.props.fetchChatRooms()
		// 	.then(rooms => this.setState({rooms: rooms}))
	}

	// フォロワーボタンをクリックした時の処理
	onClickFollower = () => {
		// this.props.fetchFollowers()
		// 	.then(users => {
		// 		this.setState({ followers: users, showFollowerDialog: true });
		// 	});
	}

	// フォロー中のボタンをクリックした時の処理
	onClickFollowing = () => {
		// this.props.fetchFollowings()
		// 	.then(users => {
		// 		this.setState({ followings: users, showFollowingDialog : true });
		// 	});
	}

	onClickContractingDialog = () => {
		// this.props.fetchFollowers()
		// 	.then(users => {
		// 		this.setState({ followers: users, showContractingDialog: true });
		// 	});
	}

	onClickContractedDialog = () => {
		// this.props.fetchFollowings()
		// 	.then(users => {
		// 		this.setState({ followings: users, showContractedDialog : true });
		// 	});
	}

	onClickRequestedDialog = () => {
		// this.props.fetchFollowers()
		// 	.then(users => {
		// 		this.setState({ followers: users, showRequestedDialog: true });
		// 	});
	}




	render() {
		console.log('this.state.rooms', this.state.rooms);
		return (
			<Grid direction="row" className="chat-screen-contaienr">
				<Hidden mdDown>
					<div className="chat-list-container-half">
						<Grid direction="row" style={{backgroundColor: "#fff00ff"}}>
							<Grid item>
								<ChatListComponent
									rooms={this.state.rooms}
									selectRoom={this.selectRoom}
								/>
							</Grid>
							<ChatAddButton
								openFollowerDialog={this.onClickFollower}
								openFollowingDialog={this.onClickFollowing}
								createRoom={this.createRoom}
							/>
						</Grid>
					</div>
					<div className="chat-main-container">
						<ChatMain
							roomId={this.state.roomId}
							setRoomLastMessage={this.setRoomLastMessage}
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
				</Dialog>
				</Hidden>
				<UserListDialog
					title="フォロワー"
					show={this.state.showFollowerDialog}
					users={this.state.followers}
					close={() => this.setState({ showFollowerDialog: false })}
				/>
				<UserListDialog
					title="フォロー"
					show={this.state.showFollowingDialog}
					users={this.state.followings}
					close={() => this.setState({ showFollowingDialog: false })}
				/>
				<UserListDialog
					title="取引中のユーザー"
					show={this.state.showContractingDialog}
					users={[]}
					close={() => this.setState({ showContractingDialog: false })}
				/>
				<UserListDialog
					title="過去に取引したユーザー"
					show={this.state.showContractedDialog}
					users={[]}
					close={() => this.setState({ showContractedDialog: false })}
				/>
				<UserListDialog
					title="リクエストしたユーザー"
					show={this.state.showRequestedDialog}
					users={[]}
					close={() => this.setState({ showRequestedDialog: false })}
				/>
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

		fontWeight: "bold",
	}
}