import React from 'react';

import './style.scss';

// // Material UI Component
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CardHeader from '@material-ui/core/CardHeader';
// import Dialog from '@material-ui/core/Dialog';
// import Fab from '@material-ui/core/Fab';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import IconButton from '@material-ui/core/IconButton';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import MuiDialogContent from '@material-ui/core/DialogContent';

// // Material UI Icon
// import AddIcon from '@material-ui/icons/Add';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// // My Component
// import ItemRequestCard from '../../../components/item/ItemRequestCard';
// import { StylesContext } from '@material-ui/styles/StylesProvider';
// import { getDefaultSettings } from 'http2';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinStars } from '@fortawesome/free-solid-svg-icons'



import cup from '../../../images/cup.jpg';


export default class ItemRequestList extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            
        }
    }
    
    render() {
        return (
            <Grid container direction="column">
                <Grid style={styles.search}>
                   <SearchBar/>
                </Grid>
                <Grid style={styles.postList} alignItems="center">
                   <RequestListCard/>
                   <RequestListCard/>
                </Grid>
            </Grid>
        );
    }
}

const styles = {
    search:{
        backgroundColor:"white",
    },
    postList:{
        // backgroundColor:"skyblue",
        marginTop:"20px"
    },
    postaddIcon:{
        width:"50px",
        height:"50px",
    }
}

class RequestListCard extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }

    render(){
        return(
            <Grid container justify="center" alignItems="center">
                <Box border={1} borderColor="white" style={{width:"70%"}}>
                    <Grid container direction="column" style={{color:"white"}}>
                        <Grid container direction="row">
                            <Avatar style={{width:"50px", height:"50px"}} src={cup}/>
                            <div style={{fontSize:"16px", fontWeight:"500", marginLeft:"20px", marginTop:"10px"}}>upallnight0738</div>
                            <div style={{opacity:"0.5", marginLeft:"50px", marginTop:"10px"}}>20分前</div>
                        </Grid>
                        <Grid container direction="row" style={{marginTop:"30px"}}>
                            <FontAwesomeIcon icon={faGrinStars} style={{color:"#ea4335", fontSize:"30px"}}/>
                            <div>たこ焼き機</div>
                        </Grid>
                        <Grid container direction="row" style={{marginTop:"30px"}}>
                            <LocationOnIcon/>
                            <div>福岡市 早良区</div>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        )
    }
}


class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            lentPeriod:"onehour",
        }
    }
    
    handleLentPeriod = (e) =>{
        console.log(e.target.value);
        this.setState({lentPeriod: e.target.value})
    }

    renderPriceByLentPeriod = () =>{
        if(this.state.lentPeriod === "onehour"){
            return(
                    <Input
                        style={{width:"150px"}}
                        // onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">￥</InputAdornment>}
                        endAdornment={<InputAdornment position="end">/1時間</InputAdornment>}
                        labelWidth={60}
                    />
                )
        }
        if(this.state.lentPeriod === "oneday"){
            return(
                    <Input
                        style={{width:"150px"}}
                        // onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">￥</InputAdornment>}
                        endAdornment={<InputAdornment position="end">/1日</InputAdornment>}
                        labelWidth={60}
                    />
                )
        }
        if(this.state.lentPeriod === "oneweek"){
            return(
                    <Input
                        style={{width:"150px"}}
                        // onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">￥</InputAdornment>}
                        endAdornment={<InputAdornment position="end">/1週間</InputAdornment>}
                        labelWidth={60}
                    />
                )
        }
    }

    render(){
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<SearchIcon style={{color:"#ea4335"}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{fontSize:"20px", fontWeight:"900"}}>貸せるものある？</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container direction="column">
                            <Grid container direction="row" justify="space-evenly">
                                <TextField variant="outlined"  label="貸せるもの" style={{width:"300px"}}/>
                                <Grid style={{marginLeft:"20px", marginTop:"10px"}}>
                                    <TextField
                                        style={{width:"200px"}}
                                        InputProps={{
                                            startAdornment :(
                                                <InputAdornment position="start">
                                                    <LocationOnIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        variant="standard" 
                                        placeholder="福岡県 福岡市"
                                    />
                                </Grid>
                                <RadioGroup row value={this.state.lentPeriod} onChange={this.handleLentPeriod}>
                                    <FormControlLabel
                                        value="onehour"
                                        control={<Radio color="primary" />}
                                        label="1時間"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="oneday"
                                        control={<Radio color="primary"/>}
                                        label="1日"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="oneweek"
                                        control={<Radio color="primary"/>}
                                        label="1週間"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                                <Grid direction="column" style={{marginLeft:"20px",marginBottom:"20px"}}>
                                    <div>希望金額</div>
                                    {this.renderPriceByLentPeriod()}
                                </Grid>
                            </Grid>
                            <Grid container justify="center" style={{marginTop:"20px"}}>
                                <Button style={{backgroundColor:"#ea4335", borderColo:"#ea4335", color:"white", width:"200px", height:"50px"}}>この条件で検索</Button>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
          )
    }
}



// class PostAddDrawer extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             left: false,
//         }        
//     }   


//     toggleDrawer = (sample) = (e) =>{
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//           }
//           this.setState({left: sample});
//     }

//     render(){
//         return(
//             <div>
//                 <PostAddIcon style={styles.postaddIcon} onClick={this.toggleDrawer(true)}/>
//                 <Drawer open={this.state.left}>
//                     <CancelPresentationIcon onClose={this.toggleDrawer(false)}/>
//                 </Drawer>
//             </div>
//         )
//     }
// }



// const useStyles = makeStyles(theme => ({
// 	fab: {
// 		height: 80,
// 		width:  80,
// 		margin: theme.spacing(1),
// 		position: "fixed",
// 		bottom: 50,
// 		right: 50,
// 	},
// 	root: {
// 		color: '#ffffff',
// 		display: 'flex',
// 		flexWrap: 'wrap',
// 		justifyContent: 'center',
// 		overflow: 'hidden',
// 	},
// 		gridList: {
// 		width: "80%",
// 	},
// 		icon: {
// 		color: 'rgba(255, 255, 255, 0.54)',
// 	},
// 	postDialog: {
// 		minWidth: "80%"
// 	}
// }));


// const DialogContent = withStyles(theme => ({
// 	root: {
// 		padding: theme.spacing(2),
// 	},
// }))(MuiDialogContent);

// const DialogActions = withStyles(theme => ({
// 	root: {
// 		margin: 0,
// 		padding: theme.spacing(1),
// 	},
// }))(MuiDialogActions);


// // 商品リクエストの一覧
// export default function ItemRequestList() {

// 	// スタイリングに使うクラス名
// 	const classes = useStyles();

// 	// stateを定義
// 	const [open, setOpen] = React.useState(false);

// 	// 投稿画面のダイアログを開く
// 	const openPostDialog = () => {
// 		setOpen(true);
// 	};

// 	// 投稿画面のダイアログを閉じる
// 	const closePostDialog = () => {
// 		setOpen(false);
// 	};

// 	return (
// 		<div className={classes.root}>
// 			<GridList cellHeight={260} className={classes.gridList}>
// 				<GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
// 					<ListSubheader component="div" style={{color: "#ffffff", fontSize: 24}}>REQUESTS</ListSubheader>
// 				</GridListTile>
// 				{itemRequests.map(itemRequest => (
// 					<Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
// 						<ItemRequestCard itemRequest={itemRequest} />
// 					</Grid>
// 				))}
// 			</GridList>
// 			<Fab color="primary" aria-label="add" className={classes.fab} onClick={openPostDialog}>
// 				<AddIcon />
// 			</Fab>
// 			{/* 投稿画面 */}
// 			<Dialog className={classes.postDialog} onClose={closePostDialog} aria-labelledby="customized-dialog-title" open={open}>
// 				<CardHeader
// 					avatar={<Avatar aria-label="recipe" className={classes.avatar}
// 					style={{backgroundColor: "#ff6967"}}
// 					>H</Avatar>}
// 					action={
// 						<IconButton aria-label="settings">
// 							<MoreVertIcon />
// 						</IconButton>
// 					}
// 					title="Hayato Koba"
// 					subheader="September 14, 2016"
// 				/>
// 				<DialogContent dividers>
// 					{/* ここにフォームを書く */}
// 				</DialogContent>
// 				<DialogActions>
// 				<Button autoFocus onClick={() => console.log("POST")} color="primary">投稿する</Button>
// 				<Button autoFocus onClick={closePostDialog} color="primary">閉じる</Button>
// 				</DialogActions>
// 			</Dialog>
// 		</div>
// 	);
// };


// const itemRequests = [
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Hayato Koba',
//         prefecture: '福岡県',
//         city: '福岡市',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Park Mingu',
//         prefecture: '福岡県',
//         city: '飯塚市',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Ozaki Ryuya',
//         prefecture: '宮崎県',
//         city: '',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Maeno Yushi',
//         prefecture: '鹿児島県',
//         city: '',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Hayato Koba',
//         prefecture: '福岡県',
//         city: '福岡市',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Park Mingu',
//         prefecture: '福岡県',
//         city: '飯塚市',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Ozaki Ryuya',
//         prefecture: '宮崎県',
//         city: '',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Maeno Yushi',
//         prefecture: '鹿児島県',
//         city: '',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Hayato Koba',
//         prefecture: '福岡県',
//         city: '福岡市',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Park Mingu',
//         prefecture: '福岡県',
//         city: '飯塚市',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Ozaki Ryuya',
//         prefecture: '宮崎県',
//         city: '',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Maeno Yushi',
//         prefecture: '鹿児島県',
//         city: '',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Hayato Koba',
//         prefecture: '福岡県',
//         city: '福岡市',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Park Mingu',
//         prefecture: '福岡県',
//         city: '飯塚市',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
//     {
//         title: '自転車',
//         date: '2020-11-30',
//         author: 'Ozaki Ryuya',
//         prefecture: '宮崎県',
//         city: '',
//         rentalTerm: '3日',
//         fee: 300,
//         hashTags: ['自転車', 'チャリ', 'GIANT'],
//         comment: '自転車貸して下さい!!'
//     },
//     {
//         title: 'たこ焼き機',
//         date: '2019-12-24',
//         author: 'Maeno Yushi',
//         prefecture: '鹿児島県',
//         city: '',
//         rentalTerm: '1日',
//         fee: 400,
//         hashTags: ['タコパ', 'たこ焼き'],
//         comment: '深夜一人タコパしたい!!'
//     },
// ];
