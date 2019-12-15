import React from 'react';
import api from '../../../redux/apis';
import _ from 'lodash';

// Material UI Component
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
// Material UI Icon
import AddIcon from '@material-ui/icons/Add';

import './style.scss';


export default class ChatListComponent extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			rooms: this.props.rooms,
			inputtingMessage: '',
			selectedChatroom: '',
		}
	}

	componentWillMount() {
		this.fetchChatRooms();
	}

	showSelectedChatRoom = (userId) =>{
		
	}

	// サーバーからチャットルームのリストをとってくる
	fetchChatRooms = () => {
		api.get('room/')
			.then(response => {
				this.setState({rooms: response.data.rooms});
			})
	}

	selectRoom = (id) => {
		// console.log('room id', id)
		this.props.selectRoom(id);
	}

	render(){
		// 表示するチャットルームがない場合
		if(this.props.rooms.length==0){
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
							const opponent = room.opponent;

							return (
								<Card className="chat-friend-card"
									onClick={() => this.selectRoom(room.room_id)}
								>
									<img src={opponent.profile_image} className="friend-card-image"/>
									<h4 className="friend-card-name">
										{opponent.full_name}
									</h4>
									<h6 className="friend-card-last-message">{room.lastMessage}</h6>
									<h6 className="friend-card-last-message-date-time">5分前</h6>
								</Card>
							);
						})
					}
				</div>
			);
		}
	}
}