import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './style.scss';

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


import eraiza from '../../images/eraiza.png';
import Container from '@material-ui/core/Container';

import { ItemPostCard } from '../ItemPost'


export default class ItemPostConfirm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            item:{
                images: [eraiza, eraiza, eraiza, eraiza],
                name: "Dell モニター 25インチ",
                price:{
                    oneHourPrice: 50,
                    oneDayPrice: 500,
                },
            },
            
            imageStartIndex: 0,                
            selectedImage: "",
            isOverNumOfImage: false,
        }

    }

    render() {
        return (
            <div>
                <Container maxWidth="lg" className="item-post-container">
                    <Link to='/items/new/post'>
                        <Button
                            variant="contained"
                            color="primary"
                            className="item-post-back-to-list-button"
                            size="large"
                            startIcon={<SettingsBackupRestoreIcon />}
                            style={{marginBottom: 20}}
                        >戻る</Button>
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
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="1時間当たりの料金"
                                    multiline
                                    rowsMax="4"
                                    // value={value}
                                    // onChange={handleChange}
                                    // className="item-post-item-name"
                                    margin="normal"
                                    variant="outlined"
                                />
                                <p className="yen">円</p>
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
                                    {this.state.item.images.map((image, index) => 
                                        <ItemPostCard
                                            image={image}
                                            index={index}
                                            deleteImage={() => this.deleteImage(index)}
                                        />
                                    )}
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
