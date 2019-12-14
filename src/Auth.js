import React from 'react'
import { Redirect } from 'react-router-dom'

// const Auth = (props) => (props.currentUser.isLoggedIn ? props.children : <Redirect to={'/login'}/>)
const token = localStorage.getItem("token");

// const Auth = (props) => (true ? props.children : <Redirect to={'/login'}/>)
const Auth = (props) => {

	if(window.web3) {
		return (token ? props.children : <Redirect to={'/login'}/>)
	} else {
		alert("メタマスクをインストールしてください");
		return <Redirect to={'/login'}/>;
	}
}

export default Auth