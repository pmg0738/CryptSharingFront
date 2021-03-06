import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './style.scss';
// web3
// import { createAccount } from '../../../ethereum/account';

import { makeStyles } from '@material-ui/core/styles';
// Material UI component

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
// Material UI Icon
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

// Material Picker
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

import PrefectureSelector from '../../../components/item/FilterComponents/PrefectureSelector';
import GenderRadios from '../../../components/common/GenderRadios';

import backgroundImage from '../../../images/space.png';



const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #ff55A2 30%, #EA4335 90%)',
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
	buttonContainer: {
		paddingTop: 30,
	},
	card: {
		padding: 20,
		width: 1000,
	},
	postButton: {
		background: '#999999',
		
		'&:hover': {
			backgroundColor: '#4285F4',
			borderColor: '#4285F4',
			fontWeight: "bold"
		},
		position: "absolute",
		bottom: 20,
		right: 30,
		paddingLeft: 15,
		paddingRight: 15,
	}
});


export default function Login(props) {
	const classes = useStyles();

	const [birthday, setBirthday]      = useState(null);
	const [gender, setGenger]          = useState(1);
	const [familyName, setFamilyName]  = useState("");
	const [givenName, setGivenName]    = useState("");
	const [prefecture, setPrefecture]  = useState("");
	const [city, setCity]              = useState("");
	const [eoaAddrees, setEoaAddress]  = useState("");
	const [password, setPassword]      = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	// Dialog
	const [showDialog, setShowDialog]  = useState(false);
	const [privateKey, setPrivatetKey] = useState("");


	const signup = async () => {
		if(password===passwordConfirm) {
			// let postData = {
			// 	password: password,
			// 	family_name: familyName,
			// 	given_name:  givenName,
			// 	gender:      gender,
			// 	birthday:    birthday,
			// 	prefecture:  prefecture,
			// 	city:        city,
			// }
	
		// 	const notEmpty = (familyName!="" && givenName!="" &&
		// 		birthday!=null && prefecture!="")
	
		// 	if(notEmpty) {
		// 		const { address, privateKey } = await createAccount(password);
				
		// 		postData['eoa_address'] = address;
	
		// 			api.post('users/create/', postData) .then((res) => {
		// 				setEoaAddress(address);
		// 				setPrivatetKey(privateKey);
		// 				setShowDialog(true);
		// 			})
		// 			.catch((error) => {
		// 				console.log('ERROR', error);
		// 				alert("失敗", error.status);
		// 			})
		// 	} else {
		// 		alert("必須項目を入力してください")
		// 	}
		// } else {
		// 	alert("パスワードが一致しません");
		// 	setPassword("");
		// 	setPasswordConfirm("");
		}
	}

	const handleConfirm = () => {
		setShowDialog(false);
		props.history.push('/');
	}

	const addZero = (num) => {
		if(num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	const onChangeBirthday = (date) => {
		const year  = date.getFullYear();
		const month = addZero(date.getMonth() + 1);
		const day   = addZero(date.getDate());
		setBirthday(`${year}-${month}-${day}`);
	}

	return(
		<div>
			<img alt="" src={backgroundImage} className="background-image"/>
			<Container maxWidth="lg" className="item-post-container">
				<Card style={styles.card}>
					<div className="login-card-inside-contaienr">
						<div className="login-card-left-container">
							{/* <img src={leftImage} className="login-left-image"/> */}
						</div>
						<div className="login-card-right-container">
							{/* <img src={logo} className="login-logo"/> */}
							<br/>
							<TextField
								id="outlined-required"
								required
								label="姓"
								placeholder="Family Name"
								margin="normal"
								value={familyName}
								onChange={(e) => setFamilyName(e.target.value)}
								style={styles.textFieldHalfLeft}
							/>
							<TextField
								required
								label="名"
								placeholder="Given Name"
								margin="normal"
								value={givenName}
								onChange={(e) => setGivenName(e.target.value)}
								style={styles.textFieldHalfRight}
							/>
							<br/>
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								format="yyyy/MM/dd"
								margin="normal"
								id="date-picker-inline"
								label="生年月日"
								value={birthday}
								placeholder="yyyy/mm/dd"
								onChange={onChangeBirthday}
								// KeyboardButtonProps={{
								// 	'aria-label': 'change date',
								// }}
								style={styles.textFieldHalfLeft}
							/>
							</MuiPickersUtilsProvider>
							<GenderRadios onChange={(value) => setGenger(value)}/>
							<br/>
							<PrefectureSelector width={"48%"}
								onChange={(value) => setPrefecture(value)}
							/>
							<TextField
								required
								label="市区町村"
								placeholder="city"
								margin="normal"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								style={styles.textFieldHalfLeft}
							/>
							<TextField
								id="outlined-required"
								required
								label="Password"
								placeholder="Password"
								type="password"
								margin="normal"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								style={styles.textFieldFull}
							/>
							<TextField
								id="outlined-required"
								required
								label="Password Confirm"
								placeholder="Password Confirm"
								type="password"
								margin="normal"
								value={passwordConfirm}
								onChange={(e) => setPasswordConfirm(e.target.value)}
								style={styles.textFieldFull}
							/>
							<Button className={classes.root}
								onClick={() => signup(props)}
							>
								START</Button>
							<Link to='/login'>
								<p className="login-sign-up-button">ログイン画面へ戻る</p>
							</Link>
						</div>
					</div>
				</Card>
			</Container>
			{/* <Dialog maxWidth="lg" onClose={handleClose} aria-labelledby="simple-dialog-title" open={props.show}> */}
			<Dialog maxWidth="lg" aria-labelledby="simple-dialog-title" open={showDialog}>
				<Card className={classes.card}>
					<DialogTitle id="simple-dialog-title">アカウントを作成しました</DialogTitle>
					{/* <p>これがあなたのアカウントの秘密鍵となります</p> */}
					<br/>
					<p>Ethereumアドレス：{eoaAddrees}</p>
					<p>秘密鍵：{privateKey}</p>
					<br/>
					<br/>
					<p>※Ethereumアドレスはログイン時に必要となります</p>
					<p>※この秘密鍵を紙にメモして厳重に保管してください</p>
					<p>※人に秘密鍵を教えてはいけません</p>
					<p>※秘密鍵を忘れた場合アカウントは復元出来ません</p>
						<Button
							size="large"
							className={classes.postButton}
							startIcon={<CheckCircleIcon />}
							onClick={handleConfirm}
						>
							OK
						</Button>
				</Card>
			</Dialog>
		</div>
	);
}



const styles = {
	card: {
		
		height: 800
	},
	textFieldHalfLeft: {
			
		marginTop: 20,
		width: "48%",
		// marginLeft: 10,
	},
	textFieldHalfRight: {
			
		marginTop: 20,
		width: "48%",
		marginLeft: "4%",
	},
	textFieldFull: {
			
		marginTop: 20,
		width: "100%",
	}
}
