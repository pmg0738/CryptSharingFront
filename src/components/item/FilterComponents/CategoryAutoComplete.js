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
      <div style={styles.div}>
        <Autocomplete
            style={styles.autoComplete}
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
                style={styles.textfield}
              />
            )}
        />
      </div>
    )
  }
}


const styles = {
  div:{
    color:"#ffffff",
    textColor:"white",
    width: 500,
  },
	autoComplete: {
    marginLeft: '20px', 
    marginRight: "20px",
    color: "white",
  },
  textfield:{
    textColor:"white",
    color:"#FFFFFF",
    // backgroundColor:"white",
  }
}