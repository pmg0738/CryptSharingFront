import React from 'react';
import './style.scss';

import {
	Card,
	Container,
	Row,
	Col,
	Image,
} from 'react-bootstrap';

import cup from '../../../../images/cup.jpg';



export default class HistoryBooked extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: [
				{
					color: "red",
					image: cup,
					title: "スピーカ",
					status: 0,
				}, 
				{
					color: "yellow",
					image: cup,
					title: "キャップ",
					status: 1,
				}, 
				{
					color: "green",
					image: cup,
					title: "コップ",
					status: 1,
				}, 
			]
		}
	}

	render() {
		return (
			<Container>
				<Row>
					{this.state.items.map(item =>
						<Col xc={6} sm={6} md={4} lg={3}>
							<Card className="history-booked-item-card">
								<div className="history-booked-item-card-image-container">
									<Image src={item.image} className="history-booked-item-card-image"/>
									{[<div className="history-booked-item-card-image-smoke-not-available" />,<div/>][item.status]}
								</div>
								<p className={"history-booked-item-card-title-" + item.color}>{item.title}</p>
								{/* {this.renderRentaringMessage(!item.status)} */}
							</Card>
						</Col>
					)}
				</Row>
			</Container>
		)
	}
}

