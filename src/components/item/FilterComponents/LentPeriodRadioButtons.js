import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function LentPeriodRadioButton (){
    return(
        <div>
            <FormControl 
                component="fieldset"
                // style={{textAlign:"center", padding:"35px", marginTop:"20px"}}
            >
                <RadioGroup aria-label="position" name="position" row>
                    <FormControlLabel
                        value="onehour"
                        control={<Radio color="primary" />}
                        label="1時間"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="oneday"
                        control={<Radio color="primary"/>}
                        label="1日"
                        labelPlacement="start"
                    />
                    <FormControlLabel
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