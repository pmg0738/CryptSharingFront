import React from 'react';
import './style.scss';
import {
	Container,
	Row,
	Col,
  } from 'react-bootstrap';

import Item from '../../../item/ItemCard';


export default class MyPageFavorite extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: [],
		}
	}

	componentWillMount() {
		this.getFavoriteItems();
	}

	getFavoriteItems = () => {

	}

	render() {
		const { items } = this.state;
		// const items = this.state.items;

		return (
			<Container>
				<Row>
					{Object.keys(items).map((id) =>
						<Col xc={6} sm={6} md={4} lg={4}>
							<Item 
								to={'/items/' + id}
								image={items[id].image}
								pricePerHour={items[id].price}
								status={1}
							/>
						</Col>
					)}
				</Row>
			</Container>
		)
	}
}
