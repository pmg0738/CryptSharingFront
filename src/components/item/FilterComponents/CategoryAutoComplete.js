import React from 'react';
import api from '../../../redux/apis';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class Tags extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			categories:[],
		}
	}

	componentWillMount(){
		api.get('categories/')
			.then(res => this.setState({categories: res.data}))
	}

	onChange = (event, newValue) => {
		this.props.onChange(newValue);
	}
	
	render(){
		return(
			<div style={this.props.style}>
				<Autocomplete
					style={styles.autoComplete}
					multiple
					id="tags-outlined"
					options={this.state.categories}
					getOptionLabel={option => option.title}
					filterSelectedOptions
					onChange={this.onChange}
					renderInput={params => (
						<TextField
							{...params}
							variant="outlined"
							label="カテゴリー"
							margin="normal"
							fullWidth
							style={styles.textfield}
							onChange={this.props.onChange}
						/>
					)}
				/>
			</div>
		)
	}
}


const styles = {
	autoComplete: {
		// marginLeft: '20px',
		// marginRight: "20px",
	},
	textfield:{

	}
}