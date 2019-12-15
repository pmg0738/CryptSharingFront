import React from 'react';
import './style.scss';

import SearchByOptionComponent from '../../../components/item/SearchByOptionComponent';
import ItemListComponent from '../../../components/item/ItemListComponent';
import 'react-input-range/lib/css/index.css';



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
			<div className="search-by-option-container">
				<div className="search-by-option-search-form">
					<SearchByOptionComponent/>
				</div>
				<div className="search-by-option-item-list-component">
					<ItemListComponent/>
				</div>
			</div>
		)
	}
}
