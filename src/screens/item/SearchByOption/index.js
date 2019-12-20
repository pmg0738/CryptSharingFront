import React from 'react';
import './style.scss';

import SearchByOptionComponent from '../../../components/item/SearchByOptionComponent';
import ItemListComponent from '../../../components/item/ItemListComponent';
import 'react-input-range/lib/css/index.css';

import Container from '@material-ui/core/Container';

export default class ItemFilterAndList extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			items: {},
			selectedCategory:"カテゴリー",
			periodVarientOneHour:"outline-primary", 
			periodVarientOneDay:"outline-success",
			periodStyle: '',
			priceValue: {min:0, max:3500},
			distance: {min:0, max:30},
		}
	}

	render() {
		return (
			<Container maxWidth="lg">
				<ItemListComponent/>
				<SearchByOptionComponent/>
			</Container>
		)
	}
}
