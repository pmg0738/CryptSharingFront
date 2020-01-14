import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

// Material UI Component
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
// Material UI Icon
import AddIcon from '@material-ui/icons/Add';

import './style.scss';


export default class ChatList extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			rooms: this.props.rooms,
			inputtingMessage: '',
			selectedChatroom: '',
			me: {},
		}
	}

	setMyData = async () => {
		if(Object.keys(this.props.me).length===0) {
			this.props.fetchMyData()
				.then(response => this.setState({me: response}));
		} else {
			this.setState({ me: this.props.me });
		}
	}

	showSelectedChatRoom = (userId) =>{
		
	}

	// サーバーからチャットルームのリストをとってくる
	// fetchChatRooms = () => {
	// 	api.get('room/')
	// 		.then(response => {
	// 			this.setState({rooms: response.data.rooms});
	// 		})
	// }

	selectRoom = (id) => {
		// console.log('room id', id)
		this.props.selectRoom(id);
	}

	calcLastMessageSentTime = (date) => {
		const sentTimestamp = new Date(date).getTime();
		const nowTimestamp  = new Date().getTime();
		const diffMin = Math.floor((nowTimestamp - sentTimestamp) / 1000 / 60);

		if(diffMin < 1) {
			return "1分未満";
		}
		else if(diffMin < 60) {
			return `${diffMin}分前`;
		}
		else if(diffMin < 60*24) {
			return `${Math.floor(diffMin/60)}時間前`;
		}
		else {
			return `${Math.floor(diffMin/(60*24))}日前`;
		}
	}

	render(){
		// 表示するチャットルームがない場合
		if(this.props.rooms.length===0){
			return(
				<div className="chat-list-no-meesage-container">
					<p>NO MESSAGE</p>
					<Card className="add-chat-card"
						onClick={(res) => console.log(res)}
					>
						<h4 className="friend-card-name">メッセージを送る</h4>
						<Fab className={"a"} color="primary" aria-label="add">
							<AddIcon />
						</Fab>
					</Card>
				</div>
			)
		}
		else {
			return(
				<div>
					{
						_.map(this.props.rooms, room => {
							const index = room.members[0].user_id===this.state.me.user_id ? 1 : 0;
							const opponent = room.members[index];
							const lastMessage = room.last_message===null ? "No Message" : room.last_message.message;

							const lastMessageSentTime = (room.last_message===null ? "" :
								this.calcLastMessageSentTime(room.last_message.sent_date_time))

							return (
								<Card className="chat-friend-card" style={{borderRadius: 0}}
									onClick={() => this.selectRoom(room.room_id)}
									key={`room/${room.room_id}`}
								>
									<Link to={'users/' + opponent.user_id}>
										<img src={opponent.profile_image} alt="" className="friend-card-image"/>
									</Link>

									<h4 className="friend-card-name">
										{opponent.name}
									</h4>
									<h6 className="friend-card-last-message">{lastMessage}</h6>
									<h6 className="friend-card-last-message-date-time">{lastMessageSentTime}</h6>
								</Card>
							);
						})
					}
				</div>
			);
		}
	}
}
