import React, { Component,} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	root: {
		padding: "50px",
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
		this.setState({priceSet:[e.target.value, this.state.priceSet[1]]})
	}

	changeMaxPriceSetbyTextField = (e)=>{
		console.log('textvalue e',e.target.value);
		this.setState({priceSet:[this.state.priceSet[0], e.target.value]})
	}

	render(){
	return (
		<div className={classes.root}>
			<Grid container style={{marginBottom:"20px"}}>
				<Grid sm={12} md={6} style={{padding:"3px"}}>
					<TextField 
						id="outlined-basic" 
						value={this.state.priceSet[0]}
						label="最小料金" 
						variant="outlined"
						onChange={this.changeMinPriceSetbyTextField}
					/>
				</Grid>
				<Grid sm={12} md={6} style={{padding:"3px"}}>
					<TextField 
						id="outlined-basic" 
						value={this.state.priceSet[1]} 
						label="最大料金" 
						variant="outlined"
						onChange={this.changeMaxPriceSetbyTextField}
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
			/>
		</div>
	)
	}
}
