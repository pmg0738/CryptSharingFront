import React from 'react';

import 'react-input-range/lib/css/index.css';
import './style.scss';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

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
        console.log('prefecture', prefecture.prefecture)
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
        console.log(e.target.value)
    }

    onFormControlChangeMinPrice = (e)=>{
        this.setState({priceValue: {max: this.state.priceValue.max, min: e.target.value}});
    }
    
    render() {
        return (
                <div>
                    <Grid contianer>
                        <Grid container style={{backgroundColor:"#yellow", marginBottom:"20px"}} alignItems="center" justify="center">
                            <TextField
                                id="outlined-basic"
                                label="フリーワード検索"
                                margin="normal"
                                variant="outlined"
                                style={{marginLeft:"0px", width:"260px"}}
                            />
                        </Grid>
                        <Grid container style={{backgroundColor:"00F10F", marginBottom:"20px"}} alignItems="center" justify="center">
                            <CategoryAutoComplete/>
                        </Grid>
                        <Grid container style={{backgroundColor:"33AAAA", marginBottom:"10px"}} alignItems="center" justify="center">
                            <LentPeriodRadioButton/>
                        </Grid>
                        <Grid container style={{backgroundColor:"DDABCD", marginBottom:"20px", padding:"20px"}} alignItems="center" justify="center">
                            <FeeSlider/>
                        </Grid>
                        <Grid container style={{backgroundColor:"AA3F51", marginBottom:"20px"}} alignItems="center" justify="center">
                            <PrefectureSelector/>
                        </Grid>
                    </Grid>
                </div>
            
        )
    }
}


