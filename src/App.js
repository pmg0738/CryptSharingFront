import React from 'react';
import './app.scss';

import {BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reduceers/api';
// screens
import Chat from './screens/Chat';
import ChatList from './screens/ChatList';
import History from './screens/History';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import ItemPost from './screens/ItemPost';
import ItemPostConfirm from './screens/ItemPostConfirm';
import Login from './screens/Login';
import MainSearch from './screens/MainSearch';
import MyPage from './screens/MyPage';
import SearchByOption from './screens/SearchByOption';
// components
import Navbar from './components/Navbar';
// import NavbarNoLogo from './components/NavbarNoLogo';


const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        {/* <Route path='/search' component={MainSearch}/> */}
        <BrowserRouter>
            <div className="screen-container">
              <Provider store={store}>
                <Route exact path='/search' component={MainSearch}/>
                <Route exact path='/items' component={ItemList}/>
                <Route exact path='/items/new/post' component={ItemPost}/>
                <Route exact path='/items/:id' component={ItemDetail}/>
                {/* <Route exact path='/items/:id' component={ItemDetail}/> */}
                <Route exact path='/chats' component={ChatList}/>
                <Route exact path='/chats/1' component={Chat}/>
                <Route exact path='/mypage' component={MyPage}/>
                <Route exact path='/history' component={History}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/itempostconfirm' component={ItemPostConfirm}/>
                <Route exact path='/searchbyoption' component={SearchByOption}/>
              </Provider>
            </div>
            <Navbar/>
        </BrowserRouter>        
      </div>
    )
  }
}


