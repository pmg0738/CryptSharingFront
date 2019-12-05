import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { fetchClickedItem } from '../../../redux/actions';
import { 
	Button,
	Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';

import cat from '../../../images/cup.jpg';
import { flexbox } from '@material-ui/system';


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
		window.scrollTo(0, 0)
		this.props.fetchClickedItem(this.itemId);
		console.log('asdfasdflksadfsfj', this.props.item);
		console.log('#$#$#$#$#$#$', this.itemId);
		// const existInStore = Object.keys(this.props.items).indexOf(this.itemId) !== -1;
		// const existInStore = this.props.items.hasOwnProperty(this.itemId);

		// if(!existInStore){
		// 	this.props.fetchItems
		// }
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

renderImage = () => {
	console.log('BEFORE if', this.props.item.images);
    if(this.props.item.images) {
        return <Image className="" src={this.props.item.images[0].url} />
	}
	console.log('AFTER if', this.props.item.images);
    return <div/>
}
  
renderFeeTable = () => {	
	return (
<div style={{backgroundColor:"green"}}>
			  <Table stickyHeader aria-label="sticky table" style={{width:"350px"}}>
				<TableHead>
					<TableCell key='hour_fee' align='center' style={{fontSize:"17px"}}>1時間</TableCell>
					<TableCell key='day_fee' align='center' style={{fontSize:"17px"}}>1日</TableCell>
					<TableCell key='week_fee' align='center' style={{fontSize:"17px"}}>1週間</TableCell>
					<TableCell key='assure_fee' align='center' style={{fontSize:"17px"}}>担保</TableCell>
				</TableHead>
				<TableBody>
					<TableCell align='center' style={{color:"white", fontSize:"15px"}}>￥{this.props.item.fee_per_hour}</TableCell>
					<TableCell align='center' style={{color:"white", fontSize:"15px"}}>￥{this.props.item.fee_per_day}</TableCell>
					<TableCell align='center' style={{color:"white", fontSize:"15px"}}>￥500</TableCell>
					<TableCell align='center' style={{color:"white", fontSize:"15px"}}>￥2000</TableCell>
				</TableBody>
			  </Table>
</div>
	);
}
	render() {
		return (
				<div>
					<Grid container>
						<Grid sm={12} md={6} style={{backgroundColor:"yellow"}}>
							{this.renderImage()}
							{/* <img className="item-detail-selected-pic" src={this.props.item.}/> */}
							<Grid>
								<ArrowBackIosIcon style={{color: green[500]}}/>
								{this.threeArray(this.state.images, this.state.imageStartIndex).map(image => 
									<img 
										className="item-detail-not-selected-pic" 
										src={image} 
										onClick={() => this.setState({selectedImage: image})}
									/>
								)}
								<ArrowForwardIosIcon style={{color: green[500]}}/>
							</Grid>
						</Grid>
						<Grid sm={12} md={6} style={{backgroundColor:"skyblue"}}>
							<Avatar src={cat} style={{width:"45px", height:"45px"}}/>
							<div style={{fontSize:"20px", color:"white", margin:"7px", backgroundColor:"purple"}}>upallnight0738</div>
							<StarIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
							<StarIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
							<StarIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
							<StarHalfIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
							<StarBorderIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
						</Grid>
						{/* <div>
							<Grid xs={12} style={{backgroundColor:"skyblue", height:"50px"}}>
								<Avatar src={cat} style={{width:"45px", height:"45px"}}/>
								<div style={{fontSize:"20px", color:"white", margin:"7px", backgroundColor:"purple"}}>upallnight0738</div>
								<StarIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
								<StarIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
								<StarIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
								<StarHalfIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
								<StarBorderIcon style={{color:"yellow", backgroundColor:"purple", marginTop:"7px"}}/>
							</Grid>
							<div style={{color:"white"}}>料金</div>
							{this.renderFeeTable()}
						</div> */}
					</Grid>
					
					
					{/* <Container>
						<Row>
							<Col sm={12} md={6} className="item-detail-pic">
								{this.renderImage()}
								<Row>
									<FontAwesomeIcon className="item-detail-chevron-left" icon={faChevronLeft}
										onClick={this.backOneStep}
									/>
										{this.threeArray(this.state.images, this.state.imageStartIndex).map(image => 
											<Card className="item-detail-non-selected-pic-container" onClick={() => this.setState({selectedImage: image})}>
												<img className="item-detail-not-selected-pic" src={image}></img>
											</Card>
									)}
									
									<FontAwesomeIcon className="item-detail-chevron-right" icon={faChevronRight}
										onClick={this.forwardOneStep}
									/>
								</Row>
							</Col>
							<Col sm={12} md={6} className="item-detail-info">
								<Row>
									<Link to='/items/'>
										<Button className="item-detail-button-to-item-list">一覧に戻る</Button>
									</Link>
									<FontAwesomeIcon className={this.state.itemDetailFavoriteIconClassName} icon={faHeart}
										onClick={this.clickFavoriteButton}
					
									/>
								</Row>
								<div className="item-detail-charge-per-hour">1時間：{this.props.item.fee_per_hour}円</div>
								<div className="item-detail-charge-per-day">1　日：{this.props.item.fee_per_day}円</div>
								{this.renderButton()}
								<div className="item-detail-owner">
									park　★★★★★</div>
								<div className="item-detail-rent-state">貸し出し可能</div>
								<div className="item-detail-more-detail-info-header">
									その他の情報
								</div>
								<div className="item-detail-more-detail-info-contents">
									ブランド名：DELL<br/>
									サイズ：24インチ<br/>
									購入時価格：21600円<br/>
								</div>
							</Col>
						</Row>
					</Container> */}
				</div>
		)
	}
}


const mapStateProps = (state) => {
    return { item: state.item };
}

export default connect( mapStateProps, { fetchClickedItem })(ItemDetail);



