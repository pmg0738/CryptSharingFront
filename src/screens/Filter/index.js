import React, { Component } from 'react'
import FeeSlider from '../../components/FeeSlider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


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
                <Grid container spacing={1}>
                    <Grid container item xs={3} spacing={4} className="filter-container1">
                        aaa
                    </Grid>
                    <Grid container item xs={3} spacing={4} className="filter-container2">
                        aaaa
                    </Grid>
                    <Grid container item xs={3} spacing={4} className="filter-container3">
                    </Grid>
                    <Grid container item xs={3} spacing={4} className="filter-container4">
                        aaa
                    </Grid>
                </Grid>
                {/* <FeeSlider/> */}
            </div>
        )
    }
}

