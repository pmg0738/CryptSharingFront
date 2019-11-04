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

export default class SearchByOption extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            

            selectedCategory:"カテゴリー",
            periodVarientOneHour:"outline-primary", 
            periodVarientOneDay:"outline-success",
            periodStyle: '',
            priceValue: {min:0, max:3500},
            distance: {min:0, max:30},
        }
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
                <Container>
                    <Row>
                        <Col md={12} xl={3}>
                            <SearchByOptionComponent/>
                        </Col>
                        <Col md={12} xl={9}>
                            <ItemListComponent/>
                        </Col>
                    </Row>
                </Container>
            
        )
    }
}
