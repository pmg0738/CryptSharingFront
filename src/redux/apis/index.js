import axios from 'axios';


export default axios.create({
	baseURL: 'https://challecara-pok-2019.lolipop.io/api/v1/'
	// baseURL: 'http://localhost:8000/api/v1/'
})