import React from 'react';
import './style.scss';

import { Button, Card, Container, Col, Form, Row,
	ListGroup, Tabs, Tab,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import HistoryBooked from '../../components/HistoryComponents/HistoryBooked';
import HistoryPosted from '../../components/HistoryComponents/HistoryPosted';
import Navbar from '../../components/NavbarNoLogo';
import logo from '../../images/logo.png';


export default class MainSearch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<Container>
			<Tabs defaultActiveKey="used history" id="uncontrolled-tab-example">
				<Tab eventKey="used history" title="使用履歴">
					<div className="history-tab-explanation">What You Booked Before</div>
					<HistoryBooked/>
				</Tab>
				<Tab eventKey="" title="貸し出し履歴">
					<div className="history-tab-explanation">What You Posted Before</div>
					<HistoryPosted/>
				</Tab>
			</Tabs>
		</Container>
		);
	}
}
