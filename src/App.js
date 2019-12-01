import React from 'react';
import firebase from 'firebase';
import './app.scss';

import {BrowserRouter, Route } from 'react-router-dom';

// screens
import ChatList from './screens/chat/ChatList';
import History from './screens/history/HistoryList';
import ItemDetail from './screens/item/ItemDetail';
import ItemPost from './screens/item/ItemPost';
import ItemPostConfirm from './screens/item/ItemPostConfirm';
import ItemRequestList from './screens/item/ItemRequestList';
import Login from './screens/user/Login';
import MainSearch from './screens/item/MainSearch';
import MyPage from './screens/user/MyPage';
import SearchByOption from './screens/item/SearchByOption';
import RentalRequest from './screens/item/RentalRequest';
import Filter from './screens/item/Filter';
// components
import Drower from './components/common/Drower';

import ENV from './firebase';

var firebaseConfig = {
	apiKey: ENV.API_KEY,
	authDomain: ENV.AUTH_DOMAIN,
	databaseURL: ENV.DATABASE_URL,
	projectId: ENV.PROJECT_ID,
	storageBucket: ENV.STORAGE_BUCKET,
	messagingSenderId: ENV.MESSAGING_SENDER_ID,
	appId: ENV.APP_ID,
	measurementId: ENV.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);


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
						<Route exact path='/request' component={RentalRequest}/>
						<Route exact path='/filter' component={Filter}/>
					</div>
					{/* Navbarの裏を埋める */}
					<Drower/>
				</BrowserRouter>
		  </div>
		)
	}
}


