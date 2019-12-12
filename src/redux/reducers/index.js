import { combineReducers } from 'redux';
import getItemListReducer from './getItemListReducer';
import getClickedItemReducer from './getClickedItemReducer';
import { fetchMyData } from './user';

export default combineReducers({
	items: getItemListReducer,
	item: getClickedItemReducer,
	me: fetchMyData,
});