import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import './style.scss'
import FeeSlider from '../../../components/item/FilterComponents/FeeSlider';
import PrefectureSelector from '../../../components/item/FilterComponents/PrefectureSelector';
import CategoryAutoComplete from '../../../components/item/FilterComponents/CategoryAutoComplete';
import LentPeriodRadioButton from '../../../components/item/FilterComponents/LentPeriodRadioButtons';

export default class Filter extends Component {
	constructor(props){
		super(props);

		this.state={
			category:'',
			age:'',
			prefecture:'',
			lentPeriod:'onehour',
		}
	}

	onChangeCategory = (e) =>{
		this.setState({category: e.target.value});
	}

	onChangeAge = (e) =>{
		this.setState({age: e.target.value})
	}

	onChangePrefecture = (e) =>{
		this.setState({prefecture: e.target.value})
	}

	onChangeLentPeriod = (e) =>{
		this.setState({lentPeriod: e.target.value})
	}

	render() {
		return (
			<div style={{backgroundColor: "white"}}>
				 <TextField
					id="outlined-basic"
					label="フリーワード検索"
					margin="normal"
					variant="outlined"
					style={{marginLeft:"20px"}}
				/>
				<Grid container style={{width:"100%", backgroundColor:"yellow"}}>
					<Grid container xs={12} sm={4} style={{width:"30%", backgroundColor:"white"}} alignItems="center" justify="center">
						<CategoryAutoComplete/>
					</Grid>
					<Grid item xs={12} sm={3} style={{width:"25%", backgroundColor:"white", textAlign:"center"}} alignItems="center" justify="center">
						<LentPeriodRadioButton/>
					</Grid>
					<Grid xs={12} sm={3} item style={{width:"25%", backgroundColor:"white", textAlign:"center"}}>
						<FeeSlider/>
					</Grid>
					<Grid xs={12} sm={2} container style={{width:"20%", backgroundColor:"white"}} alignItems="center" justify="center">
						<PrefectureSelector/>
					</Grid>
				</Grid>
				<Grid container direction="row" justify="flex-end">
					<Button
						variant="contained"
						color="primary"
						className=""
						size="large"
						startIcon={<CheckCircleIcon />}
					>この条件で探す</Button>
				</Grid>
			</div>
		)
	}
}
