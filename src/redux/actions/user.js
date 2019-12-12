import _ from 'lodash';
// import apis from '../apis/apis';
import axios from 'axios';

// 自分のプロフィールを取得
export const fetchMyData = () => async dispatch => {
	// ローカルストレージに保存したトークンを取得する
	var token = localStorage.getItem("token");

	// const response = await apis.get('/users/me/', {
	const response = await axios.get('http://localhost:8000/api/v1/users/me/', {
		headers: { 
			"Content-Type": "application/json",
			"Authorization": "Token " + token
		},
		data: {}
	});	

	dispatch({ type: 'FETCH_MY_DATA', payload: response.data })
	return response.data;
};

// export const fetchClickedItem = (itemId) => async dispatch => {
// 	const response = await apis.get(`/items/${itemId}/`);
// 	dispatch({ type: 'FETCH_ITEM', payload: response.data})
// }