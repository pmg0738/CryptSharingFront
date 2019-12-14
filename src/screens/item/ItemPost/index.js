import React from 'react';
import axios from 'axios';
// import axios from '../../../redux/apis/apis';
import './style.scss';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
// import { fetchMyData } from '../../../redux/actions/user';
import { fetchMyData } from '../../../redux/actions/user';


// Material UI Component
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

// Material UI Icon
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

import loadImage from 'blueimp-load-image';
import ConfirmDialog from '../../../components/item/ItemPostConfirmDialog';


const MAX_NUM_OF_IMAGE = 9


class ItemPost extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			images: [],
			previewImages: [],
			imageStartIndex: 0,
			isOverNumOfImage: false,
			showConfirmDialog: false,
			me: {
				name: " ",
			}
		}	
	}

	componentWillMount() {
		this.setMyData();
	}

	setMyData = async () => {
		if(Object.keys(this.props.store.me).length==0) {
			const response =  await this.props.fetchMyData();
			console.log('response', response);
			this.setState({me: response})
		}
	}
	

	deleteImage = (index) => {
		let { images } = this.state;
		images.splice(index, 1);
		this.setState({
			images: images,
			isOverNumOfImage: false,
		});
	}

	addPreviewImages = async (e) => {
		const { imageUri } = await resizeImage(e);
		let images = this.state.previewImages;

		if(images.length<MAX_NUM_OF_IMAGE){
			images.push(imageUri);
			this.setState({
				previewImages: images,
				isOverNumOfImage: false
			});
		}
		else {
			this.setState({isOverNumOfImage: true})
		}
	}


	renderImagePlaceholder = (numOfImages) => {
		let placeholders = [];

		if(numOfImages<MAX_NUM_OF_IMAGE) {
			placeholders.push(
				<Card className="item-post-image-container" key={100}>
					<div  className="item-post-image-placeholder">
						<label htmlFor="icon-button-file">
							<IconButton
								color="primary"
								className="item-post-image-input-button"
								aria-label="upload picture"
								component="span"
								style={{marginTop: 35}}
							>
								<AddAPhotoIcon style={{ width: 60, height: 60, color: "#FBBC05"}}/>
							</IconButton>
						</label>
					</div>
				</Card>
			)
		}
		
		for(let i=numOfImages+1; i<MAX_NUM_OF_IMAGE; i++) {
			placeholders.push(
				<Card className="item-post-image-container" key={i}>
					<div  className="item-post-image-placeholder"/>
				</Card>
			)
		}
		return placeholders;
	}

	// 画像が選択されていたら、確認ダイアログを表示する
	handleConfirm = () => {
		// var token = localStorage.getItem("token");
		// console.log('token', token)

		if(this.state.images.length > 0) {
			this.setState({showConfirmDialog: true})
		} else {
			alert("画像を1枚以上選択してください");
		}
	}

	// 画像を選択
	selectImage = (event) => {

		this.addPreviewImages(event);

		let { images } = this.state;
		images.push(event.target.files[0]);
		this.setState({images: images})
	}

	// 画像をサーバーに送信
	uploadImages = async () => {
		const formData = new FormData();
		const timestamp = new Date().getTime();

		for(let i=0; i<this.state.images.length; i++ ) {
			formData.append(`url${i}`, this.state.images[i], `${timestamp}${i}.png`);
		}
		// const response = await axios.post('/images/create_many/', formData);
		const response = await axios.post('http://localhost:8000/api/v1/images/create_many/', formData);
		return response.data;
	}

	// 商品を登録する（サーバーにリクエスト送信）
	postItem = async () => {

		const images = await this.uploadImages();

		const postData = {
			name: "Name",
			fee_per_hour: 10,
			fee_per_day:  100,
			fee_per_week: 1000,
			images: images.map(obj => obj.image_id),
			categories: [1],
			owner: 1,
			require_mortgaged_mount: 2000,
		}

		const response = await axios.post('http://localhost:8000/api/v1/items/', postData);
	}

	// confirm = (obj, key) => {
	// 	if(obj.hasOwnProperty(key)) {
	// 		return obj.key;
	// 	}
	// 	else {
	// 		return "";
	// 	}
	// }
	renderDate = (date) => {
		const year  = date.getFullYear();
		const month = date.getMonth() + 1;
		const day   = date.getDate();
		const week = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()];
		return `${year} / ${month} / ${day} (${week})`;
	}


	render() {
		return (
			<div>
				<Container maxWidth="lg" className="item-post-container">
					<Link to='/items'>
						<Button
							variant="contained"
							color="primary"
							className="item-post-back-to-list-button"
							size="large"
							startIcon={<SettingsBackupRestoreIcon />}
							style={{marginBottom: 20, background: "#282c34", fontWeight: "bold"}}
						>一覧</Button>
					</Link>
					<Card className="item-post-card">
						<CardHeader
							avatar={<Avatar aria-label="recipe" className="">{this.state.me.name[0]}</Avatar>}
							action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
							title={this.state.me.name}
							// subheader="September 14, 2016"
							subheader={this.renderDate(new Date())}
						/>
						<CardMedia
							className=""
							image="/static/images/cards/paella.jpg"
							title="Paella dish"
						/>
						<Grid container direction="row" justify="center">
							<Grid item container direction="column" justify="center" alignItems="center" xs={6}>
								<TextField
									id="standard-multiline-flexible"
									label="商品名"
									multiline
									rowsMax="4"
									// value={value}
									// onChange={handleChange}
									className="item-post-item-name"
									margin="normal"
									variant="outlined"
								/>
								<Grid container direction="row" justify="flex-start" alignItems="center">
									<TextField
										id="standard-multiline-flexible"
										label="1時間当たりの料金"
										type="number"
										style={styles.textfield}
										margin="normal"
										variant="outlined"
									/>
									<p className="item-post-yen">円</p>
								{/* </Grid>
								<Grid container direction="row" justify="flex-start" alignItems="center" xs={6}> */}
									<TextField
										id="standard-multiline-flexible"
										label="1日当たりの料金"
										type="number"
										style={styles.textfield}
										margin="normal"
										variant="outlined"
									/>
									<p className="item-post-yen">円</p>
								</Grid>
								<Grid container direction="row" justify="flex-start" alignItems="center">
									<TextField
										id="standard-multiline-flexible"
										label="1週間当たりの料金"
										type="number"
										style={styles.textfield}
										margin="normal"
										variant="outlined"
									/>
									<p className="item-post-yen">円</p>
								</Grid>
								<Grid container direction="row" justify="flex-start" alignItems="center">
									<TextField
										id="standard-multiline-flexible"
										label="担保"
										type="number"
										style={styles.textfieldFull}
										margin="normal"
										variant="outlined"
									/>
									<p className="item-post-yen">円</p>
								</Grid>
								<TextField
									id="outlined-multiline-static"
									label="その他の情報"
									multiline
									rows="10"
									// defaultValue="Default Value"
									className="item-post-else-info"
									placeholder='購入価格: 32400円'
									margin="normal"
									variant="outlined"
									/>
							</Grid>
							<Grid item container direction="column" justify="center"
								alignItems="center" xs={6}>
								<input 
									accept="image/*"
									className="item-post-image-input"
									id="icon-button-file"
									type="file"
									onChange={this.selectImage}
								/>
								<Grid container direction="row" justify="flex-start">
									{this.state.previewImages.map((image, index) => 
										<ItemPostCard 
											image={image} 
											index={index}
											key={index}
											deleteImage={() => this.deleteImage(index)}
										/>
									)}
									{this.renderImagePlaceholder(this.state.images.length)}
								</Grid>
							</Grid>
						</Grid>
						<Grid container direction="row" justify="flex-end" style={{marginTop: 40}}>
							<Button
								variant="contained"
								// color="primary"
								className=""
								size="large"
								startIcon={<CheckCircleIcon />}
								onClick={this.handleConfirm}
								style={this.state.images.length > 0 ? styles.confirmButtonActive : styles.confirmButtonDeactive}
							>確認</Button>
						</Grid>
					</Card>
				</Container>
				<ConfirmDialog
					show={this.state.showConfirmDialog}
					close={() => this.setState({showConfirmDialog: false})}
					postItem={this.postItem}
				/>
			</div>
		);
	}
}


const mapStateProps = (store) => {
	return { store: store };
}

export default connect( mapStateProps, { fetchMyData })(ItemPost);




export class ItemPostCard extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selected: false,
		}
	}

	render() {
		return(
			<Card className="item-post-image-container"
				onClick={() => this.setState({selected: !this.state.selected})}
			>
				<img className="item-post-image" src={this.props.image}></img>
				{[
					<div/>,
					<div>
						<div className="item-post-image-smoke"/>
						<Button className="item-post-image-delete-button"
							onClick={this.props.deleteImage}
						>削除</Button>
					</div>,
				][Number(this.state.selected)]
				}
			</Card>
		)
	}
}


const toBlob = (base64, reject) => {
	const bin = atob(base64.replace(/^.*,/, ''));
	const buffer = new Uint8Array(bin.length);

	for (let i = 0; i < bin.length; i += 1) {
		buffer[i] = bin.charCodeAt(i);
	}
	// Blobを作成
	try {
		const blob = new Blob([buffer.buffer], {
			type: 'image/jpg',
		});
		return blob;
	}
	catch (e) {
		reject();
		return false;
	}
}


const resizeImage = (event, maxWidth = 1024) => {
	return new Promise((resolve, reject) => {
		const file = event.target.files[0];
		loadImage.parseMetaData(file, (data) => {
		const options = {
			maxWidth,
			canvas: true,
		};
		if (data.exif) {
			options.orientation = data.exif.get('Orientation');
		}
		loadImage(file, (canvas) => {
			const imageUri = canvas.toDataURL('image/jpg');
			const imageFile = toBlob(imageUri, reject);
			resolve({
				imageFile,
				imageUri,
			});
		}, options);
		});
	});
};



const styles = {
	confirmButtonDeactive: {
		backgroundColor: "#999999",
		color: "#ffffff",
		fontWeight: "bold",
	},
	confirmButtonActive: {
		backgroundColor: "#fbbc05",
		color: "#ffffff",
		fontWeight: "bold",
	},
	textfield: {
		marginLeft: 30,
	},
	textfieldFull: {
		width: "80%",
		marginLeft: 30,
	}
}