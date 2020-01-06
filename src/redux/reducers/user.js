export const fetchMyData = (state={}, action) => {
	switch(action.type){
		case 'FETCH_MY_DATA':
			return action.payload;
		default:
			return state;
	}
}


export const fetchUser = (state={}, action) => {
	switch(action.type){
		case 'FETCH_USER':
			return action.payload;
		default:
			return state;
	}
}


export const fetchFollowings = (state=[], action) => {
	switch(action.type){
		case 'FETCH_FOLLOWING_USERS':
			return action.payload;
		default:
			return state;
	}
}

export const fetchFollowers = (state=[], action) => {
	switch(action.type){
		case 'FETCH_FOLLOWERS':
			return action.payload;
		default:
			return state;
	}
}