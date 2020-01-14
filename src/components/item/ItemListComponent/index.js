import React from 'react';
// import { fetchItems } from '../../../redux/actions';
import { Link } from 'react-router-dom';
import './style.scss';
// import Faker from 'faker';

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

import {items} from '../../../datas/items';


export default class ItemListComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: items,
			searchWords: "",
			itemNum :100,
		}
		console.log('@@@@@@@@@@@@@@@@@@@',this.state.items);
		console.log('objectkey', Object.values(this.state.items)[2].likeNum);
	}

	// componentWillMount(){
	// 	if(this.props.items.length <= 1){
	// 		var searchWords = localStorage.getItem("search");
	// 		this.setState({　searchWords: searchWords })
	// 		this.props.fetchItems(searchWords ? searchWords : "");
	// 	}
	// }


	renderItems = () =>{
		return Object.keys(this.state.items).map(itemId => {
			const item = this.state.items[itemId];
			console.log('itemnum',itemId);
			console.log(`asap${itemId}`, item);
			console.log(`image${itemId}`, Object.values(item.image));
					return(
						<Grid xs={12} sm={6} md={4} lg={3}>
							<Item
								itemId={itemId}
								to={'/items/' + itemId}
								image={Object.values(item.image)}
								price={item.price}
								likeNum={item.likeNum}
							/>
						</Grid>
					);
		})
	}

	render() {
		return (
			<Grid container>
				<Grid container direction="row" aliginItems="center" style={{marginTop:"40px"}}>
					{this.renderItems()}
				</Grid>
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

// const items = {
//     1:{
//         image:{basketball},
//         likeNum:67,
//         price: 10,
//     },
//     2:{
//         image:{basketball10},
//         likeNum:91,
//         price: 50,
//     },
//     3:{
//         image:{bicycle},
//         likeNum:23,
//         price:50,
//     },
//     4:{
//         image:{camp},
//         likeNum:102,
//         price: 200,
//     },
//     5:{
//         image:{carry_bag},
//         likeNum:399,
//         price: 50,
//     },
//     6:{
//         image:{drill},
//         likeNum:420,
//         price:50,
//     },
//     7:{
//         image:{ski7},
//         likeNum:47,
//         price: 100,
//     },
//     8:{
//         image:{soccer},
//         likeNum:10,
//         price: 50,
//     },
//     9:{
//         image:{speaker},
//         likeNum:233,
//         price:30,
//     },
//     10:{
//         image:{suit},
//         likeNum:77,
//         price: 100,
//     },
//     11:{
//         image:{switch2},
//         likeNum:729,
//         price: 50,
//     },
//     12:{
//         image:{christmas},
//         likeNum:8989,
//         price:500,
//     },
// }