import React from 'react';
import './app.scss';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import {
  Col,
  Row,  
} from 'react-bootstrap';

import Chat from './screens/Chat';
import ChatList from './screens/ChatList';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import ItemPost from './screens/ItemPost';
import MainSearch from './screens/MainSearch';
import MyPage from './screens/MyPage';
import History from './screens/History';

import Navbar from './components/Navbar';
// import NavbarNoLogo from './components/NavbarNoLogo';



export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        {/* <Route path='/search' component={MainSearch}/> */}
        <BrowserRouter>
            <div className="screen-container">
              <Route exact path='/search' component={MainSearch}/>
              <Route exact path='/items' component={ItemList}/>
              <Route exact path='/items/post' component={ItemPost}/>
              {/* <Route exact path='/items/:id' component={ItemDetail}/> */}
              <Route exact path='/chats' component={ChatList}/>
              <Route exact path='/items/1' component={ItemDetail}/>
              <Route exact path='/chats/1' component={Chat}/>
              <Route exact path='/mypage' component={MyPage}/>
              <Route exact path='/history' component={History}/>

            </div>
            <Navbar/>
        </BrowserRouter>        
      </div>
    )
  }
}


