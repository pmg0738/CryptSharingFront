import axios from 'axios';
import { API_ROOT } from '../../config.js';

export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM  = 'GET_ITEM';


export const getItems = () => async (dispatch) => {

    const response = await axios.get(API_ROOT + 'items/')

    dispatch({ type: GET_ITEMS, payload: { response: response } })
}


export const getItem = (id) => async (dispatch) => {

    const response = await axios.get(API_ROOT + 'items/' + id + '/')

    dispatch({ type: GET_ITEM, payload: { response: response } })
}