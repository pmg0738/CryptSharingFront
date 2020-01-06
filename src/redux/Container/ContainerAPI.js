import { Container } from 'unstated';
import api from '../../redux/apis';

class Category extends Container {
	state = {
		containers: []
	};

	getCurruntCategory = () =>{
		api.get('categories/', {

		})  
		this.setState()
	}

}