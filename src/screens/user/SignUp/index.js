import React, { useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';
import './style.scss';

import { makeStyles } from '@material-ui/core/styles';
// Material UI component
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

// Material Picker
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

import PrefectureSelector from '../../../components/item/FilterComponents/PrefectureSelector';
import GenderRadios from '../../../components/common/GenderRadios';



import backgroundImage from '../../../images/space.png';
// import leftImage from '../../../images/logo-background.png';
import leftImage from '../../../images/color-left-image.png';
import logo from '../../../images/logo-login.png';


const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #ff55A2 30%, #EA4335 90%)',
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



export default function Login(props) {

	const classes = useStyles();

	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [birthday, setBirthday] = useState(null);
	// const [gender, setGenger]     = useState(0);
	// const [familyName, setFamilyName] = useState("");
	// const [givenName, setGivenName]   = useState("");
	// const [prefecture, setPrefecture] = useState("");
	// const [city, setCity]             = useState("");

	const [email, setEmail] = useState("a@c.com");
	const [password, setPassword] = useState("password");
	const [birthday, setBirthday] = useState("1998/10/23");
	const [gender, setGenger]     = useState(1);
	const [familyName, setFamilyName] = useState("koba");
	const [givenName, setGivenName]   = useState("hayato");
	const [prefecture, setPrefecture] = useState("福岡県");
	const [city, setCity]             = useState("福岡市");



	const signup = async () => {
		const postData = {
			email:       email,
			password:    password,
			family_name: familyName,
			given_name:  givenName,
			gender:      gender,
			// birthday:    birthday,
			birthday: '1998-10-23',
			// birthday:    birthday.replace('/', '-').replace('/', '-'),
			prefecture:  prefecture,
			city:        city,
		}
		console.log('postData', postData);
		const response = await axios.post('http://localhost:8000/api/v1/users/create/', postData)
			.catch((error) => {
				// console.log('ERROR', error);
				alert("失敗", error);
			})
		console.log('response', response);
	}

	return(
		<div>
			<img src={backgroundImage} className="background-image"/>
			<Container maxWidth="lg" className="item-post-container">
				<Card style={styles.card}>
					<div className="login-card-inside-contaienr">
						<div className="login-card-left-container">
							{/* <img src={leftImage} className="login-left-image"/> */}
						</div>
						<div className="login-card-right-container">
							{/* <img src={logo} className="login-logo"/> */}
							<TextField
								required
								label="Email"
								placeholder="Email"
								// className={classes.textField}
								margin="normal"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								style={styles.textFieldFull}
							/>
							<br/>
							<TextField
								required
								label="Password"
								placeholder="Password"
								margin="normal"
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								style={styles.textFieldFull}
							/>
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
								placeholder="1998/10/23"
								onChange={(date) => setBirthday(date)}
								// KeyboardButtonProps={{
								// 	'aria-label': 'change date',
								// }}
								style={styles.textFieldHalfLeft}
							/>
							</MuiPickersUtilsProvider>
							<GenderRadios onChange={(value) => setGenger(value)}/>
							<br/>
							{/* <TextField
								required
								label="都道府県"
								placeholder="prefecture"
								margin="normal"
								value={prefecture}
								onChange={(e) => setPrefecture(e.target.value)}
								style={styles.textFieldHalfLeft}
							/> */}
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
							<Button className={classes.root}
								onClick={() => signup(email, password, props)}
							>
								SIGN UP</Button>
							<Link to='/login'>
								<p className="login-sign-up-button">ログイン</p>
							</Link>
						</div>
					</div>
				</Card>
			</Container>
		</div>
	);
}



const styles = {
	card: {
		backgroundColor: "#ffffff",
		height: 800
	},
	textFieldHalfLeft: {
		background: "#ffffff",
		backgroundColor: "#ffffff",
		marginTop: 20,
		width: "48%",
		// marginLeft: 10,
	},
	textFieldHalfRight: {
		background: "#ffffff",
		backgroundColor: "#ffffff",
		marginTop: 20,
		width: "48%",
		marginLeft: "4%",
	},
	textFieldFull: {
		background: "#ffffff",
		backgroundColor: "#ffffff",
		marginTop: 20,
		width: "100%",
	}
}
