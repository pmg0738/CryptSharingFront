import axios from 'axios';


export default axios.create({
	baseURL: 'https://challecara-pok-2019.lolipop.io/api/v1/',
	// baseURL: 'http://localhost:8000/api/v1/',
	headers: { 
		"Content-Type": "application/json",
		// "Authorization": "Token " + localStorage.getItem("token")
		"authorization": "Token " + "947bb79f0cfff96f7bedb13d34f9c2393aa23dce"
	},
})