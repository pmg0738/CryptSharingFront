import React, {useState} from 'react';
import { connect } from 'react-redux';
import { fetchClickedItem } from '../../../redux/actions';
import { 
	Image,
} from 'react-bootstrap';
import './style.scss';

import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import { green, red} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart, faYenSign, faTimes} from '@fortawesome/free-solid-svg-icons'

import cat from '../../../images/cup.jpg';


// function expensiveInitialState() {
// 	return 10;
// }


class Request extends React.Component {
	constructor(props){
		super(props);

		this.state={
			lentPeriod:"onehour",
		}
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
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥50{this.props.item.fee_per_hour}</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥300{this.props.item.fee_per_day}</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥1000</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>￥2000</TableCell>
				<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
					{this.showEmoticon(1)}
					{/* <InsertEmoticonRoundedIcon style={{color:green[500], width:"40px", height:"40px"}}/> */}
				</TableCell>
			</TableBody>
			</Table>
	);
}

handleLentPeriod = (e) =>{
	console.log(e.target.value);
	this.setState({lentPeriod: e.target.value})
}

	render() {
		return (
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid container sm={12} md={6} direction="column" justify="center" alignItems="center">
					<Grid container direction="row">
						<Avatar src={cat} style={{width:"45px", height:"45px"}}/>
						<div style={{fontSize:"20px", color:"white", margin:"7px"}}>upallnight0738</div>
						{this.renderStar(2.5)}
					</Grid>
					<Grid>
						<Image style={{width:"450px", height:"450px", marginBottom:"10px", marginTop:"20px"}} src={cat} />
					</Grid>
				</Grid>
				<Grid container sm={12} md={6} direction="column" justify="center" alignItems="center">
					<div style={{color:"white", fontSize:"20px", fontWeight:"900", marginBottom:"10px"}}>料金</div>
					{this.renderFeeTable()}
					<LentPeriodRadioButton/>
				</Grid>
			</Grid>
		)
	}
}



function LentPeriodRadioButton(){

	const useStyles = makeStyles(theme => ({
		formControl: {
			color:"white",
			marginTop:"20px"
		},
		radio:{
			color:"#cccccc",
		},
		box:{
			marginTop:"20px",
			color:"white",
			width:"500px",
			height:"450px",
		},
		textField:{
			color:"white",
			// backgroundColor:"white",
			width:"90px",
		}
	}));
	
	const classes = useStyles();
	const [value, setValue] = useState('onehour');

	const [lentTimeValue, setLentTimeValue] = useState(1);

	const handleValue = (e) =>{
		setValue(e.target.value);
	}

	const handleLentTimeValue = (e) =>{
		setLentTimeValue(e.target.value);
	}

	const lentPeriodLabel = () =>{
		if(value==='onehour'){
			return <div>時間</div>
		}
		if(value==='oneday'){
			return <div>日</div>
		}
		if(value==='oneweek'){
			return <div>週間</div>
		}	
	}

	const renderPriceTable = () =>{
		var tanpo = 2000;
		var onehourPrice = 50;
		var onedayPrice = 300;
		var oneweekPrice = 1000;
		if(value==='onehour'){
			var price = (lentTimeValue * onehourPrice);
			var totalPayment = (price + tanpo);
			return(
				<Table stickyHeader aria-label="sticky table" style={{width:"450px", marginBottom:"10px"}}>
					<TableHead>
						<TableCell key='hour_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>
							1時間料金&nbsp;<FontAwesomeIcon icon={faTimes}/>&nbsp;時間
						</TableCell>
						<TableCell key='week_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>担保</TableCell>
						<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>総支払額</TableCell>
					</TableHead>
					<TableBody>
						<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
							<FontAwesomeIcon icon={faYenSign}/>{onehourPrice}&nbsp;
							<FontAwesomeIcon icon={faTimes}/>&nbsp;
							{lentTimeValue}時間&nbsp;=&nbsp;<FontAwesomeIcon icon={faYenSign}/>{price}
						</TableCell>
						<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
							<FontAwesomeIcon icon={faYenSign}/>{tanpo}
						</TableCell>
						<TableCell align='center' style={{color:green[300], fontSize:"17px", fontWeight:"900"}}>
						<FontAwesomeIcon icon={faYenSign}/>{totalPayment}
						</TableCell>
					</TableBody>
				</Table>
			)
		}
		if(value==='oneday'){
			var price = (lentTimeValue * onedayPrice);
			var totalPayment = (price + tanpo);
			return(
				<Table stickyHeader aria-label="sticky table" style={{width:"450px", marginBottom:"10px"}}>
					<TableHead>
						<TableCell key='hour_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>
							1日料金&nbsp;<FontAwesomeIcon icon={faTimes}/>&nbsp;日
						</TableCell>
						<TableCell key='week_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>担保</TableCell>
						<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>総支払額</TableCell>
					</TableHead>
					<TableBody>
						<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
							<FontAwesomeIcon icon={faYenSign}/>{onedayPrice}&nbsp;
							<FontAwesomeIcon icon={faTimes}/>&nbsp;
							{lentTimeValue}日&nbsp;=&nbsp;<FontAwesomeIcon icon={faYenSign}/>{price}
						</TableCell>
						<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
							<FontAwesomeIcon icon={faYenSign}/>{tanpo}
						</TableCell>
						<TableCell align='center' style={{color:green[300], fontSize:"17px", fontWeight:"900"}}>
						<FontAwesomeIcon icon={faYenSign}/>{totalPayment}
						</TableCell>
					</TableBody>
				</Table>
			)
		}
		if(value==='oneweek'){
			var price = (lentTimeValue * oneweekPrice);
			var totalPayment = (price + tanpo);
			return(
				<Table stickyHeader aria-label="sticky table" style={{width:"450px", marginBottom:"10px"}}>
					<TableHead>
						<TableCell key='hour_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>
							1週間料金&nbsp;<FontAwesomeIcon icon={faTimes}/>&nbsp;週間
						</TableCell>
						<TableCell key='week_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>担保</TableCell>
						<TableCell key='assure_fee' align='center' style={{fontSize:"17px", fontWeight:"900"}}>総支払額</TableCell>
					</TableHead>
					<TableBody>
						<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
							<FontAwesomeIcon icon={faYenSign}/>{oneweekPrice}&nbsp;
							<FontAwesomeIcon icon={faTimes}/>&nbsp;
							{lentTimeValue}週間&nbsp;=&nbsp;<FontAwesomeIcon icon={faYenSign}/>{price}
						</TableCell>
						<TableCell align='center' style={{color:"white", fontSize:"17px", fontWeight:"900"}}>
							<FontAwesomeIcon icon={faYenSign}/>{tanpo}
						</TableCell>
						<TableCell align='center' style={{color:green[300], fontSize:"17px", fontWeight:"900"}}>
						<FontAwesomeIcon icon={faYenSign}/>{totalPayment}
						</TableCell>
					</TableBody>
				</Table>
			)
		}
	}


	const ValidationTextField = withStyles({
		root: {
		  '& input:valid + fieldset': {
			borderColor: 'green',
			borderWidth: 2,
		  },
		  '& input:invalid + fieldset': {
			borderColor: 'red',
			borderWidth: 2,
		  },
		  '& input:valid:focus + fieldset': {
			borderLeftWidth: 6,
			padding: '4px !important', // override inline-style
		  },
		},
	  })(TextField);

	const CssTextField = withStyles({
		root: {
		  '& label.Mui-focused': {
			color: 'green',
		  },
		  '& .MuiInput-underline:after': {
			borderBottomColor: 'green',
		  },
		  '& .MuiOutlinedInput-root': {
			'& fieldset': {
			  borderColor: 'red',
			},
			'&:hover fieldset': {
			  borderColor: 'yellow',
			},
			'&.Mui-focused fieldset': {
			  borderColor: 'green',
			},
		  },
		},
	  })(TextField);
	
	return (
		<div>
			<Box border={1} borderColor="primary.main" className={classes.box}>
				<Grid container direction="column" justify="center" alignItems="center">
					<RadioGroup row className={classes.formControl} value={value} onChange={handleValue}>
						<FormControlLabel
							value="onehour"
							control={<Radio color="default" className={classes.radio}/>}
							label="1時間"
							labelPlacement="start"
						/>
						<FormControlLabel
							value="oneday"
							control={<Radio color="default" className={classes.radio}/>}
							label="1日"
							labelPlacement="start"
						/>
						<FormControlLabel
							value="oneweek"
							control={<Radio color="default" className={classes.radio}/>}
							label="1週間"
							labelPlacement="start"
						/>
					</RadioGroup>
					<Grid container direction="row" justify="center" alignItems="center" spacing={1} style={{marginTop:"20px"}}>
						<Grid item>
							<FontAwesomeIcon icon={faHourglassStart} style={{fontSize:"25px", marginTop:"20px", marginRight:"10px"}}/>
						</Grid>
						<Grid item>
							<Input label="借りる時間" value={lentTimeValue} className={classes.textField} onChange={handleLentTimeValue} color="primary"/>
							{/* <ValidationTextField label="借りる時間"/>
							<CssTextField
								className={classes.textField}
								label="Custom CSS"
								id="custom-css-outlined-input"
							/> */}
						</Grid>
						<Grid item style={{marginTop:"20px", fontSize:"20px"}}>
							{lentPeriodLabel()}
						</Grid>
					</Grid>
					<Grid style={{marginTop:"30px"}}>{renderPriceTable()}</Grid>
					<Button variant="contained" color="primary" style={{width:"400px", height:"80px", fontSize:"30px", fontWeight:"900", marginTop:"10px"}}>
						リクエストを送る
					</Button>
				</Grid>
			</Box>
		</div>
	);
}



const mapStateProps = (state) => {
    return { item: state.item };
}

export default connect( mapStateProps, { fetchClickedItem })(Request);
