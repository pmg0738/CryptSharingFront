import React from 'react';
import './style.scss';
import { 
    Container,
    Button,
    Row,
    Col,
    Card,
} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';
import itemPicture from '../../images/bicycle.jpg';
import itemPicture2 from '../../images/bicycle2.jpg';
import test from '../../images/test.jpg';

import S__23519271 from '../../images/S__23519271.jpg';
import S__23519273 from '../../images/S__23519273.jpg';
import S__23519274 from '../../images/S__23519274.jpg';
import S__23519275 from '../../images/S__23519275.jpg';
import S__23519276 from '../../images/S__23519276.jpg';
import S__23519277 from '../../images/S__23519277.jpg';
import S__23519278 from '../../images/S__23519278.jpg';
import S__23519279 from '../../images/S__23519279.jpg';
import S__23519280 from '../../images/S__23519280.jpg';
import S__23519281 from '../../images/S__23519281.jpg';



export default class ItemDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [
                S__23519271,
                S__23519273,
                S__23519274,
                S__23519275,
                S__23519276,
                S__23519277,
                S__23519278,
                S__23519279,
                S__23519280,
                S__23519281,
            ],
            imageStartIndex: 0,                
            selectedImage: S__23519271,
        }
    }

    myArray = (array, index) => {
        let newArray = [];

        for(let i=index; i<index+3; i++){
            newArray.push(array[i])
        }
        return newArray;
    }
    
    backOneStep = () => {
        if(this.state.imageStartIndex>0){
            this.setState({imageStartIndex: this.state.imageStartIndex-1})
        }
    }

    forwardOneStep = () => {
        if(this.state.imageStartIndex+2<this.state.images.length-1){
            this.setState({imageStartIndex: this.state.imageStartIndex+1})
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="item-detail-pic">
                            <img className="item-detail-selected-pic" src={this.state.selectedImage}></img>
                            <Row>
                                <FontAwesomeIcon className="item-detail-chevron-left" icon={faChevronLeft}
                                    onClick={this.backOneStep}
                                />
                                
                                    {this.myArray(this.state.images, this.state.imageStartIndex).map(image => 
                                        <Card className="item-detail-non-selected-pic-container" onClick={() => this.setState({selectedImage: image})}>
                                            <img className="item-detail-not-selected-pic" src={image}></img>
                                        </Card>
                                    )}
                                
                                <FontAwesomeIcon className="item-detail-chevron-right" icon={faChevronRight}
                                    onClick={this.forwardOneStep}
                                />
                            </Row>
                        </Col>
                        <Col sm={12} md={6} className="item-detail-info">
                            {/* <Button className="item-detail-goto-chat">チャット</Button> */}
                            <Button className="item-detail-goto-request">借りる</Button>
                            <div className="item-detail-owner">出品者 : park　★★★★★</div>
                            <div className="item-detail-rent-state">貸出状況 : 貸し出し可能</div>
                            <div className="item-detail-charge">利用料：1000円/日</div>
                            <div className="item-detail-more-detail-info-header">
                                その他の情報
                            </div>
                            <div className="item-detail-more-detail-info-contents">
                                ブランド名：GUCCI<br/>
                                これはいい<br/>
                                まじで<br/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Navbar/>
            </div>

        )
    }
}