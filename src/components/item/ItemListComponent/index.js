import React from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../../redux/actions';
import { Link } from 'react-router-dom';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../../../components/common/Pagination';
import Item from '../ItemCard';


class ItemListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }        
    }   
    componentWillMount(){
        if(this.props.items.length <= 1){
            console.log('aaaaaaa',this.props.items);
            console.log("@".repeat(100));
            this.props.fetchItems();
        }
    }


    renderItems = () =>{
        console.log(this.props.items);
        return Object.keys(this.props.items).map(itemId => {
            const item = this.props.items[itemId]
            return(
                <Grid sm={12} md={6} lg={4} key={itemId}>
                    <Item
                        to={'/items/' + itemId}
                        image={item.images[0].url}
                        price={item.fee_per_hour}
                    />
                </Grid>
            );
        })
    }

    render() {
        return (
            <Grid container>
                {this.renderItems()}
                 <Link to='/items/new/post'>
                    <Button className="item-list-add-button">
                        <p className="item-list-add-button-label">出品する</p>
                        <FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
                    </Button>
                </Link>
                <Pagination numOfPage={2} handlePagination={this.handlePagination}/>
            </Grid>
        );
    }
}
const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #886Dff 30%, #4285F4 90%)',
		border: 0,
		borderRadius: 60,
		boxShadow: '0 3px 5px 2px rgba(130, 105, 255, .3)',
		color: 'white',
		fontSize: 20,
		fontWeight: "bold",
		height: 120,
		width: 120,
		padding: '0 30px',
		position: "fixed",
		bottom: 50,
		right: 50,
	},
});


const ItemPostButton = () => {
	const classes = useStyles();

	return(
		<Button className={classes.root}>
			<p className="item-list-add-button-label">出品する</p>
			<FontAwesomeIcon className="item-list-add-button-camera-icon" icon={faCamera}/>
		</Button>
	);
}

const mapStateProps = (state) => {
	return { items: state.items };
}

export default connect( mapStateProps, { fetchItems })(ItemListComponent);


