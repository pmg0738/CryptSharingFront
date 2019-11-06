import React from 'react';

import SearchByOptionComponent from '../../components/SearchByOptionComponent';
import ItemListComponent from '../../components/ItemListComponent';
import 'react-input-range/lib/css/index.css';
import './style.scss';
import { 
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap';
import Axios from 'axios';

const API_URL = "http://192.168.3.3:8000/api/v1/items/"

export default class SearchByOption extends React.Component {
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

    componentWillMount(){
        this.getItemData();
    }

    getItemData = () =>{
        Axios.get(API_URL,{
            params: {
                category: "メンズ"
            }
        })
            .then(res =>{
                console.log('axios no res.data', res);
                this.setState({items: res.data})
            })
    }


    changeSelectedCategory = (categoryName) =>{
        this.setState({selectedCategory: categoryName})
    }
    changeVarientOnehour = () =>{
        this.setState({
            periodVarientOneHour:"primary",
            periodVarientOneDay:"outline-success"
        })
    }
    changeVarientOneday = () =>{
        this.setState({
            periodVarientOneHour:"outline-primary",
            periodVarientOneDay:"success"
        })
    }
    render() {
        return (
                <div>
                    <Row>
                        <Col md={12} xl={3} className="search-by-option-search-form-col">
                            <SearchByOptionComponent/>
                        </Col>
                        <Col md={12} xl={9} className="search-by-option-item-list-component-col">
                            <ItemListComponent/>
                        </Col>
                    </Row>
                </div>
            
        )
    }
}
