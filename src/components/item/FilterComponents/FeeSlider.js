import React, { Component,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYenSign} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles({
	root: {
	},
});

function valuetext(value) {
	return `${value}円`;
}

const classes = useStyles;

const marks = [
	{
		value: 0,
		label: '0円',
	},
];


export default class FeeSlider extends Component{
	constructor(props){
		super(props);

		this.state = {
			priceRange:{
				min: 0,
				max: 10000,
			},
			priceSet:[300,3000]
		}
	}
	
	changePriceSet = (e, value) => {
		console.log('value', value)
		this.setState({priceSet: value});
	}

	changeMinPriceSetbyTextField = (e)=>{
		console.log('textvalue e',e.target.value);
		var minPrice = e.target.value;
		var maxPrice = this.state.priceSet[1];
		if( minPrice > maxPrice){
			var tmp = minPrice;
			minPrice = maxPrice;
			maxPrice = tmp;
		}
		this.setState({priceSet:[minPrice, maxPrice]})
	}

	changeMaxPriceSetbyTextField = (e)=>{
		console.log('textvalue e',e.target.value);
		var maxPrice = e.target.value;
		var minPrice = this.state.priceSet[0];
		if( maxPrice < minPrice){
			var tmp = minPrice;
			minPrice = maxPrice;
			maxPrice = tmp;
		}
		this.setState({priceSet:[minPrice, maxPrice]})
	}

	render(){
	return (
		<div style={{marginLeft:"50px"}}>
			<Grid container direction="row" style={{marginBottom:"20px"}}>
				<Grid sm={12} md={1}>
					<FontAwesomeIcon icon={faYenSign} style={{width:"30px", height:"30px", color:"#4285F4", marginTop:"10px"}}/>
				</Grid>
				<Grid sm={12} md={3} style={{marginRight:"40px"}}>
					<TextField 
						value={this.state.priceSet[0]}
						label="最小料金" 
						variant="outlined"
						onChange={this.changeMinPriceSetbyTextField}
						InputProps={{
							startAdornment: <InputAdornment position="start">￥</InputAdornment>,
						  }}
						style={{width:"140px"}}
					/>
				</Grid>
				<Grid sm={12} md={5}>
					<TextField 
						value={this.state.priceSet[1]} 
						label="最大料金" 
						variant="outlined"
						onChange={this.changeMaxPriceSetbyTextField}
						InputProps={{
							startAdornment: <InputAdornment position="start">￥</InputAdornment>,
						  }}
						style={{width:"140px"}}
					/>
				</Grid>
			</Grid>
			<Slider
				value={this.state.priceSet}
				onChange={this.changePriceSet}
				valueLabelDisplay="auto"
				aria-labelledby="range-slider"
				getAriaValueText={valuetext}
				step={10}
				mark={marks}
				min={this.state.priceRange.min}
				max={this.state.priceRange.max}
				className={classes.feeSlider}
				style={{width:"340px"}}
			/>
		</div>
	)
	}
}
