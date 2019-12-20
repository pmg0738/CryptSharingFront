import { combineReducers } from 'redux';
import getItemListReducer from './getItemListReducer';
import getClickedItemReducer from './getClickedItemReducer';
import {
	fetchMyData,
	fetchUser,
	fetchFollowers,
	fetchFollowings
} from './user';
import {
	fetchChatRooms,
	createChatRoom,
} from './chat';

export default combineReducers({
	items: getItemListReducer,
	item: getClickedItemReducer,
	me: fetchMyData,
	user: fetchUser,
	followings: fetchFollowings,
	followers: fetchFollowers,
	rooms: fetchChatRooms,
	newRoom: createChatRoom,
});