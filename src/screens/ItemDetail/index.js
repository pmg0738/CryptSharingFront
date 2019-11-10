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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faHeart } from '@fortawesome/free-solid-svg-icons'

import { connect　} from 'react-redux';
import { getItem } from '../../redux/actions/items.js';

class ItemDetail extends React.Component {
    constructor(props){
        super(props);

        const itemId = this.props.match.params.id;
        const item   = this.props.items.item[itemId];
        
        this.state = {
            itemDetailFavoriteIcon: "default",
            images: [],
            imageStartIndex: 0, 
            me: {
                id: "1234",
                name: "yushi",
                favoriteItemId:["2"],
                usedHistoryItemId:["4"],
                rentalItemId:["3"], 
                requestItemId:["5","6","7","8"]
            },            
            // item: item,                
                // items[this.props.location.pathname.slice('/items/'.length,)], //URLの最後に来るidを指定
            selectedImage: item ? item.images[0].url : "",
        }
        this.item = {
            fee_per_hour: 0,  
            fee_per_day: 0,  
            images: [],
        };
        console.log(this.props)
        console.log("DETAIL", this.props);
    }

    componentWillMount() {
        this.props.getItem(this.props.match.params.id);
        console.log("RES Will", this.props);
        // this.item = this.props.items.item[this.props.match.params.id];
    }

    componentDidMount() {
        // this.props.getItem(this.props.match.params.id);
        console.log("RES Did", this.props);
        // this.item = this.props.items.item[this.props.match.params.id];
    }


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


    handleFavoriteButtonClassName = (favorite) => {
        this.setState({itemDetailFavoriteIconClassName: favorite ? "item-liked": "default" })
    }

    clickFavoriteButton = () => {
        const favoriteItemId = this.state.me.favoriteItemId;

        const itemId = this.state.item.id;

        const favorite = favoriteItemId.indexOf(itemId) >= 0;

        if(favorite) {
            const index = favoriteItemId.indexOf(itemId);
            delete favoriteItemId[index];
        }
        else {
            favoriteItemId.push(itemId);
        }
        
        const { me } = this.state;
        this.setState({
            me: {
                id: me.id,
                name: me.name,
                usedHistoryItemId: me.usedHistoryItemId,
                rentalItemId: me.rentalItemId,
                requestItemId: me.requestItemId,
                favoriteItemId: favoriteItemId // ここだけ更新
            }
        })
        // ボタンのデザインを変える
        this.handleFavoriteButtonClassName(!favorite)
    }

    renderButton = () => {
        const isMine =　false;

        if(isMine) {
            return (
                <div>
                    <Link to='/items/new/post'>
                        <p><Button className="item-detail-edit">編集</Button></p>
                    </Link>

                    <Link to='/items/new/post'>    
                        <p><Button className="item-detail-delete">削除</Button></p>
                    </Link>
                </div>
            )
        }


        // else if(favorite) {
        //     return (
        //         <Link to='/request'>
        //             <Button className="item-detail-goto-request">借りる</Button>
        //         </Link>
        //     )
        // }


        // else if(usedHistory) {
        //     return (
        //         <div>
        //             <p>
        //                 使用期間：2019年5月20日～2019年5月25日
        //             </p>
        //             <Link to='/request'>
        //                 <Button className="item-detail-goto-request">借りる</Button>
        //             </Link>
        //         </div>
        //     )
        // }
        // else if(rentaling) {
        //     return (
                
        //         <div className = "item-detail-rent-now">レンタル中です</div>
                
        //     )
        // }
        // else {
        //     return (
        //         <Button >リクエストを取り消す</Button>
        //     )
        // }
        

            // return (
            //     <Link to='/request'>
            //         <Button className="item-detail-goto-request">借りる</Button>
            //     </Link>
            // )
        
    }


    render() {


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
                                <Link to='/items/'>
                                    <Button className="item-detail-button-to-item-list">一覧に戻る</Button>
                                </Link>
                                <FontAwesomeIcon className={this.state.itemDetailFavoriteIconClassName} icon={faHeart}
                                    onClick={this.clickFavoriteButton}

                                />
                            </Row>
                            <div className="item-detail-charge-per-hour">1時間：{this.item.fee_per_hour}円</div>
                            <div className="item-detail-charge-per-day">1　日：{this.item.fee_per_day}円</div>
                            
                            {/* <Link to='/request'>
                                <Button className="item-detail-goto-request">借りる</Button>
                            </Link> */}

                            {this.renderButton()}
                            
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
                {/* <Navbar/> */}
            </div>

        )
    }
}



const mapStateToProps = (state) => {
    return {
        items: state
    }
}

const mapDispatchToProps = ({ getItem })


export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)


