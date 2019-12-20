import React from 'react'
import { Redirect } from 'react-router-dom'


const Auth = (props) => {

	// if(window.web3) {
		return (localStorage.getItem("token") ? props.children : <Redirect to={'/login'}/>)
	// } else {
	// 	alert("メタマスクをインストールしてください");
	// 	return <Redirect to={'/login'}/>;
	// }
}

export default Auth