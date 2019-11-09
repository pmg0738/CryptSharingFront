import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import './style.scss'
import {prefectures} from '../../datas/prefectures';
import FeeSlider from '../../components/FeeSlider';


export default class Filter extends Component {
    constructor(props){
        super(props);

        this.state={
            category:'',
            age:'',
            prefecture:'',
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

    render() {
        return (
            <div style={{backgroundColor: "white"}}>
                <TextField
                    id="standard-helperText"
                    label="フリーワード検索"
                    defaultValue="例）モニター"
                    margin="normal"
                    style={{marginLeft:"20px"}}
                    // inputProps={{ style: { color: "#ffffff" }}}
                />
                {/* <Grid container style={{width:"100%", backgroundColor:"yellow"}} alignItems="flex-start" justify="flex-start"> */}

                
                <Grid container style={{width:"100%", backgroundColor:"yellow"}}>

                    {/* category */}
                    <Grid container style={{width:"25%", backgroundColor:"red"}} alignItems="center" justify="center">
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.value}
                                onChange={(e)=>this.onChangeAge(e)}
                                // labelWidth={labelWidth}
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{textAlign:"center"}} variant="outlined">
                            <InputLabel id="demo-simple-select-label">カテゴリー</InputLabel>
                                <Select style={{width:"200px"}} value={this.state.category} onChange={(e)=>this.onChangeCategory(e)}>
                                {
                                    ["レディース", "メンズ", "ゲーム、本", "スポーツ、レジャー", "工具", "ジュエリー", "その他"].map(
                                        (category)=><MenuItem value={category}>{category}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* lent-period */}
                    <Grid item style={{width:"25%", backgroundColor:"yellow", textAlign:"center"}}>
                        <FormControl component="fieldset" style={{textAlign:"center", padding:"50px"}}>
                            <FormLabel component="legend">使用期間</FormLabel>
                            <RadioGroup aria-label="position" name="position" value="aa" row>
                                <FormControlLabel
                                    value="top"
                                    control={<Radio color="primary" />}
                                    label="1時間"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="start"
                                    control={<Radio color="primary"/>}
                                    label="1日"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* price */}
                    <Grid item style={{width:"25%", backgroundColor:"green", textAlign:"center"}}>
                        <FeeSlider/>
                    </Grid>

                    {/* prefecture */}
                    <Grid item style={{width:"25%", backgroundColor:"ff0f01", textAlign:"center"}}>
                    <FormControl style={{textAlign:"center"}} variant="outlined">
                            <InputLabel id="demo-simple-select-label">都道府県</InputLabel>
                                <Select style={{width:"200px"}} value={this.state.prefecture} onChange={(e)=>this.onChangePrefecture(e)}>
                                    {prefectures.map(
                                        prefecture=><MenuItem value={prefecture}>{prefecture}</MenuItem>
                                         )
                                    }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        )
    }
}