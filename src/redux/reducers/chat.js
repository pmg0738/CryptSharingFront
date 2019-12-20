export const createChatRoom = (state={}, action) => {
	switch(action.type){
		case 'CREATE_CHAT_ROOM':
			return action.payload;
		default:
			return state;
	}
}

export const fetchChatRooms = (state={}, action) => {
	switch(action.type){
		case 'FETCH_CHAT_ROOMS':
			return action.payload;
		default:
			return state;
	}
}


export const fetchMessages = (state={}, action) => {
	switch(action.type){
		case 'FETCH_MESSAGES':
			return action.payload;
		default:
			return state;
	}
}