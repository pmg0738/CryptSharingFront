import React from 'react';
import './app.scss';

import {BrowserRouter, Route } from 'react-router-dom';

// screens
import ChatList from './screens/ChatList';
import History from './screens/HistoryList';
import ItemDetail from './screens/ItemDetail';
import ItemPost from './screens/ItemPost';
import ItemPostConfirm from './screens/ItemPostConfirm';
import ItemRequestList from './screens/ItemRequestList';
import Login from './screens/Login';
import MainSearch from './screens/MainSearch';
import MyPage from './screens/MyPage';
import SearchByOption from './screens/SearchByOption';
import Request from './screens/Request';
import Filter from './screens/Filter';
// components
import Drower from './components/Drower';




export default class App extends React.Component{
	render(){
		return (
		  <div className="App">
				<BrowserRouter>
					<div className="screen-container">
						<Route exact path='/' component={MainSearch}/>
						<Route exact path='/items/new/post' component={ItemPost}/>
						<Route exact path='/items/:id' component={ItemDetail}/>
						<Route exact path='/items/requests/list' component={ItemRequestList}/>
						{/* <Route exact path='/items/requests/:id' component={ItemRequestList}/> */}
						<Route exact path='/chats' component={ChatList}/>
						{/* <Route exact path='/chats/1' component={Chat}/> */}
						<Route exact path='/mypage' component={MyPage}/>
						<Route exact path='/history' component={History}/>
						<Route exact path='/login' component={Login}/>
						<Route exact path='/itempostconfirm' component={ItemPostConfirm}/>
						<Route exact path='/items' component={SearchByOption}/>
						<Route exact path='/request' component={Request}/>
					</div>
					<Drower/>
				</BrowserRouter>
		  </div>
		)
	}
}


