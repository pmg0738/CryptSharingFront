import React from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { fetchMyData } from '../../../redux/actions/user';
// Material UI
import { Grid } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import CallReceivedIcon from '@material-ui/icons/CallReceived';
import { green, red, blue, lime, orange } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import TabsMaterial from '@material-ui/core/Tabs';
import TabMaterial from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

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


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart, faYenSign, faTimes} from '@fortawesome/free-solid-svg-icons'

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
			}
		}
	}

	componentWillMount = async () => {
		// store.meが空の場合
		if(Object.keys(this.props.me).length==0) {
			const myData = await this.props.fetchMyData();
			this.setState({ me: myData });
		} else {
			this.setState({ me: this.props.me })
		}
	}

	render() {
		const { me } = this.state;
		console.log('me', me);

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
				/>
				<Grid container direction="row" style={styles.tabBox}>
					<Container>
						<Tabs defaultActiveKey="requesting" id="uncontrolled-tab-example">
							<Tab eventKey="rent-now" title="現在利用中" style={{color:"black"}}>
							<ExpansionPanel style={{marginTop:"10px", backgroundColor: green[300]}}>
									<ExpansionPanelSummary expandIcon={<SendIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>借りてるもの</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageRentNow/>		
									</ExpansionPanelDetails>
								</ExpansionPanel>
								<ExpansionPanel style={{backgroundColor: blue[300]}}>
									<ExpansionPanelSummary expandIcon={<CallReceivedIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>貸し出し中</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageRentNow/>
									</ExpansionPanelDetails>
								</ExpansionPanel>
							</Tab>
							<Tab eventKey="requesting" title="リクエスト中">
								<ExpansionPanel style={{marginTop:"10px", backgroundColor: green[300]}}>
									<ExpansionPanelSummary expandIcon={<SendIcon style={{color:"#ea4335"}}/>}>
										<Typography style={{fontSize:"20px", fontWeight:"900"}}>送った リクエスト</Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<MyPageBooked
											type="sent"
										/>
									</ExpansionPanelDetails>
								</ExpansionPanel>
								<ExpansionPanel style={{backgroundColor: blue[300]}}>
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
			</Grid>
		);
	}
}


const mapStateProps = (store) => {
	return { me: store.me };
}

export default connect( mapStateProps, { fetchMyData })(Mypage);
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


// function DisabledTabs() {
// 	const [value, setValue] = React.useState(2);
  
// 	const handleChange = (event, newValue) => {
// 	  setValue(newValue);
// 	};
  
// 	return (
// 	  <Paper square>
// 		<TabsMaterial
// 		  value={value}
// 		  indicatorColor="primary"
// 		  textColor="primary"
// 		  onChange={handleChange}
// 		  aria-label="disabled tabs example"
// 		>
// 		  <TabMaterial label="Octive" style={{fontSize:"30px"}}/>
// 		  <TabMaterial label="Ectasdf"/>
// 		  <TabMaterial label="Pctive" />
// 		</TabsMaterial>
// 		<Typography
// 			component="div"
// 			role="tabpanel"
// 			value={value}
// 			index="two"
// 			// hidden={value !== index}
// 		>
// 		</Typography>
// 	  </Paper>
// 	);
//   }