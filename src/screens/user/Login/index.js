import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import './style.scss';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

import backgroundImage from '../../../images/space.png';
// import leftImagep from '../../../images/logo-background.png';
import logo from '../../../images/logo-login.png';


const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #886Dff 30%, #4285F4 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(130, 105, 255, .3)',
		color: 'white',
		fontSize: 20,
		fontWeight: "bold",
		height: 60,
		marginTop: 20,
		padding: '0 30px',
		width: "100%",
	},
});

const login = async (email, password, props, done) => {
	const response = await axios.post('https://challecara-pok-2019.lolipop.io/api/v1/users/token/', {
	// const response = await axios.post('http://localhost:8000/api/v1/users/token/', {
		email: email,
		password: password
	}).catch(() => {
		done();
		alert("ログイン失敗");
	})


	if(response && response.status===200){
		const token = response.data.token;
		// トークンをcookieまたはストアに保存
		localStorage.setItem('token', token);
		// ホーム画面に移動
		props.history.push('/');
		
		done();
	}
}



export default function Login(props) {

	const classes = useStyles();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = React.useState(false);

	return(
		<div>
			<img src={backgroundImage} className="background-image"/>
			<Container maxWidth="lg" className="item-post-container">
				<Card style={styles.card}>
						<div className="login-card-inside-contaienr">
							<div className="login-card-left-container">
								{/* <img src={leftImageba} className="login-left-image"/> */}
							</div>
							<div className="login-card-right-container">
								<img src={logo} className="login-logo"/>
								<TextField
									required
									label="Email"
									placeholder="Email"
									// className={classes.textField}
									margin="normal"
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									variant="outlined"
									style={styles.textField}
								/>
								<TextField
									required
									label="Password"
									placeholder="Password"
									className={classes.textField}
									margin="normal"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									variant="outlined"
									style={styles.textField}
								/>
								<Button 
									// style={styles.loginButton}
									className={classes.root}
									onClick={() => {
										setLoading(true);
										login(email, password, props, () => setLoading(false))
									}}
								>L O G I N</Button>
								<Link to='/signup'>
									<p className="login-sign-up-button">新規登録はこちら</p>
								</Link>
							</div>
						</div>
						
				</Card>
				
			</Container>
				<Dialog
					open={loading}
					// onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">ログイン処理中</DialogTitle>
					<DialogContent>
						<CircularProgress
							variant="indeterminate"
							disableShrink
							// className={classes.bottom}
							thickness={4}
						/>
					</DialogContent>
				</Dialog>
		</div>
	)
}


const styles = {
	card: {
		backgroundColor: "#ffffff",
		height: 1000,
		// height: "80%",
		// position: "fixed",
		// top: 0,
		// left: 0,
	},
	textField: {
		background: "#ffffff",
		backgroundColor: "#ffffff",
		marginTop: 20,
		width: "100%",
	},
	loginButton:{
		// position:"fixed",
		// bottom:"100px",
		// right:"100px",
		// width:"300px",
		// height:"200px",
		// backgroundColor:"yellow",
		// color:"blue",
	}
}
