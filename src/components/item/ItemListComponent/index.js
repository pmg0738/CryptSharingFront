import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import './style.scss';

import { makeStyles } from '@material-ui/core/styles';
// Material UI Component
import Button from '@material-ui/core/Button';
// Material UI Layout
import Grid from '@material-ui/core/Grid';
// Material UI Icon
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
// My Component
import Pagination from '../../../components/common/Pagination';
import Item from '../ItemCard';


class ItemListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			searchWords: "",
		}
	}

	componentWillMount(){
		if(this.props.items.length <= 1){
			var searchWords = localStorage.getItem("search");
			this.setState({　searchWords: searchWords })
			this.props.fetchItems(searchWords ? searchWords : "");
		}
	}

	renderItems = () =>{
		return Object.keys(this.props.items).map(itemId => {
			const item = this.props.items[itemId]
			return(
				<Grid xs={12} sm={6} md={4} lg={3} key={itemId}>
					<Item
						itemId={itemId}
						to={'/items/' + itemId}
						image={item.images[0].url}
						price={item.fee_per_hour}
						// priceLabel={}
						likedNum={item.liked_num}
					/>
				</Grid>
			);
		})
	}

	render() {
		console.log(this.props.items);

		return (
			<Grid container>
				{this.renderItems()}
				 <Link to='/items/new/post'>
					<ItemPostButton/>
				</Link>
				<Grid container direction="row" justify="center">
					<Pagination numOfPage={2} handlePagination={this.handlePagination}/>
				</Grid>
			</Grid>
		);
	}
}

const useStyles = makeStyles({
	button: {
		background: 'linear-gradient(45deg, #886Dff 30%, #4285F4 90%)',
		border: 0,
		borderRadius: 60,
		boxShadow: '0 3px 5px 2px rgba(130, 105, 255, .3)',
		color: 'white',
		fontSize: 20,
		fontWeight: "bold",
		height: 120,
		width: 120,
		padding: '0 30px',
		position: "fixed",
		bottom: 50,
		right: 50,
	},
});


const ItemPostButton = () => {
	const classes = useStyles();

	return(
		<Button className={classes.button}>
			<Grid direction="row">
				<p className="item-list-add-button-label">出品する</p>
				<AddAPhotoIcon style={{fontSize: 45, marginTop: -10}}/>
			</Grid>
		</Button>
	);
}

const mapStateProps = (store) => {
	return {
		items: store.items,
		searchWords: store.searchWords,
	};
}

export default connect( mapStateProps, { fetchItems })(ItemListComponent);


