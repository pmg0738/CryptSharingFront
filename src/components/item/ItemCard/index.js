import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default class Item extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// cardClassName: "item-list-item-card-out",
			// priceClassName: "item-list-item-card-price-out",
			numOfLike: 2298,
		}
		// this.data = this.props.data;
		this.image = "";
		// this.image = this.data.images.length!=0 ? this.data.images[0].url:"";
	}

	handleMouseOver = () => {
		this.setState({
			cardClassName: "item-list-item-card-over",
			priceClassName: "item-list-item-card-price-over"
		})
	}

	handleMouseOut = () => {
		this.setState({
			cardClassName: "item-list-item-card-out",
			priceClassName: "item-list-item-card-price-out"
		})
	}

	getItemDetail = () => {
		// this.props.getItem(this.props.id)
	}
	render() {
		return (
		 <Link to={this.props.to}>
			<Card className="" style={{marginBottom: 30, position: "relative", marginLeft: 10, marginRight: 10}}>
				<CardMedia
					className=""
					image={this.props.image}
					title="Paella dish"
					style={{ height: 250 }}
				/>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites"
						onClick={() => this.setState({numOfGood: this.state.numOfGood+1})}
					>
						<FavoriteIcon />
					</IconButton>
					<p className="item-num-of-good">{this.state.numOfLike}</p>
				</CardActions>
				<p className="item-price">￥{this.props.price}/h</p>                
			</Card>
		</Link>
		)
	}
}
