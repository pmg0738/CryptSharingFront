import React from 'react';
import api from '../../../redux/apis';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { fetchUser } from '../../../redux/actions/user';
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

class UserDetail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				name: null,
				follower_num: null,
				follow_num: null,
				item_num: null,
				profile_image: null,
				comment: null,
				following: null,
			},
			evaluations: [
				{rate: 3, comment: "good" },
				{rate: 2, comment: "mm..." },
				{rate: 4, comment: "very good" },
				{rate: 5, comment: "perfect" },
			],
		}
		this.userId = this.props.match.params.id;
	}

	componentWillMount(){
		this.fetchUser();
	}

	fetchUser = async () => {
		const user = await this.props.fetchUser(this.userId);
		this.setState({ user: user })
	}

	fetchEvaluations = () => {
		// 評価を受け取る
		api.get('evaluations/')
			.then(res => {
				this.setState({evaluations: res.data});
			})
	}

	handleFollow = () => {
		const token = localStorage.getItem("token");

		api.post('users/follow/', {
			user_id: this.state.user.user_id,
		}, {
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Token " + token
			},
			data: {
				
			},
		}).then(res => {
				let { user } = this.state;
				user.following = res.data.following;
				this.setState({ user: user })
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
		const { user } = this.state;
		return (
			<Container maxWidth="lg" className="item-post-container">
				<OtherPageProfile
					key="otherPageProfile"
					avatar={user.profile_image}
					evaluation={user.evaluation}
					name={user.name}
					postNum={user.item_num}
					follower={user.follower_num}
					follow={user.follow_num}
					comments={user.comment}
					onClickFollowButton={this.handleFollow}
					isFollow={this.state.user.following}
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
		);
	}
}

const mapStateProps = (store) => {
	return { 
		users: store.users,
		user: store.user
	};
}

export default connect( mapStateProps, { fetchUser })(UserDetail);



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