import axios from 'axios';
export const GET_ITEMS = 'GET_ITEMS'

const ROOT_URL = 'http://localhost:8000';
const QUERY = '';

export const getItems = () => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}/items/${QUERY}`)
    dispatch({ type: GET_ITEMS, response: response })
}
