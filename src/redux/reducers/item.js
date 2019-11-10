import _ from 'lodash';
import { GET_ITEMS, GET_ITEM } from '../actions/items'

export const itemReducer = (items = {}, action) => {
    switch(action.type) {
        case GET_ITEMS:
            return _.mapKeys(action.payload.response.data, 'item_id');

        case GET_ITEM:
            return action.payload.response.data;
        
        default:
            return items;
    }
}
