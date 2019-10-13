import _ from 'lodash'

import { GET_ITEMS } from '../actions/api';


export default (items={}, action) => {
    switch (action.type) {
        case GET_ITEMS:
            console.log('response', action.response);
            return _.mapKeys(action.response.data, 'item_uid');

        default:
            return items;
    }
}