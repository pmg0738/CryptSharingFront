import React from 'react';
import axios from 'axios';

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
		axios.get('https://challecara-pok-2019.lolipop.io/api/v1/categories/')
			.then(res => {
        let newestCategories = res.data;
        this.setState({categories: newestCategories});
			})
  }
  
  render(){
    return(
      <div style={{ width: 500 }}>
        <Autocomplete
            style={{ marginLeft: '20px', marginRight: "20px"}}
            multiple
            id="tags-outlined"
            options={this.state.categories}
            getOptionLabel={option => option.title}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="カテゴリー"
                margin="normal"
                fullWidth
              />
            )}
        />
      </div>
    )
  }
}