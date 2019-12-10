import _ from 'lodash';
import apis from '../apis/apis';
import axios from 'axios';

export const fetchItems = () => async dispatch => {
	const response = await apis.get('/items/', {
		headers: { 
			"Content-Type": "application/json",
			"Authorization": "Token df1729f871144bda4763278343d55668aee25064"
		},
		data: {}
	});
	// const response = axios.get('http://localhost:8000/api/v1/items/', {
	// 	headers: {
	// 			"Content-Type": "application/json",
	// 			"Authorization": "Token 8dea423faac532fe5ad7b0eb6ed70e3fc58e8dd3"
	// 		},
	// 		data: {}
	// })
	

	// item の item_idをキーにするハッシュマップを作る
	// _.mapKeys([{id: 1}, {id: 2}], v => v.id);    // => { 1: {id: 1}, 2: {id: 2} }
	const items = _.mapKeys(response.data, item => {
		return item.item_id
	}, {

	})

	dispatch({ type: 'FETCH_ITEMS', payload: items})
};

export const fetchClickedItem = (itemId) => async dispatch => {
	const response = await apis.get(`/items/${itemId}/`);
	dispatch({ type: 'FETCH_ITEM', payload: response.data})
	console.log('actionnnnnnnnnnnnn', response.data);
}