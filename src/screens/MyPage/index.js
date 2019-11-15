import React from 'react';
import './style.scss';

import { Button, Card, Container, Col, Form, Row,
	ListGroup, Tabs, Tab,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

// コンポーネント
import Item from '../../components/Item';
import MyPageBooked from '../../components/MyPageComponents/MyPageBooked';
import MyPageFavorite from '../../components/MyPageComponents/MyPageFavorite';
import MyPagePosted from '../../components/MyPageComponents/MyPagePosted';
import MyPageRentNow from '../../components/MyPageComponents/MyPageRentNow';
import MyPageUsedHistory from '../../components/MyPageComponents/MyPageUsedHistory';
import Navbar from '../../components/NavbarNoLogo';
// 画像
import logo from '../../images/logo.png';

export default class MainSearch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<Container>
					<Tabs defaultActiveKey="rent-now" id="uncontrolled-tab-example">
						<Tab eventKey="rent-now" title="レンタル中">
							<MyPageRentNow/>
						</Tab>
						<Tab eventKey="requesting" title="リクエスト">
							<div className="my-page-tab-explanation">届いた リクエスト</div>
							<MyPageBooked/>
							<div className="my-page-tab-explanation">リクエスト中</div>
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
		);
	}
}
