import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import api from '../../../redux/apis';

// // Material UI Component

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinStars, faHourglassStart, faYenSign, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'



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
                <Grid style={styles.postList} alignItems="center">
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                   <RequestListCard/>
                </Grid>
                <RequestAddButton/>
                <Grid style={styles.search}>
                   <SearchBar/>
                </Grid>
            </Grid>
        );
    }
}

const styles = {
    search:{
        backgroundColor:"white",
        marginTop:"10px",
        
    },
    postList:{
        marginTop:"20px"
    },
    postaddIcon:{
        width:"50px",
        height:"50px",
    },
    requestAddButton:{
        position:"fixed",
        bottom:"10px",
        right:"30px",
        backgroundColor:"#ea4335",
        borderColor:"#ea4335",
        borderRadius:"60px",
        height:"120px",
        width:"120px",
    },
    requestAddButtonLabel:{
        fontSize:"18px",
        fontWeight:"900",
        color:"white",
    },
    requestAddButtonIcon:{
        marginLeft:"36px",
        fontSize:"33px",
        color:"white",
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
                    <Grid container direction="row">
                        <Grid sm={12} md={4} container direction="column" style={{color:"white", marginLeft:"80px"}}>
                            <Grid container direction="row" style={{marginTop:"20px"}}>
                                <Avatar style={{width:"50px", height:"50px"}} src={cup}/>
                                <div style={{fontSize:"16px", fontWeight:"500", marginLeft:"20px", marginTop:"10px"}}>upallnight0738</div>
                                <div style={{opacity:"0.5", marginLeft:"50px", marginTop:"10px"}}>20分前</div>
                            </Grid>
                            <Grid container direction="row" style={{marginTop:"30px", marginLeft:"20px"}}>
                                <FontAwesomeIcon icon={faGrinStars} style={{fontSize:"30px"}}/>
                                <div style={{fontSize:"20px", fontWeight:"800", marginLeft:"10px"}}>たこ焼き器</div>
                            </Grid>
                            <Grid container direction="row" style={{marginTop:"30px", marginLeft:"20px", marginBottom:"20px"}}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize:"30px"}}/>
                                <div style={{fontSize:"20px", fontWeight:"600", marginLeft:"10px"}}>福岡市 博多区</div>
                            </Grid>
                        </Grid>
                        <Grid sm={12} md={4} container direction="column" style={{color:"white", marginLeft:"80px", marginTop:"80px"}}>
                            <Grid container direction="row" style={{marginTop:"20px"}}>
                                <FontAwesomeIcon icon={faHourglassStart} style={{fontSize:"30px"}}/>
                                <div style={{fontSize:"20px", fontWeight:"800", marginLeft:"10px"}}>1日</div>                        
                            </Grid>
                            <Grid container direction="row" style={{marginTop:"30px"}}>
                                <FontAwesomeIcon icon={faYenSign} style={{fontSize:"30px"}}/>
                                <div style={{fontSize:"20px", fontWeight:"800", marginLeft:"10px"}}>200</div>
                                <div style={{fontSize:"20px", fontWeight:"800"}}>/時間</div>                            
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{marginLeft:"100px"}}>
                        <div style={{color:"white", fontSize:"17px", marginBottom:"20px", fontWeight:"500"}}>タコパに使います！貸してください！12/13希望</div>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Button style={{backgroundColor:"#ea4335", borderColo:"#ea4335", color:"white", height:"50px", fontWeight:"600", fontSize:"20px", marginRight:"10px", marginBottom:"10px"}}>交渉する！</Button>
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
                <ExpansionPanel style={{position:"fixed", top:"80px", right:"10px", width:"100%"}}>
                    <ExpansionPanelSummary
                        expandIcon={<SearchIcon style={{color:"#ea4335"}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography style={{fontSize:"20px", fontWeight:"900"}}>貸せるものあるかな？？</Typography>
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
                                <Button style={{backgroundColor:"#ea4335", borderColo:"#ea4335", color:"white", width:"200px", height:"50px", fontWeight:"600" ,fontSize:"20px"}}>この条件で検索</Button>
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
          )
    }
}



function RequestAddButton() {
    const [open, setOpen] = React.useState(true);
    const [itemName, setItemName] = React.useState();
    const [prefecture, setPrefecture] = React.useState('福岡県');
    const [city, setCity] = React.useState('');
    const [lentPeriodRadio, setLentPeriodRadio] = React.useState('oneweek');
    const [lentPeriodNum, setLentPeriodNum] = React.useState();
    const [hopeFee, setHopeFee] = React.useState();
    const [comment, setCommnet] = React.useState();
    const [lentPeriodStr, setLentPeriodStr] = React.useState('週間');

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleItemName = (e) => {
        setItemName(e.target.value);
    };

    const handlePrefecture = (e) => {
        setPrefecture(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleLentPeirodRadio = (e) => {
        setLentPeriodRadio(e.target.value);
        if(e.target.value === 'onehour'){
            setLentPeriodStr('時間');
        }
        if(e.target.value === 'oneday'){
            setLentPeriodStr('日');
        }
        if(e.target.value === 'oneweek'){
            setLentPeriodStr('週間');
        }
    };

    const handleLentPeriodNum = (e) => {
        setLentPeriodNum(e.target.value);
    };
    
    const handleHopeFee = (e) => {
        setHopeFee(e.target.value);
    };

    const handleComment = (e) => {
        setCommnet(e.target.value);
    };
  
    const postHopeRequest = async () => {

        const token = localStorage.getItem("token");

        const optionsPost = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + token
            },
        }

        const notEmpty = (itemName !== "" && prefecture !== "" && 
            lentPeriodNum !== "" && hopeFee !=="");

        console.log(notEmpty);

        if(notEmpty){
            console.log('notEmpty!!!')
            const postData ={
                name: itemName,
                hope_fee: Number(hopeFee),
                hope_hour: Number(lentPeriodNum),
                solved: false,
            }
            console.log('postData', postData);
            api.post('requests/', postData, optionsPost)
                .then( ()=> {
                        alert('リクエスト完了！');
                        handleClose();
                    }
                )
                .catch((error) => {
                    alert('なんでだろう', error);
                    console.log('errorrrrr', error);
                })
        }else{
            alert('項目を入力してください');
        }
    }
    return (
      <div>
        <Button 
            style={styles.requestAddButton}
            onClick={handleClickOpen}
        >
            <Grid container direction="column">
                <p style={styles.requestAddButtonLabel}>リクエスト</p>
                <FontAwesomeIcon icon={faGrinStars} style={styles.requestAddButtonIcon}/>
            </Grid>
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle style={{textAlign:"center", fontWeight:"900"}}>借りたいものを投稿してみよ！</DialogTitle>
            <DialogContent>
            <Grid container direction="column" justfiy="center" alignItems="center" style={{width:"500px"}}>
                    <TextField
                        style={{marginBottom:"30px"}}
                        InputProps={{
                            startAdornment :(
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faGrinStars} style={{width:"30px", height:"30px"}}/>
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleItemName}
                        value={itemName}
                        variant="standard" 
                        placeholder="借りたいもの"
                    />
                    <Grid container directionN="row">
                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{width:"30px", height:"30px", marginLeft:"85px", marginRight:"5px"}}/>
                        <TextField
                            style={{marginBottom:"30px", width:"120px", marginRight:"10px", textAlign:"center"}}
                            onChange={handlePrefecture}
                            value={prefecture}
                            variant="standard" 
                            placeholder="都道府県"
                        />
                        <TextField
                            style={{marginBottom:"30px", width:"150px", textAlign:"center"}}
                            onChange={handleCity}
                            value={city}
                            variant="standard" 
                            placeholder="市村町"
                        />
                    </Grid>
                    
                    <RadioGroup
                        row 
                        style={{marginBottom:"30px"}}
                        onChange={handleLentPeirodRadio}
                        value={lentPeriodRadio}
                    >
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
                    <Grid container direction="row">
                        <Input
                            style={{width:"150px", marginBottom:"30px", marginLeft:"85px"}}
                            onChange={handleLentPeriodNum}
                            value={lentPeriodNum}
                            startAdornment={<InputAdornment position="start"><FontAwesomeIcon icon={faHourglassStart} style={{width:"30px", height:"30px"}}/></InputAdornment>}
                            endAdornment={<InputAdornment position="end">{lentPeriodStr}</InputAdornment>}
                            labelWidth={60}
                        />
                        <Input
                            style={{width:"150px", marginBottom:"30px", marginLeft:"10px"}}
                            onChange={handleHopeFee}
                            value={hopeFee}
                            startAdornment={<InputAdornment position="start"><FontAwesomeIcon icon={faYenSign} style={{width:"30px", height:"30px"}}/></InputAdornment>}
                            endAdornment={<InputAdornment position="end">/1{lentPeriodStr}</InputAdornment>}
                            labelWidth={60}
                        />
                    </Grid>
                    <TextField
                        style={{width:"400px"}}
                        label="コメント"
                        multiline
                        rows="4"
                        variant="outlined"
                        rowsMax="4"
                        onChange={handleComment}
                        value={comment}
                    />
                    <DialogActions>
                        <Button 
                            onClick={postHopeRequest}
                            style={{
                                backgroundColor:"#ea4335",
                                borderColor:"#ea4335",
                                color:"white", 
                                height:"50px",
                                width:"250px",
                                fontWeight:"600",
                                fontSize:"20px"}}
                        >リクェる！
                        </Button>
                    </DialogActions>
                </Grid>
            </DialogContent>
        </Dialog>
      </div>
    );
  }


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
//     }
// ];
