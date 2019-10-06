import React from 'react';
import './style.scss';
import {
    Button,
    Card,
    Container,
    Col,
    Form, 
    Row,    
} from 'react-bootstrap'
import { Link } from 'react-router-dom';

// import bridge from '../../images/bridge.jpg';
// import camera from '../../images/camera.jpg';
// import cave from '../../images/cave.jpg'
// import clock from '../../images/clock.jpg'
// import land from '../../images/land.jpg'
// import lamp from '../../images/lamp.jpg';
import bicycle from '../../images/bicycle.jpg';

export default class FriendList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            friends: friends,
            tag: "---",
        }
        const myId = 1;
        const friendId = 2;
        const year = 2019;
    }

    renderTag = () => {
        if(this.state.tag=="---") {
            return "";
        }
        else {
            // return `絞り込み：${this.state.tag}`;
            return `タグ：${this.state.tag}`;
        }
    }

    render(){
        return(
            <Container className="friend-list-container">
                {/* <Row className="friend-list-top-row"> */}
                    {/* <h6 className="friend-list-num-of-friends">友達：20人</h6> */}
                    {/* <h6 className="friend-list-num-of-friends">{this.renderTag()}</h6> */}
                    {/* <div className="friend-list-tag-container">
                        <select className="friend-list-tag-select"
                            placeholder="タグ"
                            value={this.state.tag}
                            onChange={(e) => this.setState({tag: e.target.value})}
                        >
                            <option>---</option>
                            <option>会社</option>
                            <option>取引先</option>
                            <option>親戚</option>
                            <option>友人</option>
                            <option>××高校3年２組</option>
                            <option>〇〇中学□□部</option>
                        </select>
                        <Link to='/tags/add'>
                            <Button className="friend-list-add-tag-button">＋タグ</Button>
                        </Link>
                    </div> */}
                {/* </Row> */}
                {
                    this.state.friends.map(friend => 
                    <Card className="friend-card">
                        <img src={friend.image} className="friend-card-image"/>
                        <h6 className="friend-card-name">{friend.name}</h6>
                        <h6 className="friend-card-lastMessage">{friend.lastMessage}</h6>

                        {/* <h6 className="friend-card-num-of-cards">{friend.numOfCards}枚</h6> */}
                        <Link to='#' className="friend-card-button-link">
                            <Button className="friend-card-button">
                                <h6>トーク</h6>
                            </Button>
                        </Link>
                    </Card>
                    )
                }
            </Container>
        )
    }
}



const friends = [
    {
        name: "Friend A",
        image: bicycle,
        numOfCards: 3,
        numOfGood: 100,
        lastMessage: "よろしく"
    },
    {
        name: "Friend B",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 120,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 40,
        lastMessage: ""
    },
    {
        name: "Friend D",
        image: bicycle,
        numOfCards: 6,
        numOfGood: 3,
        lastMessage: ""
    },
    {
        name: "Friend E",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 11,
        lastMessage: ""
    },
    {
        name: "Friend F",
        image: bicycle,
        numOfCards: 2,
        numOfGood: 438,
        lastMessage: "了解"
    },
    {
        name: "Friend A",
        image: bicycle,
        numOfCards: 3,
        numOfGood: 109,
        lastMessage: ""
    },
    {
        name: "Friend B",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 39,
        lastMessage: ""
    },
    {
        name: "Friend C",
        image: bicycle,
        numOfCards: 5,
        numOfGood: 21,
    },
    {
        name: "Friend D",
        image: bicycle,
        numOfCards: 6,
        numOfGood: 73,
    },
    {
        name: "Friend E",
        image: bicycle,
        numOfCards: 4,
        numOfGood: 1,
    },
    {
        name: "Friend F",
        image: bicycle,
        numOfCards: 2,
        numOfGood: 0,
    },
]