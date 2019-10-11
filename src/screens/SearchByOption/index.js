import React from 'react';
import Faker from 'faker';
import './style.scss';
import { 
    Container,
    Form,
    Row,
    Col,
    Button,
    Image
} from 'react-bootstrap';

export default class SearchByOption extends React.Component {
    constructor(props){
        super(props);
        // console.log(faker);
        this.state = {
        }
    }


    render() {
        return (

                <div>
                    <Image src={Faker.image.cats()} />
                </div>
            
        )
    }
}
