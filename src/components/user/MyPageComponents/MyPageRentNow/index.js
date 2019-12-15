import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

import {
	Container,
	Row,
	Col,
  } from 'react-bootstrap';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TextField from '@material-ui/core/TextField';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { green, red, blue } from '@material-ui/core/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart, faYenSign, faClock} from '@fortawesome/free-solid-svg-icons'


import eraiza from '../../../../images/eraiza.png';
import cup from '../../../../images/carry_bag.jpg';
import yoni from '../../../../images/cup.jpg';
import drake from '../../../../images/drake.jpg';


export default class MyPageRentNow extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: [],
		}
	}

	componentWillMount() {
		this.getRentNowItems();
	}

	getRentNowItems = () => {
		const items = {
			"3": {
				id: "3",
				price: 10,
				image: eraiza,
			}
		}

		this.setState({items: items})
	}

	renderStar = (valueOfPostUser) =>{

		let FullStar = <StarIcon style={{color:"#FBBC05", marginTop:"10px", width:"20px", height:"20px"}}/>;
		let HalfStar = <StarHalfIcon style={{color:"#FBBC05", marginTop:"10px", width:"16px", height:"16px"}}/>;
		let EmptyStar = <StarBorderIcon style={{color:"#FBBC05", marginTop:"10px", width:"16px", height:"16ypx"}}/>;

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

	renderButton = (type) =>{
		if(type==='using'){
			return(
				<div>
					<Button variant="outlined" color="primary" style={{width:"100px", height:"40px", marginLeft:"180px", fontWeight:"900"}}>返却完了</Button>
				</div>
			);
		}
		if(type==='lending'){
			return(
				<Button variant="outlined" color="secondary" style={{width:"130px", height:"40px",marginLeft:"180px", fontWeight:"900"}}>コードを送る</Button>
			)
		}
	}

	render() {
		const { items } = this.state;

		return (
			<Card style={{width:"1000px", height:"200px"}}>
			<Grid container direction="row">
				<Grid md={2} style={{marginLeft:"15px"}}>
					<img src={cup} style={{width:"160px", height:"160px", marginTop:"20px"}}/>
				</Grid>
				<Grid md={4} container direction="column" justify="center" alignItems="center" style={{marginLeft:"20px"}}>
					<div style={{fontSize:"20px", fontWeight:"900", marginTop:"20px"}}>{this.props.itemName}キャリーバック</div>
					<Table stickyHeader aria-label="sticky table" style={{width:"350px", marginTop:"15px"}}>
						<TableHead style={{color:blue[200]}}>
							<TableCell key='hour_fee' align='center' style={{fontSize:"30px", fontWeight:"900"}}>残り時間</TableCell>
						</TableHead>
						<TableBody>
							<TableCell align='center' style={{fontSize:"25px", fontWeight:"900"}}>
								<FontAwesomeIcon icon={faClock} style={{fontSize:"30px", marginRight:"5px"}}/>
								1Day 17Hour 42Min
							</TableCell>
						</TableBody>
					</Table>
				</Grid>
				<Grid md={5} container direction="column" style={{marginTop:"20px"}}>
					<Grid container direction="row">
						<Avatar src={drake} style={{width:"60px", height:"60px"}}/>
						<Link to=''>
							<div style={{color:"black", fontSize:"20px", fontWeight:"600",marginTop:"10px",marginLeft:"10px"}}>champagnepapi</div>
						</Link>
						<div style={{marginTop:"15px", marginLeft:"10px", opacity:"0.5"}}>福岡県</div>
						<div style={{marginLeft:"10px", marginTop:"8px"}}>{this.renderStar(5)}(5)</div>
					</Grid>
					<Grid container direction="row">
						<FontAwesomeIcon icon={faHourglassStart} style={{marginTop:"20px", fontSize:"30px", marginLeft:"80px"}}/>
						<div style={{marginTop:"10px", fontSize:"30px", marginLeft:"10px", fontWeight:"900"}}>3Days</div>
						<FontAwesomeIcon icon={faYenSign} style={{marginTop:"20px", fontSize:"30px", marginLeft:"50px"}}/>
						<div style={{marginTop:"10px", fontSize:"30px", marginLeft:"10px", fontWeight:"900"}}>300</div>
					</Grid>
					<Grid container direction="row" style={{marginTop:"20px"}}>
						{this.renderButton(this.props.type)}
					</Grid>
				</Grid>
			</Grid>
		</Card>
		);
	}
}

