export default(state={}, action) => {
	switch(action.type){
		case 'FETCH_ITEM':
			return action.payload;
		default:
			return state;
	}
}