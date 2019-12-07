import { combineReducers } from 'redux';
import getItemListReducer from './getItemListReducer';
import getClickedItemReducer from './getClickedItemReducer';

export default combineReducers({
	items: getItemListReducer,
	item: getClickedItemReducer,
});