import React from 'react';
// Redux
import { connect } from 'react-redux';
import { fetchClickedItem } from '../../../redux/actions';
// Ethereum
import { web3 } from '../../../ethereum/web3';
import { pay, showBalance } from '../../../ethereum/token';
import { createAccount, showMyAccount } from '../../../ethereum/account';
// Material UI Component
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
// Material UI Layout
import Grid from '@material-ui/core/Grid';
// Material UI Icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// Material UI
import { green, red, blue } from '@material-ui/core/colors';
import UserProfile from '../../../components/user/UserProfileComponent';


import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
import cat from '../../../images/cup.jpg';




class ItemDetail extends React.Component {
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
			itemDetailFavoriteIcon: "default",
			images: [],
			imageStartIndex: 0,
		}
		// this.state = {

		// 	me: {
		// 		id: "1234",
		// 		name: "yushi",
		// 		favoriteItemId:["2"],
		// 		usedHistoryItemId:["4"],
		// 		rentalItemId:["3"], 
		// 		requestItemId:["5","6","7","8"]
		// 	},
		// 	item: {
		// 		fee_per_hour: null,
		// 		fee_per_day: null,
		// 		fee_per_week: null,
		// 	},
		// }
		this.itemId = this.props.match.params.id;
		// this.item = this.props.item[this.itemId];
	}

	componentWillMount() {
		window.scrollTo(0, 0)

		const existInStore = this.props.items.hasOwnProperty(this.itemId);

		if(!existInStore) {
			const clickedItem = this.props.fetchClickedItem(this.itemId);
			this.setState({item: clickedItem});
		} else {
			console.log('already clicked item', this.props.item);
			const clickedItem = this.props.items[this.itemId];
			this.setState({item: clickedItem});
		}
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
	if((this.state.item.images) && (itemLendStatus)) {
		return <Image style={styles.selectedImage} src={this.state.item.images[0].url} />
	}
	if((this.state.item.images) && (!itemLendStatus)) {
		return <Image style={{width:"450px", height:"450px", marginBottom:"10px"}} src={this.state.item.images[0].url} />
	}
	return <div/>
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
				<TableCell key='hour_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>1時間</TableCell>
				<TableCell key='day_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>1日</TableCell>
				<TableCell key='week_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>1週間</TableCell>
				<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>担保</TableCell>
				<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>貸し出し</TableCell>
			</TableHead>
			<TableBody>
				<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{this.state.item.fee_per_hour}</TableCell>
				<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{this.state.item.fee_per_day}</TableCell>
				<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{this.state.item.fee_per_week}</TableCell>
				<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>￥{this.state.item.require_mortgage_amount}</TableCell>
				<TableCell align='center' style={{ fontSize:"17px", fontWeight:"900"}}>
					{this.showEmoticon(1)}
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

	render() {
		console.log('props', this.props.item);
		console.log('@'.repeat(100),this.state.item);
		return (
				<div>
					<Link to='/items'>
						<KeyboardBackspaceIcon style={{position:"fixed", color:blue[500], left:"30px",width:"50px", height:"50px"}}/>
					</Link>
					<Grid container>
						<Grid  sm={12} md={6} container direction="column" justify="center" alignItems="center" style={{}}>
							<div style={{ fontSize:"30px", fontWeight:"800", marginBottom:"20px"}}>{this.state.item.name}</div>
							{this.renderImage()}
							<Grid>
								<ArrowBackIosIcon style={{color: blue[500], width:"50px",height:"50px"}}/>
								{this.threeArray(this.props.images, this.props.imageStartIndex).map(image => 
									<img 
										className="item-detail-not-selected-pic" 
										src={image} 
										onClick={() => this.setState({selectedImage: image})}
									/>
								)}
								<ArrowForwardIosIcon style={{color: blue[500], width:"50px",height:"50px"}}/>
							</Grid>
						</Grid>
						<Grid container direction="column" sm={12} md={6} style={{backgroundColor:""}}>
							<Grid container direction="row" justify="flex-start" style={{marginBottom:"20px"}}>
								<UserProfile
									avatar={this.state.item.owner.profile_image}
									evaluation="4.5"
									name={this.state.item.owner.name}
									prefecture={this.state.item.owner.prefecture}
								/>
							</Grid>
							<div style={{ fontSize:"20px", fontWeight:"900", marginBottom:"10px"}}>料金</div>
							{this.renderFeeTable()}
							
							<TextField
								id="outlined-multiline-static"
								placeholder={"Air Jordan\nサイズ：29\n購入時価格：21600円"}
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
							<Link to='/request'>
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


const mapStateProps = (store) => {
	return { 
		items: store.items,
		item: store.item
	};
}

export default connect( mapStateProps, { fetchClickedItem })(ItemDetail);

const styles = {
	selectedImage: {
		width:"450px",
		height:"100px",
		marginBottom:"10px"
	}
}
