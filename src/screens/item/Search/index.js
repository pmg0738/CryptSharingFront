import React from 'react';
import './style.scss';

import {
	Button,
	Card,
	Container,
	Form,
	Row,
	ListGroup,
 } from 'react-bootstrap';

 // Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Redux
import { connect } from 'react-redux';
import { fetchMyData } from '../../../redux/actions/user';

import { Link } from 'react-router-dom';
import logo from '../../../images/newlogo.png';


class Top extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showItemMenu:  false,
			showHumanMenu: false,
			showMoneyMenu: false,
			showPlaceMenu: false,
			searchWords: "",
			searching: false,
		}

		console.log(this.props.store.me);
		if(Object.keys(this.props.store.me).length===0) {
			// me が空の時はサーバーからデータを取得する
			this.props.fetchMyData();
		}
	}


	handleItemMenu = () => {
		let { showItemMenu } = this.state;

		if(showItemMenu){
			this.setState({
				showItemMenu:  false,
				showHumanMenu: false,
				showMoneyMenu: false,
				showPlaceMenu: false,
			})
		}
		else{
			this.setState({
				showItemMenu:  true,
				showHumanMenu: false,
				showMoneyMenu: false,
				showPlaceMenu: false,
			})
		}
	}

	handleHumanMenu = () => {
		let { showHumanMenu } = this.state;

		if(showHumanMenu){
			this.setState({
				showItemMenu:  false,
				showHumanMenu: false,
				showMoneyMenu: false,
				showPlaceMenu: false,
			})
		}
		else{
			this.setState({
				showItemMenu:  false,
				showHumanMenu: true,
				showMoneyMenu: false,
				showPlaceMenu: false,
			})
		}
	}

	handleMoneyMenu = () => {
		let { showMoneyMenu } = this.state;

		if(showMoneyMenu){
			this.setState({
				showItemMenu:  false,
				showHumanMenu: false,
				showMoneyMenu: false,
				showPlaceMenu: false,
			})
		}
		else{
			this.setState({
				showItemMenu:  false,
				showHumanMenu: false,
				showMoneyMenu: true,
				showPlaceMenu: false,
			})
		}
	}

	handlePlaceMenu = () => {
		let { showPlaceMenu } = this.state;

		if(showPlaceMenu){
			this.setState({
				showItemMenu:  false,
				showHumanMenu: false,
				showMoneyMenu: false,
				showPlaceMenu: false,
			})
		}
		else{
			this.setState({
				showItemMenu:  false,
				showHumanMenu: false,
				showMoneyMenu: false,
				showPlaceMenu: true,
			})
		}
	}


	renderItemMenu = (show) => {
		if(show){
			return(
				<Card className="main-search-item-menu-card">
					<ListGroup variant="flush">
						<ListGroup.Item className="main-search-item-menu-list-group" onClick={this.closeMenu}>
							<Link to='/search' className="main-search-item-menu-link">Search</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-item-menu-list-group" onClick={this.closeMenu}>
							<Link to='/items' className="main-search-item-menu-link">Items</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-item-menu-list-group" onClick={this.closeMenu}>
							<Link to='/chats' className="main-search-item-menu-link">Chat</Link>
						</ListGroup.Item>
					</ListGroup>
				</Card> 
			);
		}
	}

	renderHumanMenu = (show) => {
		if(show){
			return(
				<Card className="main-search-human-menu-card">
					<ListGroup variant="flush">
						<ListGroup.Item className="main-search-human-menu-list-group" onClick={this.closeMenu}>
							<Link to='/search' className="main-search-human-menu-link">Search</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-human-menu-list-group" onClick={this.closeMenu}>
							<Link to='/items' className="main-search-human-menu-link">Items</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-human-menu-list-group" onClick={this.closeMenu}>
							<Link to='/chats' className="main-search-human-menu-link">Chat</Link>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			)
		}
	}

	renderMoneyMenu = (show) => {
		if(show){
			return(
				<Card className="main-search-money-menu-card">
					<ListGroup variant="flush">
						<ListGroup.Item className="main-search-money-menu-list-group" onClick={this.closeMenu}>
							<Link to='/search' className="main-search-money-menu-link">Search</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-money-menu-list-group" onClick={this.closeMenu}>
							<Link to='/items' className="main-search-money-menu-link">Items</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-money-menu-list-group" onClick={this.closeMenu}>
							<Link to='/chats' className="main-search-money-menu-link">Chat</Link>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			)
		}
	}

	renderPlaceMenu = (show) => {
		if(show){
			return(
				<Card className="main-search-place-menu-card">
					<ListGroup variant="flush">
						<ListGroup.Item className="main-search-place-menu-list-group" onClick={this.closeMenu}>
							<Link to='/search' className="main-search-place-menu-link">Search</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-place-menu-list-group" onClick={this.closeMenu}>
							<Link to='/items' className="main-search-place-menu-link">Items</Link>
						</ListGroup.Item>
						<ListGroup.Item className="main-search-place-menu-list-group" onClick={this.closeMenu}>
							<Link to='/chats' className="main-search-place-menu-link">Chat</Link>
						</ListGroup.Item>
					</ListGroup>
				</Card> 
			)
		}
	}

	search = () => {
		// 検索ワードを保存し、アイテムリストに遷移
		if(this.state.searchWords!="") {
			this.setState({ searching: true });
			localStorage.setItem('search', this.state.searchWords);
			
			setTimeout(() => {
				this.setState({ searching: false });
				this.props.history.push('/items');
			}, 2000)
		}
	}

	searchButtonClassName = () => {
		return this.state.searchWords==="" ? "search-button-deactive":"search-button-active";
	}


	render() {
		return (
				<Container className="main-search-container">
					<div className="main-search-card">
						<img src={logo} className="main-search-logo-image"/>
						<Form>
							<Row className="main-search-form-row">
								<Form.Group controlId="formBasicEmail">
									<Form.Control
										className="main-search-search-form"
										type="text"
										placeholder="Search"
										value={this.state.searchWords}
										onChange={(e) => this.setState({searchWords: e.target.value})}
									/>
								</Form.Group>
								<Button className={this.searchButtonClassName()}
									onClick={this.search}>検索</Button>
							</Row>
						</Form>
							<Link to='/filter'>
								<p className="main-search-category-search-button">絞り込みで探す</p>
							</Link>
								{/* <Row className="main-search-category-button-row">
									<Col>
										<Button className="main-search-category-button-red"
											onClick={this.handleItemMenu}
										>+</Button>
										{this.renderItemMenu(this.state.showItemMenu)}
									</Col>
									<Col>
										<Button className="main-search-category-button-blue"
											onClick={this.handleHumanMenu}
										>+</Button>
										{this.renderHumanMenu(this.state.showHumanMenu)}
									</Col>
									<Col>
										<Button className="main-search-category-button-yellow"
											onClick={this.handleMoneyMenu}
										>+</Button>
										{this.renderMoneyMenu(this.state.showMoneyMenu)}
									</Col>
									<Col>
										<Button className="main-search-category-button-green"
											onClick={this.handlePlaceMenu}
										>+</Button>
										{this.renderPlaceMenu(this.state.showPlaceMenu)}
									</Col>
								</Row> */}
					</div>
					<Dialog
						open={this.state.searching}
						// onClose={handleClose}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">検索中</DialogTitle>
						<DialogContent>
							<CircularProgress
								variant="indeterminate"
								disableShrink
								// className={classes.bottom}
								thickness={4}
							/>
						</DialogContent>
				</Dialog>
			</Container>
		);
	}
}



const mapStateProps = (store) => {
	return { store: store };
}


export default connect( mapStateProps, { fetchMyData })(Top);
