import React from 'react';
import api from '../../../redux/apis';
import './style.scss';

// Material UI component
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Rating from '@material-ui/lab/Rating';
// Material UI Layout
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import OtherPageProfile from '../../../components/user/OtherPageComponent/OtherPageProfile';
import eraiza from '../../../images/logo.png';

import { 
	Tabs,
	Tab
} from 'react-bootstrap';

export default class UserDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			evaluations: [
				{rate: 3, comment: "good" },
				{rate: 2, comment: "mm..." },
				{rate: 4, comment: "very good" },
				{rate: 5, comment: "perfect" },
			],
		}
	}

	fetchEvaluations = () => {
		// 評価を受け取る
		api.get('evaluations/')
			.then(res => {
				console.log('evaluations', res.data);
				this.setState({evaluations: res.data});
			})
	}

	renderEvaluations = () => {
		return (
			this.state.evaluations.map((item) => <Grid item md={8} lg={12}>
				<Card style={styles.card}>
					<CardContent>
						<Grid container spacing={2}>
							<div style={styles.rateContainer}>
								<Rating name="half-rating" value={item.rate} precision={0.5} readOnly size="large"/>({item.rate})
							</div>
							<div className="profile-container" style={styles.profileContainer}>
								<div className="avatar-container">
									<Avatar alt="Remy Sharp" src="http://challecara-pok-2019.lolipop.io/images/images/S__23519281.jpg"
										style={styles.avatar}
										className="avatar"
									/>
								</div>
								<div className="name">Hayato Koba</div>
							</div>
							<div className="comment-container">{item.comment}</div>
						</Grid>
					</CardContent>
					</Card>
				</Grid>
			)
		);
	}

	render() {
		return (
			<Container maxWidth="lg" className="item-post-container">
				<OtherPageProfile
					avatar={eraiza}
					evaluation="3.5"
					name="Bitch"
					postNum="1,235"
					follower="995"
					follow="857"
					comments="my name is ELAIZA IKEDA. my name is ELAIZA IKEDA. my name is ELAIZA IKEDA."
				/>
				<Tabs defaultActiveKey="requesting" id="uncontrolled-tab-example">
					<Tab eventKey="rent-now" title="投稿一覧" style={{color:"black"}}>
						
					</Tab>
					<Tab eventKey="used-history" title="Get ★" className="mypage-used-history">
						{this.renderEvaluations()}
					</Tab>
					<Tab eventKey="posted-history" title="Give ★">
						{this.renderEvaluations()}
					</Tab> 
				</Tabs>
			</Container>
		)
	}
}


const styles = {	
	avatar: {
		height: 60,
		width: 60,
		// backgroundColor: "#ff00ff",
	},
	avatarContainer: {
		// backgroundColor: "#ff9900",
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		// width: 70,
	},
	container: {
		// backgroundColor: "#ff6967",
		// textAlign: "center",
		// alignItems: "center",
	},
	card: {
		marginBottom: 10,
	},
	nameContainer: {
		// backgroundColor: "#8790f2",
		color: "#555555",
		fontWeigth: "bold",
		paddingLeft: 10,
		paddingRight: 10,
		// width: 200,
	},
	rateContainer: {
		// backgroundColor: "#879002",
		flexDirection: "row",
		position: "relative",
		// width: 400,
		// width: "100%"
		width: 200
	},
	profileContainer: {
		// backgroundColor: "#ff9999",
		// width: 400,
		// width: "100%" - ,
	}
}