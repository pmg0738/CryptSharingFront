import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';

export default class UserProfile extends React.Component {
    constructor(props){
        super(props);

        this.state = {

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
    

    render() {
        return (
            <div>
                <Container>
                    <Grid container direction="row">
                        <Grid container sm={12} md={3} >
                            <Link to='/users/:id'>
                                <Avatar style={styles.userProfileAvatar} src={this.props.avatar} />
                            </Link> 
                        </Grid>
                        <Grid container sm={12} md={9} >
                            <Grid container direction="row" justify="">
                                <Link to='/users/:id'>
                                    <Grid style={styles.userProfileName}>
                                        {this.props.name}
                                    </Grid>
                                </Link>
                                <Grid style={styles.userProfilePrefecture}>
                                    {this.props.prefecture}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="" style={styles.userProfileStar}>
                                {this.renderStar(this.props.evaluation)}
                                <p style={styles.starValue}>({this.props.evaluation})</p>
                            </Grid>
                        </Grid> 

                    </Grid>

                </Container>
            </div>
        )
    }
}


const styles = {
    userProfileAvatar:{
        marginTop:'10px',
        width:'100px',
        height:'100px'
    },

    userProfileStar:{
        marginTop:'20px',
    },

    starValue:{
        fontSize:'20px',
        marginTop:'10px',
        color:'white'
    },

    userProfileName:{
        color:'white',
        fontSize:'25px'
    },

    userProfilePrefecture:{
        color:'white',
        fontSize:'25px',
        marginLeft:'20px'
    },



}