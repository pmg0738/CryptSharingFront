import React from 'react';

// Material UI Component
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
// Material UI Layout
import Grid from '@material-ui/core/Grid';
// Material UI Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
// import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

// Material UI
import { green, red, blue, grey, teal} from '@material-ui/core/colors';
import UserProfile from '../../../components/user/UserProfileComponent';

import Faker from 'faker';

import {items} from '../../../datas/items';

import cup from '../../../images/cup.jpg';


import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

export default class ItemDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			item:{
				name: null,
				categories: null,
				fee_per_hour: null,
				fee_per_day: null,
				fee_per_week: null,
				require_mortgage_amount: null,
				owner: { 
					profile_image: null, 
				},
				images: null,
				liked_num: null,
			},
			curruntItem:{
				image: null,
				price: null,
				likeNum: null,
				category: null,
				name: null,
				tanpo: null,
				available: null,
			},
			itemDetailFavoriteIcon: "default",
			images: [],
			imageStartIndex: 0,
			itemNum: null,
		}
		
		this.itemId = this.props.match.params.id;
	}

	componentWillMount() {
		window.scrollTo(0, 0)
		var itemNum = String(window.location.href);
		console.log('url', itemNum.slice(28));
		this.setState({itemNum: itemNum.slice(28)});
		// console.log('item[1]', this.state.curruntItem);
		console.log('aaa', items[String(window.location.href).slice(28)]);
		this.setState({curruntItem: items[String(window.location.href).slice(28)]});
		console.log('state',this.state.curruntItem);


		// const existInStore = this.props.items.hasOwnProperty(this.itemId);

		// if(!existInStore) {
		// 	const clickedItem = this.props.fetchClickedItem(this.itemId);
		// 	this.setState({item: clickedItem});
		// } else {
		// 	console.log('already clicked item', this.props.item);
		// 	const clickedItem = this.props.items[this.itemId];
		// 	this.setState({item: clickedItem});
		// }
		console.log('faker@@@@@@@@@@',Faker);
	}

	threeArray = (array, index) => {
		let newArray = [];

		for(let i=index; i<index+3; i++){
			newArray.push(array[i])
		}
		return newArray;
	}

	backOneStep = () => {
		if(this.state.imageStartIndex>0){
			this.setState({imageStartIndex: this.state.imageStartIndex-1})
		}
	}

	forwardOneStep = () => {
		if(this.state.imageStartIndex+2<this.state.images.length-1){
			this.setState({imageStartIndex: this.state.imageStartIndex+1})
		}
	}



	renderImage = (itemLendStatus) => {

		return <Image src={this.state.curruntItem.image} style={{width:"450px", height:"450px", marginBottom:"10px"}}/>
		// if((this.state.item.images) && (itemLendStatus)) {
		// 	return <Image style={styles.selectedImage} src={Faker.image.cats} />
		// }
		// if((this.state.item.images) && (!itemLendStatus)) {
		// 	return <Image style={{width:"450px", height:"450px", marginBottom:"10px"}} src={Faker.image.cats} />
		// }
		// return <div/>
	}

	showEmoticon = (itemLendStatus) =>{
		if(itemLendStatus){			
			return <InsertEmoticonRoundedIcon style={{color:green[500], width:"40px", height:"40px"}}/>
		}else{
			return(
					<div>
						<SentimentVeryDissatisfiedRoundedIcon style={{color:red[500], width:"40px", height:"40px"}}/>
						<div style={{fontSize:"10px", opacity:"0.7"}}>12/25から可能</div>
					</div>
				)
		}
	}

	renderFeeTable = () => {	
		return (
				<Table stickyHeader aria-label="sticky table" style={{width:"450px", marginBottom:"10px"}}>
				<TableHead>
					<TableCell key='hour_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>1日</TableCell>
					<TableCell key='day_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>5日</TableCell>
					<TableCell key='week_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>1週間</TableCell>
					<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>担保</TableCell>
					<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>貸し出し</TableCell>
				</TableHead>
				<TableBody>
					<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{this.state.curruntItem.price}</TableCell>
					<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{(this.state.curruntItem.price)*5}</TableCell>
					<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{(this.state.curruntItem.price)*7}</TableCell>
					<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{this.state.curruntItem.tanpo}</TableCell>
					<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>
						{this.showEmoticon(this.state.curruntItem.available)}
					</TableCell>
				</TableBody>
				</Table>
		);
	}

	renderStar = (valueOfPostUser) =>{

		let FullStar = <StarIcon style={{color:"#FBBC05", marginTop:"10px"}}/>;
		let HalfStar = <StarHalfIcon style={{color:"#FBBC05", marginTop:"10px"}}/>;
		let EmptyStar = <StarBorderIcon style={{color:"#FBBC05", marginTop:"10px"}}/>;

		let starArray = [];

		while (starArray.length<5) {

			if(valueOfPostUser >= 1) {
				valueOfPostUser -= 1;
				starArray.push(FullStar);
			}

			else if(valueOfPostUser >= 0.5) {
				starArray.push(HalfStar);
				valueOfPostUser = 0;
			}

			else {
				starArray.push(EmptyStar);
			}
		}
		return starArray;
	}

	returnCategoryStyle = () =>{
		if(this.state.curruntItem.category === "スポーツ"){
			return(
			<div style={{marginBottom:"20px", marginLeft:"0px"}}>
				<Chip label={this.state.curruntItem.category} style={{backgroundColor:blue[300]}}/>
				<FavoriteIcon style={{marginLeft:"20px", marginRight:"5px"}}/>
				{this.state.curruntItem.likeNum}
			</div>
			);
		}
		if(this.state.curruntItem.category === "旅行"){
			return(
				<div style={{marginBottom:"20px", marginLeft:"0px"}}>
					<Chip label={this.state.curruntItem.category} style={{backgroundColor:green[200]}}/>
					<FavoriteIcon style={{marginLeft:"20px", marginRight:"5px"}}/>
					{this.state.curruntItem.likeNum}
				</div>
				);
		}
		if(this.state.curruntItem.category === "工具"){
			return(
				<div style={{marginBottom:"20px", marginLeft:"0px"}}>
					<Chip label={this.state.curruntItem.category} style={{backgroundColor:grey[400]}}/>
					<FavoriteIcon style={{marginLeft:"20px", marginRight:"5px"}}/>
					{this.state.curruntItem.likeNum}
				</div>
				);
		}
		if(this.state.curruntItem.category === "非日常品"){
			return(
				<div style={{marginBottom:"20px", marginLeft:"0px"}}>
					<Chip label={this.state.curruntItem.category} style={{backgroundColor:red[400]}}/>
					<FavoriteIcon style={{marginLeft:"20px", marginRight:"5px"}}/>
					{this.state.curruntItem.likeNum}
				</div>
				);
		}
		if(this.state.curruntItem.category === "ゲーム"){
			return(
				<div style={{marginBottom:"20px", marginLeft:"0px"}}>
					<Chip label={this.state.curruntItem.category} style={{backgroundColor:teal[600]}}/>
					<FavoriteIcon style={{marginLeft:"20px", marginRight:"5px"}}/>
					{this.state.curruntItem.likeNum}
				</div>
				);
		}
		if(this.state.curruntItem.category === "自転車"){
			return(
				<div style={{marginBottom:"20px", marginLeft:"0px"}}>
					<Chip label={this.state.curruntItem.category} style={{backgroundColor:teal[300]}}/>
					<FavoriteIcon style={{marginLeft:"20px", marginRight:"5px"}}/>
					{this.state.curruntItem.likeNum}
				</div>
				);
		}
		
	}

	render() {
		console.log('item[1]', this.state.curruntItem);
		return (
				<div>
					<Link to='/items'>
						{/* <KeyboardBackspaceIcon style={{position:"fixed", color:blue[500], left:"30px",width:"50px", height:"50px"}}/> */}
						<Button variant="contained" color="primary" href="#contained-buttons" style={{position:"fixed", left:"20px", top:"80px", width:"100px",height:"50px", fontSize:"20px"}}>戻る</Button>
					</Link>
					<Grid container>
						<Grid  sm={12} md={6} container direction="column" justify="center" alignItems="center" style={{}}>
							<div style={{ fontSize:"30px", fontWeight:"800", marginBottom:"10px"}}>
								{this.state.curruntItem.name}
							</div>
							{this.returnCategoryStyle()}
							{this.renderImage()}
							<Grid>
								{/* <ArrowBackIosIcon style={{color: blue[500], width:"50px",height:"50px"}}/>
								{this.threeArray(this.props.images, this.props.imageStartIndex).map(image => 
									<img 
										className="item-detail-not-selected-pic"
										// src={Object.values(this.state.curruntItem.image)}
										onClick={() => this.setState({selectedImage: image})}
										alt=""
									/>
								)}
								<ArrowForwardIosIcon style={{color: blue[500], width:"50px",height:"50px"}}/> */}
							</Grid>
						</Grid>
						<Grid container direction="column" sm={12} md={6} style={{backgroundColor:""}}>
							<Grid container direction="row" justify="flex-start" style={{marginBottom:"20px"}}>
								<UserProfile
									avatar={cup}
									evaluation="4.5"
									name="ekeda_eraiza"
									prefecture="福岡県"
								/>
							</Grid>
							<div style={{ fontSize:"20px", fontWeight:"900", marginBottom:"10px"}}>料金</div>
							{this.renderFeeTable()}
							
							<TextField
								id="outlined-multiline-static"
								value={"Air Jordan\n\nサイズ：29\n\n購入時価格：21600円"}
								disabled
								multiline
								rows="10"
								className="item-post-else-info"
								// placeholder=''
								margin="normal"
								variant="outlined"
								InputProps={{reaOnly:true}}
								style={{width:"500px"}}
							/>
							<Link to={'/request/' + this.state.itemNum}>
								<Button variant="contained" color="primary" style={{width:"500px", height:"80px", fontSize:"30px", fontWeight:"900"}}>
									リクエスト画面に進む
								</Button>
							</Link>
						</Grid>
					</Grid>
				</div>
		)
	}
}

const styles = {
	selectedImage: {
		width:"450px",
		height:"100px",
		marginBottom:"10px"
	}
}
