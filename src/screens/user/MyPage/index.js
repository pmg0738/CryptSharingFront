import React from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { fetchMyData, fetchFollowers, fetchFollowings } from '../../../redux/actions/user';
// Material UI
import { Grid } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import CallReceivedIcon from '@material-ui/icons/CallReceived';

// Bootstrap
import { 
	Container,
	Tabs,
	Tab
} from 'react-bootstrap';
import SettingsIcon from '@material-ui/icons/Settings';
// My Component
import MyPageBooked from '../../../components/user/MyPageComponents/MyPageBooked';
import MyPageFavorite from '../../../components/user/MyPageComponents/MyPageFavorite';
import MyPagePosted from '../../../components/user/MyPageComponents/MyPagePosted';
import MyPageRentNow from '../../../components/user/MyPageComponents/MyPageRentNow';
import MyPageUsedHistory from '../../../components/user/MyPageComponents/MyPageUsedHistory';
import MypageProfile from '../../../components/user/MyPageComponents/MypageProfile';
import UserListDialog from '../../../components/user/UserListDialog';


// マイページ
class Mypage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			me: {
				user_id: null,
				name: null,
				evaluation: null,
				profile_image: null,
				comment: null,
				follow_num: null,
				follower_num: null,
				item_num: null,
			},
			showFollowingDialog: false,
			showFollowerDialog: false,
			followings: [],
			followers: [],
		}
	}

	componentWillMount = () => {
		this.fetchMe();
	}

	fetchMe = async () => {
		// store.meが空の場合
		if(Object.keys(this.props.me).length==0) {
			const myData = await this.props.fetchMyData();
			this.setState({ me: myData });
		} else {
			this.setState({ me: this.props.me })
		}
	}

	onClickFollower = () => {
		this.props.fetchFollowers()
			.then(users => {
				this.setState({ followers: users, showFollowerDialog: true });
			});
	}

	onClickFollowing = () => {
		this.props.fetchFollowings()
			.then(users => {
				this.setState({ followings: users, showFollowingDialog : true });
			});
	}

	render() {
		const { me } = this.state;
		console.log('this.props', this.props);

		return (
			<Grid container direction="column">
				<Grid container direction="row" justify="flex-end">
					<SettingsIcon style={styles.mypageSetting} />
				</Grid>
				<MypageProfile
					id={me.user_id}
					avatar={me.profile_image}
					evaluation={me.evaluation}
					name={me.name}
					postNum={me.item_num}
					follower={me.follower_num}
					follow={me.follow_num}
					comments={me.comment}
					onClickFollower={this.onClickFollower}
					onClickFollowing={this.onClickFollowing}
				/>
				<Grid container direction="row" style={styles.tabBox}>
					<Container>
						<Tabs defaultActiveKey="rent-now" id="uncontrolled-tab-example">
							<Tab eventKey="rent-now" title="現在利用中" style={{color:"black"}}>
							<ExpansionPanel style={{marginTop:"10px"}} defaultExpanded={true}>
									<ExpansionPanelSummary expandIcon={<SendIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>借りてるもの</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageRentNow
											type="using"
										/>		
									</ExpansionPanelDetails>
								</ExpansionPanel>
								<ExpansionPanel defaultExpanded={true}>
									<ExpansionPanelSummary expandIcon={<CallReceivedIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>貸し出し中</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageRentNow
											type="lending"
										/>
									</ExpansionPanelDetails>
								</ExpansionPanel>
							</Tab>
							<Tab eventKey="requesting" title="リクエスト中">
								<ExpansionPanel style={{marginTop:"10px", }} defaultExpanded={true}>
									<ExpansionPanelSummary expandIcon={<SendIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>送った リクエスト</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageBooked
											type="sent"
										/>
									</ExpansionPanelDetails>
								</ExpansionPanel>
								<ExpansionPanel defaultExpanded={true}>
									<ExpansionPanelSummary expandIcon={<CallReceivedIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>届いた リクエスト</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageBooked
											type="received"
										/>
									</ExpansionPanelDetails>
								</ExpansionPanel>
							</Tab>
							<Tab eventKey="used-history" title="使用履歴" className="mypage-used-history">
								<MyPageUsedHistory to= {'/items/4'}/>
								<MyPageUsedHistory to={'/items/4'}/>
								<MyPageUsedHistory to={'/items/4'}/>
							</Tab>
							<Tab eventKey="posted-history" title="投稿済み">
								<MyPagePosted/>
							</Tab> 
							<Tab eventKey="Like" title="お気に入り">
								<MyPageFavorite/>
							</Tab>
						</Tabs>
					</Container>
				</Grid>
				<UserListDialog
					title="フォロワー"
					show={this.state.showFollowerDialog}
					users={this.state.followers}
					close={() => this.setState({ showFollowerDialog: false })}
				/>
				<UserListDialog
					title="フォロー"
					show={this.state.showFollowingDialog}
					users={this.state.followings}
					close={() => this.setState({ showFollowingDialog: false })}
				/>
			</Grid>
		);
	}
}


const mapStateProps = (store) => {
	return {
		me: store.me,
		followings: store.followsing,
		followers: store.followers
	};
}

export default connect( mapStateProps, { fetchMyData, fetchFollowings, fetchFollowers })(Mypage);
const styles = {
	tabBox:{
		marginTop:'30px'
	},

	mypageSetting:{
		marginRight:'20px',
		marginTop:'20px',
		width:'50px',
		height:'50px',
		color:'blue'
	},
}