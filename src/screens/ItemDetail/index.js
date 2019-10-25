import React from 'react';
import './style.scss';
import { 
    Button,
    Card,
    Container,
    Col,
    Image,
    Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getItem, getItemImages } from '../../actions/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faHeart } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';


class ItemDetail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [],
            imageStartIndex: 0,                
            // selectedImage: this.props.item.image,
            // selectedImage: S__23519271,
        }
    }

    // componentWillMount() {
    //     // console.log('componentWillMoun', this.props.item);

    //     const { id } = this.props.match.params;
    //     if (id) {
    //         // this.props.getItem(id)
    //         // this.props.getItemImages(id, [1, 2])ß
    //     }
    // }


    threeArray = (array, index) => {
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
        // console.log('this.props', this.props);

        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} className="item-detail-pic">
                            <Image className="item-detail-selected-pic" src={this.state.selectedImage}/>
                            <Row>
                                <FontAwesomeIcon className="item-detail-chevron-left" icon={faChevronLeft}
                                    onClick={this.backOneStep}
                                />
                                
                                {/* {this.threeArray(this.props.item.images, this.state.imageStartIndex).map(image =>  */}
                                    {this.threeArray(this.state.images, this.state.imageStartIndex).map(image => 
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
                            <Row>
                                <Link to='/items'>
                                    <Button className="item-detail-button-to-item-list">一覧に戻る</Button>
                                </Link>
                                <FontAwesomeIcon className="item-detail-favorite-icon" icon={faHeart}
                                    onClick={this.forwardOneStep}
                                />
                            </Row>
                            <div className="item-detail-charge-per-hour">1時間：100円</div>
                            <div className="item-detail-charge-per-day">1　日：1000円</div>
                            
                            <Link to='/request'>
                                <Button className="item-detail-goto-request">借りる</Button>
                            </Link>
                            
                            {/* <div className="item-detail-owner">{this.props.item.name}</div> */}
                            <div className="item-detail-owner">
                                {/* <Image src={this.props.item.image} className="item-detail-item-owner-image"/> */}
                                park　★★★★★</div>
                            <div className="item-detail-rent-state">貸し出し可能</div>
                            {/* <div className="item-detail-charge">利用料：1000円/日</div> */}
                            <div className="item-detail-more-detail-info-header">
                                その他の情報
                            </div>
                            <div className="item-detail-more-detail-info-contents">
                                ブランド名：DELL<br/>
                                サイズ：24インチ<br/>
                                購入時価格：21600円<br/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Navbar/>
            </div>

        )
    }
}



const mapStateToProps = (items, ownProps) => {
    // console.log('items', state);
    // console.log('items', items);
    const item = items[ownProps.match.params.id]
    return { item: item };
}

const mapDispatchToProps = ({ getItem, getItemImages })

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)