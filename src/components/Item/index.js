import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Link to={this.props.to}>
                <Card className="item-list-item-card">
                    <div className="item-list-item-card-image-container">
                        <Image src={this.props.image} className="item-list-item-card-image"/>
                        <div className="item-list-item-card-image-smoke" />
                        {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][this.props.status]}
                    </div>
                    <p className="item-list-item-card-price">{this.props.pricePerHour}円/1時間</p>
                </Card>
            </Link>
        );
    }
}