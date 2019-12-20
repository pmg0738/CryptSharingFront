import React from 'react';
// Material UI
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { List, ListItem } from '@material-ui/core';
import UserProfile from '../../components/user/UserProfileComponent';

export default function UserListDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
	setOpen(true);
  };

  const handleClose = () => {
	setOpen(false);
  };

  const renderStar = (valueOfPostUser) =>{

	let FullStar = <StarIcon        style={{color:"#FBBC05", marginTop:"0px", width:"15px", height:"15px"}}/>;
	let HalfStar = <StarHalfIcon    style={{color:"#FBBC05", marginTop:"0px", width:"15px", height:"15px"}}/>;
	let EmptyStar = <StarBorderIcon style={{color:"#FBBC05", marginTop:"0px", width:"15px", height:"15px"}}/>;

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


const renderUser = (user) => {
	console.log('user', user);
	return (
		<Link to={'/users/' + user.user_id} style={styles.link}>
			<ListItem style={styles.listItem} style={styles.listItem}>
				{/* <Grid container sm={12} md={3} > */}
					<Avatar style={styles.userProfileAvatar} src={user.profile_image} />
				{/* </Grid> */}
				<Grid container sm={12} md={9} >
					<Grid container direction="row" justify="">
							<Grid style={styles.userProfileName}>
								{user.name}
							</Grid>
						<Grid style={styles.userProfilePrefecture}>
							{user.prefecture}
						</Grid>
					</Grid>
					<Grid container direction="row" justify="" style={styles.userProfileStar}>
						{renderStar(3.2)}
						{/* {this.renderStar(this.props.evaluation)} */}
						{/* <p style={styles.starValue}>({this.props.evaluation})</p> */}
						<p style={styles.starValue}>({3.2})</p>
					</Grid>
				</Grid>
			</ListItem>
		</Link>
	)
}

  return (
	<div>
		<Dialog maxWidth="lg" open={props.show} onClose={handleClose} aria-labelledby="form-dialog-title">
			<Button style={{fontSize: 20}}
				onClick={props.close}>閉じる</Button>
			<DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
			<DialogContent>
				<List>
					{props.users.map(user => renderUser(user))}
				</List>
				{/* <DialogContentText>
					To subscribe to this website, please enter your email address here. We will send updates
					occasionally.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
				/> */}
			</DialogContent>
			<DialogActions>
			</DialogActions>
		</Dialog>
	</div>
  );
}


const styles = {
	userProfileAvatar: {
		marginTop:'0px',
		width:'50px',
		height:'50px',
		marginRight: '20px',
	},
	userProfileStar: {
		marginTop: '20px',
	},
	starValue: {
		fontSize:'15px',
		marginTop:'10px',
	},
	userProfileName: {
		fontSize:'20px',
		fontWeight: "bold"
	},
	userProfilePrefecture: {
		fontSize:'18px',
		marginLeft:'20px'
	},
	listItem: {
		borderColor: "#000000",
		borderWidth: 1,
		marginBottom: 1
	},
	link: {
		color: "#000000",
	},
}


