import React from 'react';
import './style.scss';

import Grid from '@material-ui/core/Grid';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import Avatar from '@material-ui/core/Avatar';
import { green, red, blue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faHeart } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../../components/common/Navbar';
import eroi from '../../../images/eraiza.png';


export default class Request extends React.Component {

	render() {
		return (
			<Grid>
				<div style={{color:"white", fontSize:"200px", textAlign:"center"}}>ASAP GOLANG</div>
			</Grid>
		)
	}
}
