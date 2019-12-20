import React from 'react';

import 'react-input-range/lib/css/index.css';
import './style.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { TextField, Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import PrefectureSelector from '../../../components/item/FilterComponents/PrefectureSelector';
import CategoryAutoComplete from '../../../components/item/FilterComponents/CategoryAutoComplete';
import LentPeriodRadioButton from '../../../components/item/FilterComponents/LentPeriodRadioButtons';
import FeeSlider from '../FilterComponents/FeeSlider';


export default class SearchByOptionComponent extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			selectedCategory:"カテゴリー",
			categoryDropdownVarient:"outline-secondary",

			selectedPrefecture: "都道府県",
			prefectureDropdownVarient:"outline-primary",

			dropdownColor: "dropdown-default-color",
			periodVarientOneHour:"outline-info", 
			periodVarientOneDay:"outline-success",
			periodStyle: '',
			priceValue: {min:10, max:2000},
			distance: {min:0, max:30},
			feeType: 'HOUR',
		}
	}

	changeSelectedCategory = (categoryName) =>{
		this.setState({selectedCategory: categoryName})
		this.setState({categoryDropdownVarient: "secondary"})
	}

	changeSelectedPrefecture = (prefecture) =>{
		this.setState({selectedPrefecture: prefecture.prefecture})
		this.setState({prefectureDropdownVarient: "primary"})
	}

	changeVarientOnehour = () =>{
		this.setState({
			periodVarientOneHour:"info",
			periodVarientOneDay:"outline-success"
		})
	}
	changeVarientOneday = () =>{
		this.setState({
			periodVarientOneHour:"outline-info",
			periodVarientOneDay:"success"
		})
	}

	onFormControlChangeMaxPrice = (e)=>{
		this.setState({priceValue: {max: e.target.value, min: this.state.priceValue.min}});
	}

	onFormControlChangeMinPrice = (e)=>{
		this.setState({priceValue: {max: this.state.priceValue.max, min: e.target.value}});
	}
	
	render() {
		return (
			<ExpansionPanel style={styles.ExpansionPanel} defaultExpanded="true">
					<ExpansionPanelSummary
						expandIcon={<SearchIcon style={styles.SearchIcon}/>}
					>
						<Typography style={styles.Typography}>絞り込み検索</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Grid container direction="column">
							<Grid container direction="row" justify="space-evenly">
								<Grid sm={12} md={4} container direction="column" justify="center">
									<TextField
										label="フリーワード検索"
										margin="normal"
										variant="outlined"
										style={{width:"300px", marginLeft:"30px"}}
									/>
									<CategoryAutoComplete style={{width:"300px", marginLeft:"30px"}}/>
								</Grid>
								<Grid sm={12} md={5} container direction="column" justify="center" style={{backgroundColor:"white",  marginTop:"40px"}}>
									<LentPeriodRadioButton/>
									<FeeSlider/>
								</Grid>
								<Grid sm={12} md={3}>
									<PrefectureSelector/>
								</Grid>
							</Grid>
							<Button style={styles.SearchButton}>この条件で検索</Button>
						</Grid>
					</ExpansionPanelDetails>
				</ExpansionPanel>
		);
	}
}


const styles={
	ExpansionPanel:{
		position:"fixed", 
		top:"70px", 
		right:"10px", 
		width:"100%"
	},
	SearchIcon:{
		color:"#4285F4",
	},
	Typography:{
		fontSize:"20px", 
		fontWeight:"900"
	},
	SearchButton:{
		backgroundColor:"#4285F4",
		borderColo:"#4285F4", 
		color:"white", 
		width:"200px", 
		height:"50px", 
		fontWeight:"600",
		fontSize:"20px",
		marginLeft:"550px",
		marginTop:"30px"
	}
}

