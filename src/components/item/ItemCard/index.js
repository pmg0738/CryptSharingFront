import React from 'react';
import api from '../../../redux/apis';

import { Link } from 'react-router-dom';

import './style.scss';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default class Item extends React.Component {
	state = {
		cardClassName: "item-list-item-card-out",
		priceClassName: "item-list-item-card-price-out",
		likedNum: this.props.likedNum
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

	onClickLikedButton = async () => {
		const token = localStorage.getItem("token");

		await api.patch('/item/' + this.props.itemId + '/unlike/', {
			headers: {
				"Authorization": "token 3fe13aa3ed3402536076ceff1b010a01fac51046",
				"Content-Type": "application/json",
				// "Authorization": "token " + token
			},
		}).then(response => {
			this.setState({ likedNum: response.data.liked_num });
		}).catch(error => {
			console.log('error', error);
		})
	}

	render() {
		return (
			<Card className="" style={{marginBottom: 30, position: "relative", marginLeft: 10, marginRight: 10}}>
				<Link to={this.props.to}>
					<CardMedia
						className=""
						image={this.props.image}
						title="Paella dish"
						style={{ height: 250 }}
					/>
				</Link>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites"
						onClick={this.onClickLikedButton}
					>
						<FavoriteIcon />
					</IconButton>
					<p className="item-num-of-good">{this.props.likedNum}</p>
				</CardActions>
				<p className="item-price">￥{this.props.price}/{this.props.priceLabel}</p>
			</Card>
		)
	}
}
