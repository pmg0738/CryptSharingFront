import React from 'react';
import './style.scss';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { 
    Alert,
    // Container,
    // Button,
    Form,
    Row,
    Col,
    // Card,
} from 'react-bootstrap';

// import { Button } from '@material-ui/core';
// import { CheckCircleIcon } from '@material-ui/icons';


import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
// import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



import Card from '@material-ui/core/Card';
// import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from '@material-ui/icons/Image';
import AddPhotoAlternateOutlinedIcon from '@material-ui/icons/AddPhotoAlternateOutlined';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

// import DeleteIcon from '@material-ui/icons/Delete';
// import AlarmIcon from '@material-ui/icons/Alarm';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import TextField from '@material-ui/core/TextField';


import loadImage from 'blueimp-load-image';

import Navbar from '../../components/Navbar';
// import eraiza from '../../images/eraiza.png';
import Container from '@material-ui/core/Container';


import placeholderImage from '../../images/rain.png';


const MAX_NUM_OF_IMAGE = 9

export default class ItemPost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [],
            imageStartIndex: 0,                
            isOverNumOfImage: false,
        }
    }

    myArray = (array, index) => {
        let newArray = [];

        for(let i=index; i<index+3; i++){
            newArray.push(array[i])
        }
        return newArray;
    }

    deleteImage = (index) => {
        let { images } = this.state;
        images.splice(index, 1);
        this.setState({
            images: images,
            isOverNumOfImage: false,
        });
    }

    async imageChangeHandler(e) {
        const { imageUri } = await resizeImage(e);
        let { images } = this.state;

        if(images.length<MAX_NUM_OF_IMAGE){
            images.push(imageUri);
            this.setState({
                images: images,
                isOverNumOfImage: false
            });
        }
        else {
            this.setState({isOverNumOfImage: true})
        }
    }

    // renderAlert = (isOver) => {
    //     if(isOver) {
    //         return (
    //             <Alert variant="danger">
    //                 添付できる画像は１０枚までです
    //             </Alert>
    //         );
    //     }
    // }   


    // renderPlaceholderImage = (images) => {
    //     if(images.length==0){
    //         return (
    //             <img src={placeholderImage} 
    //                 className="item-post-placeholder-image"
    //             />
    //         );
    //     }
    // }

    renderImagePlaceholder = (numOfImages) => {

        let placeholders = [];

        if(numOfImages<MAX_NUM_OF_IMAGE) {
            placeholders.push(
                <Card className="item-post-image-container">
                    <div  className="item-post-image-placeholder">
                        <label htmlFor="icon-button-file">
                            <IconButton
                                color="primary"
                                className="item-post-image-input-button"
                                aria-label="upload picture"
                                component="span"
                                style={{marginTop: 35}}
                            >
                            <AddAPhotoIcon style={{ width: 60, height: 60}}/>
                            </IconButton>
                        </label>
                    </div>
                </Card>
            )
        }
        
        for(let i=numOfImages+1; i<MAX_NUM_OF_IMAGE; i++) {
            placeholders.push(
                <Card className="item-post-image-container">
                    <div  className="item-post-image-placeholder"/>
                </Card>
            )
        }
        return placeholders;
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
                            style={{marginBottom: 20}}
                        >一覧に戻る</Button>
                    </Link>
                    <Card className="item-post-card">
                        <CardHeader
                            avatar={<Avatar aria-label="recipe" className="">R</Avatar>}
                            action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            className=""
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <Grid container direction="row" justify="center">
                            <Grid item direction="column" justify="center" alignItems="center" xs={6}>                           
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
                                        style={{ color: "#ffffff" }}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                    <p className="item-post-yen">円</p>
                                </Grid>
                                <Grid container direction="row" justify="flex-start" alignItems="center">                           
                                    <TextField
                                        id="standard-multiline-flexible"
                                        label="1日当たりの料金"
                                        type="number"
                                        style={{ color: "#ffffff" }}
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
                            <Grid item direction="column" justify="center"
                                alignItems="center" xs={6}>                      
                                <input 
                                    accept="image/*"
                                    className="item-post-image-input"
                                    id="icon-button-file"
                                    type="file"
                                    onChange={e => this.imageChangeHandler(e)}
                                />            
                                <Grid container direction="row" justify="flex-start">
                                    {this.state.images.map((image, index) => 
                                        <ItemPostCard 
                                            image={image} 
                                            index={index}
                                            deleteImage={() => this.deleteImage(index)}
                                        />
                                    )}
                                    {this.renderImagePlaceholder(this.state.images.length)}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="flex-end" style={{marginTop: 40}}>
                            <Link to='/itempostconfirm'>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className=""
                                    size="large"
                                    startIcon={<CheckCircleIcon />}
                                >確認</Button>
                            </Link>
                        </Grid>
                    </Card>
                </Container>
            </div>
        )
    }
}


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
    } catch (e) {
      reject();
      return false;
    }
  }
  

  export const resizeImage = (event, maxWidth = 1024) => {
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
