import React from 'react';
import axios from 'axios';

import SearchByOptionComponent from '../../components/SearchByOptionComponent';
import ItemListComponent from '../../components/ItemListComponent';
import 'react-input-range/lib/css/index.css';
import './style.scss';

import { connect　} from 'react-redux';
import { getItems } from '../../redux/actions/items.js';



class ItemFilterAndList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            items: {},
            selectedCategory:"カテゴリー",
            periodVarientOneHour:"outline-primary", 
            periodVarientOneDay:"outline-success",
            periodStyle: '',
            priceValue: {min:0, max:3500},
            distance: {min:0, max:30},
        }
    }

    componentDidMount(){
        // console.log("111111111111111111111111");
        this.props.getItems();
        // console.log("111111111111111111111111");
    }

    // getItemData = () =>{
    //     Axios.get(API_URL,{
    //         params: {
    //             category: "メンズ"
    //         }
    //     })
    //         .then(res =>{
    //             console.log('axios no res.data', res);
    //             this.setState({items: res.data})
    //         })
    // }


    // changeSelectedCategory = (categoryName) =>{
    //     this.setState({selectedCategory: categoryName})
    // }
    // changeVarientOnehour = () =>{
    //     this.setState({
    //         periodVarientOneHour:"primary",
    //         periodVarientOneDay:"outline-success"
    //     })
    // }
    // changeVarientOneday = () =>{
    //     this.setState({
    //         periodVarientOneHour:"outline-primary",
    //         periodVarientOneDay:"success"
    //     })
    // }
    
    render() {
        console.log("@@@@@@@@@@@@@@@@@@@@@", this.props);

        return (
            <div className="search-by-option-container">
                <div className="search-by-option-search-form">
                    <SearchByOptionComponent/>
                </div>
                <div className="search-by-option-item-list-component">
                    <ItemListComponent items={this.props.items} />
                </div>
            </div>            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state
    }
}

const mapDispatchToProps = ({ getItems })


export default connect(mapStateToProps, mapDispatchToProps)(ItemFilterAndList)