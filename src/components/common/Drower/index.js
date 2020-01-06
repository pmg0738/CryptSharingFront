import React from 'react';

import { withRouter } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from 'react-router-dom';
// Material Icon
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ChatIcon from '@material-ui/icons/Chat';
import CloseIcon from '@material-ui/icons/Close';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import './style.scss';

import logo from '../../../images/logo.png';



const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

const logout = (props) => {
	localStorage.removeItem("token");
	props.history.push('/login');
}

const NavDrawer = (props) => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};


	const sideList = side => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
			style={{height: "100%"}}
		>
				<List>
					{/* <Button className="close-drower-button" onClick={toggleDrawer('right', false)}> */}
					<ListItem className="drower-menu-title" button key={1} onClick={toggleDrawer('right', false)}>
						<ListItemIcon><CloseIcon className="navbar-menu-icon"/>
							<p className="drower-menu-title">閉じる</p>
						</ListItemIcon>
					</ListItem>
					{/* </Button> */}
			</List>
			<Divider />
			<List>
				<Link to='/items' className="navbar-hamburger-menu-button-item">
					<ListItem className="drower-menu-title" button key={1}>
						<ListItemIcon><SearchIcon className="navbar-menu-search-icon" />
							<p className="drower-menu-title">探す</p>
						</ListItemIcon>
					</ListItem>
				</Link>
			</List>
			<List>
					<Link to='/items/requests/list' className="navbar-hamburger-menu-button-item">
						<ListItem button key={1}>
							<ListItemIcon><LibraryAddIcon className="navbar-menu-request-icon"/>
								<p className="drower-menu-title">リクエスト</p>
							</ListItemIcon>
						</ListItem>
					</Link>
			</List>
			<List>
					<Link to='/items/new/post' className="navbar-hamburger-menu-button-item">
						<ListItem button key={1}>
							<ListItemIcon><AddAPhotoIcon className="navbar-menu-add-icon" />
								<p className="drower-menu-title">出品する</p>
							</ListItemIcon>
						</ListItem>
					</Link>
			</List>
			<List>
					<Link to='/chats' className="navbar-hamburger-menu-button-item">
						<ListItem button key={1}>
							<ListItemIcon><ChatIcon className="navbar-menu-chat-icon" />
								<p className="drower-menu-title">メッセージ</p>
							</ListItemIcon>
						</ListItem>
					</Link>
			</List>
			<List>
					<Link to='/mypage' className="navbar-hamburger-menu-button-item">
						<ListItem button key={1}>
							<ListItemIcon><PersonIcon className="navbar-menu-person-icon"/>
								<p className="drower-menu-title">マイページ</p>
							</ListItemIcon>
						</ListItem>
					</Link>
			</List>
			<List>
					<Link to='/users/1' className="navbar-hamburger-menu-button-item">
						<ListItem button key={1}>
							<ListItemIcon><PersonIcon className="navbar-menu-person-icon"/>
								<p className="drower-menu-title">User Detail</p>
							</ListItemIcon>
						</ListItem>
					</Link>
			</List>
			<Divider />
			<List>
					<Link to='#' className="navbar-hamburger-menu-button-item">
						<ListItem button key={1}
							onClick={() => logout(props)}
						>
							<ListItemIcon>
								<ExitToAppIcon className="navbar-menu-icon"/>
								<p className="drower-menu-title">ログアウト</p>
							</ListItemIcon>
						</ListItem>
					</Link>
			</List>
			{/* <Divider /> */}
			
		</div>
	);
 

	return (
		<div className="navbar">
				{/* <div  classNamw="empty"/> */}
				<Link to='/'>
						<img className="navbar-logo-image" src={logo}/>
				</Link>
				<Button className="navbar-menu-button" onClick={toggleDrawer('right', true)}>
						<MenuIcon className="navbar-menu-icon"/>
				</Button>
			<Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
				{sideList('right')}
			</Drawer>
		</div>
	);
}

export default withRouter(NavDrawer);