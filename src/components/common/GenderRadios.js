import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const CustomizedRadios = (props) => {
	const [value, setValue] = React.useState(0);

	const handleChange = event => {
		const newValue = Number(event.target.value);
		setValue(newValue);
		props.onChange(newValue);
	};

	return (
		<FormControl component="fieldset" style={styles.formControl}>
			<FormLabel component="legend">性別</FormLabel>
			<RadioGroup aria-label="position" name="position" value={value}
				onChange={handleChange} row>	
				<FormControlLabel
					value={0}
					control={<Radio color="secondary" />}
					label="女性"
				/>
				<FormControlLabel
					value={1}
					control={<Radio color="primary" />}
					label="男性"
				/>
			</RadioGroup>
		</FormControl>
	);
}

export default CustomizedRadios;

const styles = {
	formControl: {
		margin: 10,
		marginLeft: 25,
	}
}