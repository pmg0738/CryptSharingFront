import React from 'react';
import './style.scss';

import { Container, Tabs, Tab,} from 'react-bootstrap';

import HistoryBooked from '../../../components/history/HistoryComponents/HistoryBooked';
import HistoryPosted from '../../../components/history/HistoryComponents/HistoryPosted';

export default class MainSearch extends React.Component {

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
