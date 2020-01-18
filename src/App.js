import React from 'react';
import firebase from 'firebase';
import './app.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Auth from './Auth';

// screens
import ChatList from './screens/chat/ChatList';
import Filter from './screens/item/Filter';
import History from './screens/history/HistoryList';
import ItemDetail from './screens/item/ItemDetail';
import ItemPost from './screens/item/ItemPost';
import ItemRequestList from './screens/item/ItemRequestList';
import Login from './screens/user/Login';
import MyPage from './screens/user/MyPage';
import SearchByOption from './screens/item/SearchByOption';
import SignUp from './screens/user/SignUp';
import Search from './screens/item/Search';
import RentalRequest from './screens/item/RentalRequest';
import UserDetail from './screens/user/UserDetail';
// components
import Drower from './components/common/Drower';

import { FIREBASE_ENV } from './config';

var firebaseConfig = {
	apiKey:            FIREBASE_ENV.API_KEY,
	authDomain:        FIREBASE_ENV.AUTH_DOMAIN,
	databaseURL:       FIREBASE_ENV.DATABASE_URL,
	projectId:         FIREBASE_ENV.PROJECT_ID,
	storageBucket:     FIREBASE_ENV.STORAGE_BUCKET,
	messagingSenderId: FIREBASE_ENV.MESSAGING_SENDER_ID,
	appId:             FIREBASE_ENV.APP_ID,
	measurementId:     FIREBASE_ENV.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);


export default class App extends React.Component{
	render(){
		return (
		  <div className="App">
			  <div className="screen-container">
				<BrowserRouter>
					<Switch>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/signup" component={SignUp}/>
						<div>
						{/* <Auth> */}
							<Switch>
								<Route exact path='/' component={Search}/>
								<Route exact path='/items/new/post' component={ItemPost}/>
								<Route exact path='/items/:id' component={ItemDetail}/>
								<Route exact path='/items/requests/list' component={ItemRequestList}/>
								{/* <Route exact path='/items/requests/:id' component={ItemRequestList}/> */}
								<Route exact path='/chats' component={ChatList}/>
								{/* <Route exact path='/chats/1' component={Chat}/> */}
								<Route exact path='/mypage' component={MyPage}/>
								<Route exact path='/history' component={History}/>
								<Route exact path='/items' component={SearchByOption}/>
								<Route exact path='/request/:id' component={RentalRequest}/>
								<Route exact path='/filter' component={Filter}/>
								<Route exact path='/users/:id' component={UserDetail}/>
							</Switch>
							<Drower/>
						{/* </Auth> */}
						</div>
					</Switch>
				</BrowserRouter>
			  </div>
		  </div>
		);
	}
}



