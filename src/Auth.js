import React from 'react'
import { Redirect } from 'react-router-dom'

// const Auth = (props) => (props.currentUser.isLoggedIn ? props.children : <Redirect to={'/login'}/>)
const token = localStorage.getItem("token");

// const Auth = (props) => (true ? props.children : <Redirect to={'/login'}/>)
const Auth = (props) => {
	// console.log(props);
	// console.log(token);
	return (token ? props.children : <Redirect to={'/login'}/>)
}

export default Auth