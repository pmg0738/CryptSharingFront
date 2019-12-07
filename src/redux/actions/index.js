import _ from 'lodash';
import apis from '../apis/apis';

export const fetchItems = () => async dispatch => {
	const response = await apis.get('/items/');

	// item の item_idをキーにするハッシュマップを作る
	// _.mapKeys([{id: 1}, {id: 2}], v => v.id);    // => { 1: {id: 1}, 2: {id: 2} }
	const items = _.mapKeys(response.data, item => {
		return item.item_id
	})

	dispatch({ type: 'FETCH_ITEMS', payload: items})
};

export const fetchClickedItem = (itemId) => async dispatch => {
	const response = await apis.get(`/items/${itemId}/`);
	dispatch({ type: 'FETCH_ITEM', payload: response.data})
	console.log('actionnnnnnnnnnnnn', response.data);
}