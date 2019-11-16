import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CategorySelector() {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <div>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">カテゴリー</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={category}
                onChange={handleChange}
                labelWidth={labelWidth}
            >
                {
                    ["レディース", "メンズ", "ゲーム、本", "スポーツ、レジャー", "工具", "ジュエリー", "その他"].map(
                        (category)=><MenuItem value={category}>{category}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    </div>
  );
}

