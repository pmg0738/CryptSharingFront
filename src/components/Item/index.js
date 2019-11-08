import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

import './style.scss';


export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardClassName: "item-list-item-card-out",
            priceClassName: "item-list-item-card-price-out"
        }
        this.data = this.props.data;
        this.image = this.data.images.length!=0 ? this.data.images[0].url:"";
    }

    handleMouseOver = () => {
        this.setState({
            cardClassName: "item-list-item-card-over",
            priceClassName: "item-list-item-card-price-over"
        })
    }

    handleMouseOut = () => {
        this.setState({
            cardClassName: "item-list-item-card-out",
            priceClassName: "item-list-item-card-price-out"
        })
    }

    getItemDetail = () => {
        // this.props.getItem(this.props.id)
    }    

    render() {
        return(
            <Link to={this.props.to}>
                <Card className="item-list-item-card"
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.getItemDetail}
                >
                    <div className="item-list-item-card-image-container">
                        <Image src={this.image} className="item-list-item-card-image"/>
                        <div className="item-list-item-card-image-smoke" />
                        {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][this.props.status]}
                    </div>

                    <p className={this.state.priceClassName}>{this.data.fee_per_hour}円/1時間</p>
                </Card>
            </Link>
        );
    }
}
