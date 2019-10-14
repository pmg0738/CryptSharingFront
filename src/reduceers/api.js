import _ from 'lodash'

import { 
    GET_ITEM,
    GET_ITEMS, 
    GET_ITEM_COUNT,
    GET_ITEM_IMAGES,
 } from '../actions/api';


export default (items={}, action) => {
    switch (action.type) {
        case GET_ITEM:
            const data = action.response.data;
            // console.log('data', data);
            items[data.item_uid] = data;
            return items;

        case GET_ITEMS:
            // console.log('response', action.response);
            return _.mapKeys(action.response.data.results, 'item_uid')

        case GET_ITEM_IMAGES:
            // console.log('images response', action.response);

            const itemId = action.response.itemId;
            // const data = action.response.data;
            // console.log('itemId', itemId);
            // console.log('items[itemId]', items[itemId]);
            // console.log('data', data);
            // console.log('11111 action.response.images', action.response.images);
            // console.log('22222 items[itemId]', items[itemId]);
            items[itemId].images = action.response.images;
            // console.log('@@@@@', items);
            // return action.response;
            return items;

        case GET_ITEM_COUNT:
            return action.response;

        default:
            return items;
    }
}