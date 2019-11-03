import React from 'react';
import './app.scss';

import {BrowserRouter, Route } from 'react-router-dom';



// screens
import ChatList from './screens/ChatList';
import History from './screens/History';
import ItemDetail from './screens/ItemDetail';
import ItemPost from './screens/ItemPost';
import ItemPostConfirm from './screens/ItemPostConfirm';
import Login from './screens/Login';
import MainSearch from './screens/MainSearch';
import MyPage from './screens/MyPage';
import SearchByOption from './screens/SearchByOption';
import Request from './screens/Request';
// components
import Navbar from './components/Navbar';


export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        <BrowserRouter>
            <div className="screen-container">
                <Route exact path='/' component={MainSearch}/>
                <Route exact path='/items/new/post' component={ItemPost}/>
                <Route exact path='/items/:id' component={ItemDetail}/>
                <Route exact path='/chats' component={ChatList}/>
                {/* <Route exact path='/chats/1' component={Chat}/> */}
                <Route exact path='/mypage' component={MyPage}/>
                <Route exact path='/history' component={History}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/itempostconfirm' component={ItemPostConfirm}/>
                <Route exact path='/items' component={SearchByOption}/>
                <Route exact path='/request' component={Request}/>
            </div>
            <Navbar/>
        </BrowserRouter>        
      </div>
    )
  }
}


