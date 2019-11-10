import React from 'react';
import { Link } from 'react-router-dom';
// import { Card, Image } from 'react-bootstrap';

import './style.scss';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // cardClassName: "item-list-item-card-out",
            // priceClassName: "item-list-item-card-price-out",
            numOfGood: 2,
        }
        this.data = this.props.data;
        // this.image = "";
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

    // render() {
    //     return(
    //         <Link to={this.props.to}>
    //             <Card className="item-list-item-card"
    //                 onMouseOver={this.handleMouseOver}
    //                 onMouseOut={this.handleMouseOut}
    //                 onClick={this.getItemDetail}
    //             >
    //                 <div className="item-list-item-card-image-container">
    //                     <Image src={this.image} className="item-list-item-card-image"/>
    //                     <div className="item-list-item-card-image-smoke" />
    //                     {[<div className="item-list-item-card-image-smoke-not-available" />,<div/>][this.props.status]}
    //                 </div>

    //                 <p className={this.state.priceClassName}>{this.data.fee_per_hour}円/1時間</p>
    //             </Card>
    //         </Link>
    //     );
    // }

    render() {
        return (
         <Link to={this.props.to}>
            <Card className="" style={{marginBottom: 30}}>
                {/* <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className="">
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                /> */}
                <CardMedia
                    className=""
                    image={this.image}
                    title="Paella dish"
                    style={{width: "100%", height: 250}}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites"
                        onClick={() => this.setState({numOfGood: this.state.numOfGood+1})}
                    >
                        <FavoriteIcon />
                    </IconButton>
                    <p className="item-num-of-good">{this.state.numOfGood}</p>
                    {/* <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton> */}
                    {/* <IconButton
                        // onClick={handleExpandClick}
                        // aria-expanded={expanded}
                        // aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton> */}
                </CardActions>
                <Collapse in="" timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                    </CardContent>
                </Collapse>
                <p className="item-price">{this.data.fee_per_hour}円/1時間</p>
            </Card>
        </Link>
        )
    }
}
