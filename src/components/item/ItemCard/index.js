import React from 'react';

// import faker from 'faker';

import { Link } from 'react-router-dom';

import './style.scss';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';



export default class ItemCard extends React.Component {
	state = {
		cardClassName: "item-list-item-card-out",
		priceClassName: "item-list-item-card-price-out",
		likedNum: this.props.likedNum,
		liked: false,
		me: { likedItems: []　},
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

	// onClickLikedButton = async () => {
	// 	await api.post('/items/' + this.props.itemId + '/like/', {
	// 	}).then(response => {
	// 		this.setState({
	// 			likedNum: response.data.liked_num,
	// 			liked: response.data.liked
	// 		});
	// 	}).catch(error => {
	// 		console.log('error', error);
	// 	})
	// }

	render() {
		return (
			<Card className="" style={{marginBottom: 30, position: "relative", marginLeft: 10, marginRight: 10}}>
				<Link to={this.props.to}>
					<CardMedia
						className=""
						image={this.props.image}
						style={{ height: 250 }}
					/>
				</Link>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites"
						style={this.props.liked ? styles.likedIcon : styles.notLikedIcon}
						onClick={this.onClickLikedButton}
					>
						<FavoriteIcon />
					</IconButton>
					<p className="item-num-of-good">{this.props.likeNum}</p>
				</CardActions>
				<p className="item-price">￥{this.props.price}/Day</p>
			</Card>
		)
	}
}


const styles = {
	likedIcon: {
		color: "#ff6967",
	},
	notLikedIcon: {
		color: "#999999",
	}
}


