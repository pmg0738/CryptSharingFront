import _ from 'lodash';
import apis from '../apis';


// 商品の一覧を取得 ItemList
export const fetchItems = (searchWord) => async dispatch => {
	// ローカルストレージに保存したトークンを取得する
	const token = localStorage.getItem("token");

	const response = await apis.get('items/', {
		// params: {
		// 	name: searchWord,
		// },
		headers: { 
			"Content-Type": "application/json",
			"Authorization": "Token " + token
		},
		data: {}
	});	
	// item の item_idをキーにするハッシュマップを作る
	// _.mapKeys([{id: 1}, {id: 2}], v => v.id);    // => { 1: {id: 1}, 2: {id: 2} }
	const items = _.mapKeys(response.data, item => {
		return item.item_id
	}, {

	})
	dispatch({ type: 'FETCH_ITEMS', payload: items})
};



// 1つの商品の詳細情報を取得 ItemDetail
export const fetchClickedItem = (itemId) => async dispatch => {

	const token = localStorage.getItem("token");
	
	const response = await apis.get(`items/${itemId}/`, {
		headers: { 
			"Content-Type": "application/json",
			"Authorization": "Token " + token
		},
		data: {},
	});

	dispatch({ type: 'FETCH_ITEM', payload: response.data})
}