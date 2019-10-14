import axios from 'axios';

export const GET_ITEM  = 'GET_ITEM';
export const GET_ITEMS = 'GET_ITEMS';
export const GET_ITEM_IMAGES = 'GET_IEM_IMAGES';
export const GET_ITEM_COUNT = 'GET_ITEM_COUNT';

const ROOT_URL = 'http://localhost:8000';


export const getItems = (page) => async (dispatch) => {
    let query = ''    
    if (page!=1) { query = `?page=${page}` }    

    const response = await axios.get(`${ROOT_URL}/items/${query}`)
    dispatch({ type: GET_ITEMS, response: response })
}


export const getItem = (id) => async (dispatch) => {
    const response = await axios.get(`${ROOT_URL}/items/${id}`)
    dispatch({ type: GET_ITEM, response: response })
}


export const getItemImages = (itemId, imageIds) => async (dispatch) => {
    // const ids = [1, 2]
    let images = [];
    for(let i=0; i<imageIds.length; i++){
        const response = await axios.get(`${ROOT_URL}/items/images/${imageIds[i]}`);
        await images.push(response.data.image);
    }
    dispatch({type: GET_ITEM_IMAGES, response: { images: images, itemId: itemId } });
    // return images;
}


export const getItemCount = () => async (dispatch) => {
    const count = await axios.get(`${ROOT_URL}/items/count/`)
    dispatch({ type: GET_ITEMS, response: count })
}