import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles({
  root: {
    padding: "50px",
    // backgroundColor:"purple",
  },
});

function valuetext(value) {
  return `${value}円`;
}

const marks = [
    {
        value: 1000,
        label: '1000円'
    },
    {
        value: 5000,
        label: '5000円'
    },
   
    {
        value: 10000,
        label: '10000円'
    },

  ];

export default function FeeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {/* <FormLabel component="legend" style={{fontSize:"20px"}}>料金</FormLabel> */}
      <Grid container style={{marginBottom:"20px"}}>
        <Grid sm={12} md={6} style={{padding:"3px"}}>
          <TextField id="outlined-basic" label="最小料金" variant="outlined"/>
        </Grid>
        <Grid sm={12} md={6} style={{padding:"3px"}}>
          <TextField id="outlined-basic" label="最大料金" variant="outlined" />
        </Grid>
      </Grid>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step={10}
        min={0}
        max={10000}
        marks={marks}
        className={classes.feeSlider}
      />
    </div>
  );
}
