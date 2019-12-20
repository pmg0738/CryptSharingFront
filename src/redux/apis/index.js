import axios from 'axios';


export default axios.create({
	baseURL: 'https://challecara-pok-2019.lolipop.io/api/v1/',
	// baseURL: 'http://localhost:8000/api/v1/',
	headers: { 
		"Content-Type": "application/json",
		// "Authorization": "Token " + localStorage.getItem("token")
		"authorization": "Token " + "d8965778288e2e5318e4139870e8d67cbf10361d"
	},
})