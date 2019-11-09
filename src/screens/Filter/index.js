import React, { Component } from 'react'
import FeeSlider from '../../components/FeeSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './style.scss'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter-container">
                <div className="filter-free-word-search">
                <TextField
                    id="standard-helperText"
                    label="フリーワード検索"
                    defaultValue="例）モニター"
                    margin="normal"
                />
                </div>
                <Grid container>
                    <Grid container item xs={3}  className="filter-container1">
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        // value="カテゴリー"
                        // onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>    
                    </Select>
                    </Grid>
                    <Grid container item xs={3} className="filter-container2">
                        aaaa
                    </Grid>
                    <Grid container item xs={3} className="filter-container3">
                        sdf
                    </Grid>
                    <Grid container item xs={3} className="filter-container4">
                        aaa
                    </Grid>
                </Grid>
                <FeeSlider/>
            </div>
        )
    }
}

