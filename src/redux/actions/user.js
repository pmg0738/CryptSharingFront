import _ from 'lodash';
import apis from '../apis';

// 自分のプロフィールを取得
export const fetchMyData = () => async dispatch => {

	const response = await apis.get('users/me/');
	dispatch({ type: 'FETCH_MY_DATA', payload: response.data });

	return response.data;
};


// 1人のユーザーの詳細情報を取得 UserDetail
export const fetchUser = (userId) => async dispatch => {

	const response = await apis.get(`users/${userId}/`);
	dispatch({ type: 'FETCH_USER', payload: response.data});

	return response.data;
}


// フォロー中ののユーザーの一覧を取得
export const fetchFollowings = (userId) => async dispatch => {
	
	const response = await apis.get('users/following/');
	dispatch({ type: 'FETCH_FOLLOWING_USERS', payload: response.data});

	return response.data;
}


// フォロワーののユーザーの一覧を取得
export const fetchFollowers = (userId) => async dispatch => {
	
	const response = await apis.get('users/follower/');
	dispatch({ type: 'FETCH_FOLLOWERS', payload: response.data});

	return response.data;
}