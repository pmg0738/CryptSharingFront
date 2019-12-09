import { Container } from 'unstated';
import axios from 'axios';

class Category extends Container {
	state = {
		containers: []
	};

	getCurruntCategory = () =>{
		axios.get('https://challecara-pok-2019.lolipop.io/api/v1/categories/', {

		})  
		this.setState()
	}

}