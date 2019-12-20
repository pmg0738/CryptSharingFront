import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {prefectures} from '../../../datas/prefectures';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(theme => ({
	formControl: {
		// margin: theme.spacing(1),
		minWidth: 150,
	}
}));

export default function PrefectureSelector(props) {
	const classes = useStyles();
	const [prefecture, setPrefecture] = React.useState('');

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = event => {
		setPrefecture(event.target.value);
		props.onChange(event.target.value);
	};

	return (
		<div>
			<FontAwesomeIcon icon={faMapMarkerAlt} style={{width:"30px", height:"30px", color:"#4285F4", marginTop:"95px", marginRight:"10px"}}/>
			<FormControl className={classes.formControl} style={{marginTop:"80px"}}>
				<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">都道府県</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={prefecture}
					onChange={handleChange}
					labelWidth={labelWidth}
				>
					{prefectures.map(prefecture =><MenuItem value={prefecture}>{prefecture}</MenuItem>)}
				</Select>
			</FormControl>
		</div>
	);
}