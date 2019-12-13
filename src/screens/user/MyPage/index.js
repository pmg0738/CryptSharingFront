import React from 'react';
import './style.scss';
import eraiza from '../../../images/eraiza.png';
import { Grid } from '@material-ui/core';
import { Button, Card, Container, Col, Form, Row,ListGroup, Tabs, Tab,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';

// ???????
import Item from '../../../components/item/ItemCard';
import MyPageBooked from '../../../components/user/MyPageComponents/MyPageBooked';
import MyPageFavorite from '../../../components/user/MyPageComponents/MyPageFavorite';
import MyPagePosted from '../../../components/user/MyPageComponents/MyPagePosted';
import MyPageRentNow from '../../../components/user/MyPageComponents/MyPageRentNow';
import MyPageUsedHistory from '../../../components/user/MyPageComponents/MyPageUsedHistory';
import MypageProfile from '../../../components/user/MyPageComponents/MypageProfile';
import OtherPageProfile from '../../../components/user/OtherPageComponent/OtherPageProfile';
// ??
import logo from '../../../images/logo.png';






export default class Mypage extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<Grid container direction="column">
				<Grid container direction="row" justify="flex-end">
					<SettingsIcon style={styles.mypageSetting} />
				</Grid>
				<OtherPageProfile
					avatar={eraiza}
					star="3.5"
					name="Bitch"
					postNum="1,235"
					follower="995"
					follow="857"
					comments="my name is ELAIZA IKEDA. my name is ELAIZA IKEDA. my name is ELAIZA IKEDA."
				/>
				<MypageProfile
					avatar={eraiza}
					star="3.5"
					name="eraiza_ikd"
					postNum="1,235"
					follower="995"
					follow="857"
					comments="my name is ELAIZA IKEDA. my name is ELAIZA IKEDA. my name is ELAIZA IKEDA."
				/>
				<Grid container direction="row" style={styles.tabBox}>
						<Container>
						<Tabs defaultActiveKey="rent-now" id="uncontrolled-tab-example">
						<Tab eventKey="rent-now" title="?????">
						<MyPageRentNow/>
						</Tab>
						<Tab eventKey="requesting" title="??????">
						<div className="my-page-tab-explanation">????????</div>
						<MyPageBooked/>
						<div className="my-page-tab-explanation">??????</div>
						<MyPageBooked/>
						</Tab>
						<Tab eventKey="used-history" title="????" className="mypage-used-history">
						<MyPageUsedHistory to= {'/items/4'}/>
						<MyPageUsedHistory to={'/items/4'}/>
						<MyPageUsedHistory to={'/items/4'}/>
						</Tab>
						<Tab eventKey="posted-history" title="????">
						<MyPagePosted/>
						</Tab> 
						<Tab eventKey="Like" title="?????">
						<MyPageFavorite/>
						</Tab> 
						</Tabs>
						</Container>
				</Grid>					
			</Grid>
		)
	}

}


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
	}
}
