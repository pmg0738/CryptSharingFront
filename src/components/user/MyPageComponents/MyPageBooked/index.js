import React from 'react';
import {Link} from 'react-router-dom';

import './style.scss';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { green, blue } from '@material-ui/core/colors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart, faYenSign} from '@fortawesome/free-solid-svg-icons'



export default class MyPageBooked extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			items: [],
		}
	}

	componentWillMount() {
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
		if(type==='received'){
			return(
				<div>
					<Button variant="outlined" color="primary" style={{width:"100px", height:"40px", marginLeft:"100px", fontWeight:"900"}}>承認</Button>
					<Button variant="outlined" color="secondary" style={{width:"100px", height:"40px",marginLeft:"50px", fontWeight:"900"}}>拒否</Button>
				</div>
			);
		}
		if(type==='sent'){
			return(
				<Button variant="outlined" color="secondary" style={{width:"100px", height:"40px",marginLeft:"180px", fontWeight:"900"}}>取り消し</Button>
			)
		}
	}

	render() {
		return (
				<Card style={{width:"1100px", }}>
					<Grid container direction="row">
						<Grid container direction="column" sm={12} md={2} justify="center" alignItems="center" style={{marginLeft:"15px"}}>
							<img src={" "} alt="" style={{width:"160px", height:"160px", marginTop:"20px"}}/>
						</Grid>
						<Grid container direction="column" sm={12} md={4} >
							<Grid container direction="row" justify="center">
								<div style={{fontSize:"20px", fontWeight:"900", marginTop:"20px"}}>{this.props.itemName}キャリーバック</div>
							</Grid>
							<Grid container direction="row" justify="center" style={{marginLeft:"20px"}}>
								<Table stickyHeader aria-label="sticky table" style={{width:"300px", marginTop:"15px", }}>
									<TableHead style={{color:blue[200]}}>
										<TableCell key='hour_fee' align='center' style={{fontSize:"14px", fontWeight:"900"}}>1時間</TableCell>
										<TableCell key='day_fee' align='center' style={{fontSize:"14px", fontWeight:"900"}}>1日</TableCell>
										<TableCell key='week_fee' align='center' style={{fontSize:"14px", fontWeight:"900"}}>1週間</TableCell>
										<TableCell key='assure_fee' align='center' style={{fontSize:"14px", fontWeight:"900"}}>担保</TableCell>
									</TableHead>
									<TableBody>
										<TableCell align='center' style={{fontSize:"15px", fontWeight:"900"}}>￥10</TableCell>
										<TableCell align='center' style={{fontSize:"15px", fontWeight:"900", color: green[500]}}>￥100</TableCell>
										<TableCell align='center' style={{fontSize:"15px", fontWeight:"900"}}>￥500</TableCell>
										<TableCell align='center' style={{fontSize:"15px", fontWeight:"900"}}>￥2000</TableCell>
									</TableBody>
								</Table>
							</Grid>
						</Grid>
						<Grid container sm={12} md={5} direction="column" style={{marginTop:"20px"}}>
							<Grid container direction="row" justify="center">
								<Avatar src={" "} style={{width:"60px", height:"60px"}}/>
								<Link to=''>
									<div style={{color:"black", fontSize:"20px", fontWeight:"600",marginTop:"10px",marginLeft:"10px"}}>champagnepapi</div>
								</Link>
								<div style={{marginTop:"15px", marginLeft:"10px", opacity:"0.5"}}>福岡県</div>
								<div style={{marginLeft:"10px", marginTop:"8px"}}>{this.renderStar(5)}(5)</div>
							</Grid>
							<Grid container direction="row" justify="center">
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

