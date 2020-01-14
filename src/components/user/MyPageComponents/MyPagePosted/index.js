import React from 'react';
import './style.scss';

import Item from '../../../item/ItemCard';
import cup from '../../../../images/carry_bag.jpg';

export default class MyPagePosted extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: [],
		}
	}

	componentWillMount() {
		this.getPostedItems();
	}

	getPostedItems = () => {

	}


	render() {
		// const { items } = this.state;
		
		return (
			<Item
				to={'/itmes/' + 5}
				image={cup}
				pricePerHour={10}
			/>
			// <Container>
			// 	<Row>
			// 	{Object.keys(items).map((id) =>
			// 		<Col xc={6} sm={6} md={4} lg={4}>
			// 			<Item 
			// 				to={'/items/' + id}
			// 				image={items[id].image}
			// 				pricePerHour={items[id].price}
			// 				status={1}
			// 			/>
			// 		</Col>
			// 	)}
			// 	</Row>
			// </Container>
		)
	}
}

