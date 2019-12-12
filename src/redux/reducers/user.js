export const fetchMyData = (state={}, action) => {
	switch(action.type){
		case 'FETCH_MY_DATA':
			return action.payload;
		default:
			return state;
	}
}