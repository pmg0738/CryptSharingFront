import _ from 'lodash';
import apis from '../apis';

export const fetchRequestList = () => async dispatch => {

    const response = await apis.get('requests/');
    dispatch({ type: 'FETCH_REQUESTLIST', payload: response});
    console.log('request response', response);
    return response.data;
};
