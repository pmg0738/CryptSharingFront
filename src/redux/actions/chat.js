import _ from 'lodash';
import api from '../apis';
import firebase from 'firebase';


// 新規チャットルーム作成
export const createChatRoom = (opponentId) => async dispatch => { 
	// Django サーバーに作成
	const response = await api.post('chat/rooms/', {
		opponent_id: opponentId
	}).then(res => {
		const roomId = res.data.room_id;
		const members = res.data.members;
		// const db = firebase.firestore();

		const memberIds = members.map(m => m.user_id);
		
		console.log('res', res);
		console.log('roomId', roomId);
		console.log('memberIds', memberIds);

		// Firebase firestoreに作成
		// db.collection('/rooms').doc(String(roomId)).set({
		// 	members: memberIds,
		// }).then(response => console.log('firestore', response))
	})

	dispatch({ type: 'CREATE_CHAT_ROOM', payload: response.data });
	return response.data;
}


//  自分が属するチャットルームの一覧を取得
export const fetchChatRooms = () => async dispatch => {
	const response = await api.get('chat/rooms/');

	const rooms =  _.mapKeys(response.data, room => room.room_id)

	dispatch({ type: 'FETCH_CHAT_ROOMS', payload: rooms });
	return rooms;
}


// Firebaseからメッセージを取ってくる
const fetchMessages = roomId => async dispatch => {
	// const notFetched = this.state.rooms[roomId].messages.length === 0;

	// if(notFetched) {
		const db = firebase.firestore();
		let messages;

		const response = await db.collection('/rooms/' + roomId + '/messages')
			.onSnapshot(querySnapshot => {
				const messages = querySnapshotToArray(querySnapshot);
				// this.setRoomMessage(roomId, messages);
			})
		return response;
}


const querySnapshotToArray = (querySnapshot) => {
	let tmpArray = [];
	querySnapshot.forEach(doc => {
		tmpArray.push(doc.data());
	})
	return tmpArray
}