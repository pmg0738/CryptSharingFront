import React, { useState } from 'react';
import api from '../../../redux/apis';
import { Link } from 'react-router-dom';

import './style.scss';

import { makeStyles } from '@material-ui/core/styles';
// Material UI Component
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import backgroundImage from '../../../images/space.png';
import logo from '../../../images/logo-login.png';


const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #886Dff 30%, #4285F4 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(130, 105, 255, .3)',
		fontSize: 20,
		fontWeight: "bold",
		height: 60,
		marginTop: 20,
		padding: '0 30px',
		width: "100%",
	},
});


export default function Login(props) {
	const classes = useStyles();

	const [eoaAddress, setEoaAddress] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = React.useState(false);


	const login = async (eoaAddress, password, props) => {
		api.post('users/token/', {
			eoa_address: eoaAddress,
			password: password
		})
		.then(response => {
			const token = response.data.token;
			localStorage.setItem('token', token);
			localStorage.setItem('eoaAddress', eoaAddress);
			setTimeout(() => {
				props.history.push('/');
			}, 1000)
		})
		.catch((error) => {
			console.log('error', error);
			alert("ログイン失敗");
			setLoading(false);
		})
	}

	

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
									label="Ethereumアドレス"
									placeholder="0xb48D3exxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
									margin="normal"
									value={eoaAddress}
									onChange={(e) => setEoaAddress(e.target.value)}
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
									className={classes.root}
									onClick={() => {
										setLoading(true);
										login(eoaAddress, password, props)
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
							thickness={4}
						/>
					</DialogContent>
				</Dialog>
		</div>
	)
}


const styles = {
	card: {
		
		height: 1000,
	},
	textField: {
		
		
		marginTop: 20,
		width: "100%",
	},
}
