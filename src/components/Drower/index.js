import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';


import AddIcon from '@material-ui/icons/Add';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import ChatIcon from '@material-ui/icons/Chat';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './style.scss';

import logo from '../../images/logo.png';



const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
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
    >
        <List>
          <ListItem button key={1}>
            <ListItemIcon><CloseIcon /></ListItemIcon>
            <Button className="close-drower-button" onClick={toggleDrawer('right', false)}>閉じる</Button>
          </ListItem>
      </List>
      <Divider />

      <List>
          <ListItem button key={1}>
            <ListItemIcon><SearchIcon className="navbar-menu-search-icon" /></ListItemIcon>
            <Link to='/items' className="navbar-hamburger-menu-button-item">探す</Link>
          </ListItem>
      </List>
      <List>
          <ListItem button key={1}>
            <ListItemIcon><AddAPhotoIcon className="navbar-menu-add-icon" /></ListItemIcon>
            <Link to='/items/new/post' className="navbar-hamburger-menu-button-item">出品する</Link>
          </ListItem>
      </List>
      <List>
          <ListItem button key={1}>
            <ListItemIcon><ChatIcon className="navbar-menu-chat-icon" /></ListItemIcon>
            {/* <ListItemIcon><MailIcon /></ListItemIcon> */}
            <Link to='/chats' className="navbar-hamburger-menu-button-item">メッセージ</Link>
          </ListItem>
      </List>
      <List>
          <ListItem button key={1}>
            <ListItemIcon><PersonIcon className="navbar-menu-person-icon"/></ListItemIcon>
            <Link to='/mypage' className="navbar-hamburger-menu-button-item">マイページ</Link>
          </ListItem>
      </List>
      {/* <List>
          <ListItem button key={1}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <Link to='/login' className="navbar-hamburger-menu-button-item">ログイン</Link>
          </ListItem>
      </List> */}
      <Divider />
      <List>
          <ListItem button key={1}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <Link to='#' className="navbar-hamburger-menu-button-item">ログアウト</Link>
          </ListItem>
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