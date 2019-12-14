import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';

export default class OtherPage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			follow:false,
			followButtonLabel:'フォローする',
			// followButtonColor:''
		}
	}

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

	handleFollowButton = () =>{
		if (this.state.follow == true) {
			this.setState({followButtonLabel:'フォローする'});
			this.setState({follow:false});
		}else {
			this.setState({followButtonLabel:'フォロー中'});
			this.setState({followButtonColor:'primary'})
			this.setState({follow:true});
		} 

	}
	render() {
		return (
			<div>
				<Container maxWidth="lg" style={styles.otherPageContainer}>
					<Grid container direction="row">
						<Grid container sm={12} md={4} >
							<Grid container direction="row"  justify="center">
								<Avatar style={styles.avatar} src={this.props.avatar} />
							</Grid>
							<Grid container direction="row" style={styles.otherPageStar} justify="center">
								{this.renderStar(this.props.evaluation)}
								<p style={styles.starValue}>({this.props.evaluation})</p>
							</Grid>
							
						</Grid>
						<Grid sm={12} md={8} direction="column" style={styles.profile}>
							<Grid container direction="row" justify="flex-start">
								<Grid style={styles.otherPageName}>
									{this.props.name}
								</Grid>
                                <Grid style={styles.followButton}>
                                    <Button onClick={this.handleFollowButton} variant='contained' color={this.state.followButtonColor}>
                                        {this.state.followButtonLabel}
                                    </Button>
                                </Grid>
							</Grid>
							<Grid container direction="row" justify="flex-start">
								<Grid style={styles.otherPagePostNum}>
                                    投稿：{this.props.postNum} 件  
								</Grid>
								<Grid style={styles.otherPageFollower}>
									フォロワー：{this.props.follower}人
								</Grid>
								<Grid style={styles.otherPageFollow}>
									フォロー：{this.props.follow}人
								</Grid>
							</Grid>
							<Grid container direction="row" justify="flex-start" style={styles.otherPageSelfIntroduce}>
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
	otherPageContainer:{
        color:'white'
    },

	avatar:{
		marginTop:'20px',
		width:'150px',
		height:'150px'
	},

	otherPageStar:{
		marginTop:'20px'
	},

	profile:{
	
	},

	otherPageName:{
		// color:'black',
		fontSize:'50px'
    },
    
    followButton:{
		marginTop:'25px',
		marginLeft:'20px',
		
    },


	otherPagePostNum:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
		marginRight:'20px'
	},

	otherPageFollower:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
		marginRight:'20px'
	},

	otherPageFollow:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
	},

	otherPageSelfIntroduce:{
		marginTop:'20px',
		// color:'black',
		fontSize:'20px',
		marginBottom:'20px'
	},

	starValue: {
		fontSize: '20px',
		marginTop: '10px',
	}

}