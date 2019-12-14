import React from 'react';
import './style.scss';

import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Button,
    Card,
    Container,
    Row,
    Col,
    Nav,
    Image,
  } from 'react-bootstrap';

import Item from '../../../item/ItemCard';
import eraiza from '../../../../images/eraiza.png';


export default class MyPageRentNow extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            // items: [],
        }
    }

    render() {
        return (
            <div>
                <Container maxWidth="lg" className="my-page-rent-now-container">
                    <Grid Container direction="row">
                        <Grid container sm={12} md={3} >

                        </Grid>
                        <Grid container sm={12} md={7} >
                            
                        </Grid>
                        <Grid container sm={12} md={2} >

                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
























    // componentWillMount() {
    //     this.getRentNowItems();
    // }

    // getRentNowItems = () => {
    //     // Axios.get('/itesm')
    //     const items = {
    //         "3": {
    //             id: "3",
    //             price: 10,
    //             image: eraiza,
    //         }
    //     }

    //     this.setState({items: items})
    // }

    // render() {
    //     const { items } = this.state;
    //     // const items = this.state.items;

    //     return (
    //         <Container>
    //             <Row>
    //                 {Object.keys(items).map((id) => 
        
    //                     <Col xc={6} sm={6} md={4} lg={4}>
    //                         <Item 
    //                             to={'/items/' + id}
    //                             image={items[id].image}
    //                             pricePerHour={items[id].price}
    //                             status={1}
    //                         />
    //                     </Col>                    
    //                 )}
    //             </Row>
    //         </Container>
    //     )
    // }
}

