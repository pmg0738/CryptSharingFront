import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {prefectures} from '../../../datas/prefectures';


const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export default function PrefectureSelector() {
  const classes = useStyles();
  const [prefecture, setPrefecture] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setPrefecture(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">都道府県</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={prefecture}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
            {
                prefectures.map(
                    (prefecture)=><MenuItem value={prefecture}>{prefecture}</MenuItem>
                )
            }
        </Select>
      </FormControl>
    </div>
  );
}