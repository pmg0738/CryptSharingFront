export default(state=[2], action) => {
	switch(action.type){
		case 'FETCH_REQUESTLIST':
			return action.payload;
		default:
			return state;
	}
}