import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import eraiza from '../../../../images/eraiza.png';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import { fontSize, border, borderColor } from '@material-ui/system';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import { borders } from '@material-ui/system';

export default class Mypage extends React.Component {

	renderStar = (valueOfPostUser) =>{

		let FullStar = <StarIcon style={{color:"#FBBC05", marginTop:"10px", width:"30px", height:"30px"}}/>;
		let HalfStar = <StarHalfIcon style={{color:"#FBBC05", marginTop:"10px", width:"30px", height:"30px"}}/>;
		let EmptyStar = <StarBorderIcon style={{color:"#FBBC05", marginTop:"10px", width:"30px", height:"30px"}}/>;
	   
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
				<Container maxWidth="lg" style={styles.mypageContainer}>
					<Grid container direction="row">
						<Grid container sm={12} md={4} >
							<Grid container direction="row" style={styles.avatar} justify="center">
								<Avatar style={styles.eraiza} src={this.props.avatar} />
							</Grid>
							<Grid container direction="row" style={styles.mypageStar} justify="center">
								{this.renderStar(this.props.star)}
							</Grid>
							
						</Grid>
						<Grid sm={12} md={8} direction="column" style={styles.profile}>
							<Grid container direction="row" justify="space-between">
								<Grid style={styles.mypageName}>
									{this.props.name}
								</Grid>
								<Grid>
									<SettingsIcon style={styles.mypageSetting} />
								</Grid>
							</Grid>
							<Grid container direction="row" justify="flex-start">
								<Grid style={styles.mypagePostNum}>
                                    投稿：{this.props.postNum} 件  
								</Grid>
								<Grid style={styles.mypageFollower}>
									フォロワー：{this.props.follower}人
								</Grid>
								<Grid style={styles.mypageFollow}>
									フォロー：{this.props.follow}人
								</Grid>
							</Grid>
							<Grid container direction="row" justify="flex-start" style={styles.mypageSelfIntroduce}>
                                {this.props.comments}
							</Grid>
						</Grid>

					</Grid>
				</Container>
			</div>
		)
	}

}


const styles = {
	mypageContainer:{
        color:'white'
    },

	eraiza:{
		marginTop:'20px',
		width:'150px',
		height:'150px'
	},

	mypageStar:{
		marginTop:'20px'
	},

	profile:{
	
	},

	mypageName:{
		// color:'black',
		fontSize:'50px'
	},

	mypageSetting:{
		marginRight:'20px',
		marginTop:'20px',
		width:'50px',
		height:'50px',
		color:'blue'
	},

	mypagePostNum:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
		marginRight:'20px'
	},

	mypageFollower:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
		marginRight:'20px'
	},

	mypageFollow:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
	},

	mypageSelfIntroduce:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
		marginBottom:'20px'
	}

}