import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

import './style.scss';
import { connect } from 'react-redux';

import { getItem, getItemImages } from '../../actions/api'


class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cardClassName: "item-list-item-card-out",
            priceClassName: "item-list-item-card-price-out"
        }
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
        console.log('getItemDetail ---------');
        this.props.getItem(this.props.id)
        // this.props.getItemImages(this.props.id, [1, 2])
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
                        <Image src={this.props.image} className="item-list-item-card-image"/>
                        <div className="item-list-item-card-image-smoke" />
                        {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][this.props.status]}
                    </div>
                    <p className={this.state.priceClassName}>{this.props.pricePerHour}円/1時間</p>
                </Card>
            </Link>
        );
    }
}


const mapStateToProps = (items, ownProps) => {
    // console.log('items', state);
    // console.log('items', items);
    // const item = items[ownProps.match.params.id]
    const item = items[ownProps.id]
    return { item: item };
}

const mapDispatchToProps = ({ getItem, getItemImages })

export default connect(mapStateToProps, mapDispatchToProps)(Item)