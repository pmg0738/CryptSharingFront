import React from 'react';
// Redux
import { connect } from 'react-redux';
import { fetchClickedItem } from '../../../redux/actions';
// Ethereum
import { web3 } from '../../../ethereum';
import { pay, showBalance } from '../../../ethereum/token';
import { createAccount, showAccounts } from '../../../ethereum/account';
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

import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
import cat from '../../../images/cup.jpg';




class ItemDetail extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			itemDetailFavoriteIcon: "default",
			images: [],
			imageStartIndex: 0,
			me: {
				id: "1234",
				name: "yushi",
				favoriteItemId:["2"],
				usedHistoryItemId:["4"],
				rentalItemId:["3"], 
				requestItemId:["5","6","7","8"]
			},
		}
		this.itemId = this.props.match.params.id;
		// this.item = this.props.item[this.itemId];
	}

	componentWillMount() {
		// createAccount("password");
		// console.log('response', response);

		// pay("0x2e993dcfB0108C875268585f19235C9671B4Da77", 1000);
		showBalance();

		showAccounts();
		// console.log(web3.currentProvider.isMetaMask);
		// console.log('web3', web3);
		// console.log('web3', web3.version);
		// web3.eth.getAccounts()
		// 	.then(res => console.log('res', res));


		// web3.eth.getBlockNumber()
		// 	.then(result => {
		// 		console.log("last block number: ", result);
		// 	});

		// web3.eth.getBlock("latest")
		// 	.then(result => {
		// 		console.log("last block: ", result);
		// 	});


		window.scrollTo(0, 0)
		// this.props.fetchClickedItem(this.itemId);

		const existInStore = Object.keys(this.props.item).indexOf(this.itemId) !== -1;
		// existInStore = this.props.items.hasOwnProperty(this.itemId);
		if(!existInStore){
			this.props.fetchClickedItem(this.itemId);
		}else{
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


	handleFavoriteButtonClassName = (favorite) => {
		this.setState({itemDetailFavoriteIconClassName: favorite ? "item-liked": "default" })
	}

	clickFavoriteButton = () => {
		const favoriteItemId = this.state.me.favoriteItemId;

		const itemId = this.state.item.id;

		const favorite = favoriteItemId.indexOf(itemId) >= 0;

		if(favorite) {
			const index = favoriteItemId.indexOf(itemId);
			delete favoriteItemId[index];
		}
		else {
			favoriteItemId.push(itemId);
		}
		
		const { me } = this.state;
		this.setState({
			me: {
				id: me.id,
				name: me.name,
				usedHistoryItemId: me.usedHistoryItemId,
				rentalItemId: me.rentalItemId,
				requestItemId: me.requestItemId,
				favoriteItemId: favoriteItemId // ここだけ更新
			}
		})
		// ボタンのデザインを変える
		this.handleFavoriteButtonClassName(!favorite)
	}

	renderButton = () => {
		const isMine =　false;
		const favorite = true;
		const usedHistory = true;
		const rentaling = true;

		if(isMine) {
			return (
				<div>
					<Link to='/items/new/post'>
						<p><Button className="item-detail-edit">編集</Button></p>
					</Link>
					<Link to='/items/new/post'>    
						<p><Button className="item-detail-delete">削除</Button></p>
					</Link>
				</div>
			)
		}
		else if(favorite) {
			return (
				<Link to='/request'>
					<Button className="item-detail-goto-request">借りる</Button>
				</Link>
			)
		}

		else if(usedHistory) {
			return (
				<div>
					<p>
						使用期間：2019年5月20日～2019年5月25日
					</p>
					<Link to='/request'>
						<Button className="item-detail-goto-request">借りる</Button>
					</Link>
				</div>
			)
		}
		else if(rentaling) {
			return (
				<div className = "item-detail-rent-now">レンタル中です</div>
			)
		}
		else {
			return (
				<Button >リクエストを取り消す</Button>
			)
		}

	return (
		<Link to='/request'>
			<Button className="item-detail-goto-request">借りる</Button>
		</Link>
	)
}

renderImage = (itemLendStatus) => {
	if((this.props.item.images) && (itemLendStatus)) {
		return <Image style={styles.selectedImage} src={this.props.item.images[0].url} />
	}
	if((this.props.item.images) && (!itemLendStatus)) {
		return <Image style={{width:"450px", height:"450px", marginBottom:"10px"}} src={this.props.item.images[0].url} />
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
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥{this.props.item.fee_per_hour}</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥{this.props.item.fee_per_day}</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥500</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥2000</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
					{this.showEmoticon(0)}
					{/* <InsertEmoticonRoundedIcon style={{color:green[500], width:"40px", height:"40px"}}/> */}
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
		return (
				<div>
					<Link to='/items'>
						<KeyboardBackspaceIcon style={{position:"fixed", color:blue[500], left:"30px",width:"50px", height:"50px"}}/>
					</Link>
					<Grid container>
						<Grid  sm={12} md={6} container direction="column" justify="center" alignItems="center" style={{}}>
							{this.renderImage()}
							<Grid>
								<ArrowBackIosIcon style={{color: blue[500], width:"50px",height:"50px"}}/>
								{this.threeArray(this.state.images, this.state.imageStartIndex).map(image => 
									<img 
										className="item-detail-not-selected-pic" 
										src={image} 
										onClick={() => this.setState({selectedImage: image})}
									/>
								)}
								<ArrowForwardIosIcon style={{color: blue[500], width:"50px",height:"50px"}}/>
							</Grid>
						</Grid>
						<Grid sm={12} md={6} style={{backgroundColor:""}}>
							<Grid container direction="row" justify="flex-start" style={{marginBottom:"20px"}}>
								<Avatar src={cat} style={{width:"45px", height:"45px"}}/>
								<div style={{fontSize:"20px", color:"white", margin:"7px"}}>upallnight0738</div>
								{this.renderStar(2.5)}
							</Grid>
							<div style={{color:"white", fontSize:"20px", fontWeight:"900", marginBottom:"10px"}}>料金</div>
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
								style={{backgroundColor:"white", width:"500px"}}
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


const mapStateProps = (state) => {
	return { item: state.item };
}

export default connect( mapStateProps, { fetchClickedItem })(ItemDetail);

const styles = {
	selectedImage: {
		width:"450px",
		height:"100px",
		marginBottom:"10px"
	}
}