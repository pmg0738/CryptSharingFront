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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import Box from '@material-ui/core/Box';

// Material UI Layout
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import OtherPageProfile from '../../../components/user/OtherPageComponent/OtherPageProfile';

import drake from '../../../images/drake.jpg';
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
				{rate: 4.7, comment: "スピーカーの音質に対して安い値段！！" ,date:"2019/12/10"},
				{rate: 5, comment: "可愛い人でした！！！" ,date:"2019/11/27"},
				{rate: 1.8, comment: "初期不良で広範囲のドット落ち？でした。即アマゾンさんにて返金してもらいました。" ,date:"2019/10/8"},
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
			this.state.evaluations.map((item) =>
			<Box borderBottom={1} style={{marginBottom:"20px"}}>
				<Grid container direction="column" style={{marginBottom:"20px"}}>
					<Grid container direction="row">
						<Avatar src={drake} style={{height:"70px", width:"70px"}}></Avatar>
						<div style={{backgroundColor:"white", fontSize:"20px", fontWeight:"600",marginLeft:"20px", marginTop:"15px"}}>drake_1023</div>
						<div style={{opacity:"0.5", marginLeft:"40px", marginTop:"15px"}}>{item.date}</div>
					</Grid>
					<Rating value={item.rate} precision={0.1} readOnly size="large" style={{marginLeft:"85px"}}/>
					<div style={{backgroundColor:"white", marginTop:"30px", marginLeft:"85px", fontSize:"17px", fontWeight:"700"}}>{item.comment}</div>
				</Grid>
			</Box>	
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
				<Tabs defaultActiveKey="getValue" id="uncontrolled-tab-example">
					<Tab eventKey="rent-now" title="投稿一覧" style={{color:"black"}}>
						
					</Tab>
					<Tab eventKey="getValue" title="貰った 評価" className="mypage-used-history">
						<ExpansionPanel style={{marginTop:"10px"}} defaultExpanded={true}>
							<ExpansionPanelSummary>
								<Typography style={{fontSize:"20px", fontWeight:"900"}}>From User</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Grid sm={12}>
									{this.renderEvaluations()}
								</Grid>
							</ExpansionPanelDetails>
						</ExpansionPanel>
						<ExpansionPanel defaultExpanded={true}>
							<ExpansionPanelSummary>
								<Typography style={{fontSize:"20px", fontWeight:"900"}}>From Owner</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<Grid sm={12}>
									{this.renderEvaluations()}
								</Grid>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</Tab>
					<Tab eventKey="GiveValue" title="挙げた 評価">
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