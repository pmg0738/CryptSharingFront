import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHourglassStart} from '@fortawesome/free-solid-svg-icons'

export default function LentPeriodRadioButton (){
    
    const classes  = useStyles();
    return(
        <div style={{marginLeft:"50px"}}>
            <FontAwesomeIcon icon={faHourglassStart} style={{width:"30px", height:"30px", color:"#4284F4", marginTop:"5px"}}/>
            <FormControl component="fieldset" style={{marginBottom:"20px"}}>
                <RadioGroup aria-label="position" name="position" row>
                    <FormControlLabel
                        classes={{ label: classes.label}}
                        value="onehour"
                        control={<Radio color="primary"/>}
                        label="1時間"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        classes={{ label: classes.label}}
                        value="oneday"
                        control={<Radio color="primary"/>}
                        label="1日"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        classes={{ label: classes.label}}
                        value="oneweek"
                        control={<Radio color="primary"/>}
                        label="1週間"
                        labelPlacement="start"
                    />
                </RadioGroup>
            </FormControl>
        </div>
    )
}


const useStyles = makeStyles({
    root: {

    },
    label: {
        fontSize:"20px",
        fontWeight:"700",
    },
  });