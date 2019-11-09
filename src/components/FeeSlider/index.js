import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    // width: "90%",
    padding: "50px",
    // backgroundColor:"purple",
    // marginLeft: '100px',
    // color: 'white',
    // backgroundColor: 'blue',
  },
  feeSlider: {
    // color: 'red',
    // color: 'white',

  }
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

export default function Filter() {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        料金
      </Typography>
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
