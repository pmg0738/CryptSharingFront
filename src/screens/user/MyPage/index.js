import React from 'react';
import './style.scss';
// Redux
import { connect } from 'react-redux';
import { fetchMyData } from '../../../redux/actions/user';
// Material UI
import { Grid } from '@material-ui/core';
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


// マイページ
class Mypage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			me: {
				user_id: null,
				name: null,
				profile_image: null,
				follow_num: null,
				follower_num: null,
				evaluation: null,
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
					postNum={2}
					follower={me.follower_num}
					follow={me.follow_num}
					comments="my name is ELAIZA IKEDA. my name is ELAIZA IKEDA. my name is ELAIZA IKEDA."
				/>
				<Grid container direction="row" style={styles.tabBox}>
					<Container>
						<Tabs defaultActiveKey="rent-now" id="uncontrolled-tab-example">
							<Tab eventKey="rent-now" title="レンタル中">
								<MyPageRentNow/>
							</Tab>
							<Tab eventKey="requesting" title="リクエスト中">
								<div className="my-page-tab-explanation">送ったリクエスト</div>
								<MyPageBooked/>
								<div className="my-page-tab-explanation">来たリクエスト</div>
								<MyPageBooked/>
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
