import React from 'react';
import './style.scss';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { 
    Alert,
    Container,
    Button,
    Form,
    Row,
    Col,
    Card,
} from 'react-bootstrap';
import loadImage from 'blueimp-load-image';
// import { connect } from 'react-redux';

// import { getItem } from '../../actions/api'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../../components/Navbar';
import eraiza from '../../images/eraiza.png';


import placeholderImage from '../../images/rain.png';
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



class ItemPost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [
                // S__23519271,
                // S__23519273,
                // S__23519274,
                // S__23519275,
                // S__23519276,
                // S__23519277,
                // S__23519278,
                // S__23519279,
                // S__23519280,
                // S__23519281,
            ],
            imageStartIndex: 0,                
            selectedImage: S__23519271,
            isOverNumOfImage: false,
        }
    }

    myArray = (array, index) => {
        let newArray = [];

        for(let i=index; i<index+3; i++){
            newArray.push(array[i])
        }
        return newArray;
    }
    
    // backOneStep = () => {
    //     if(this.state.imageStartIndex>0){
    //         this.setState({imageStartIndex: this.state.imageStartIndex-1})
    //     }
    // }

    // forwardOneStep = () => {
    //     if(this.state.imageStartIndex+2<this.state.images.length-1){
    //         this.setState({imageStartIndex: this.state.imageStartIndex+1})
    //     }
    // }

    deleteImage = (index) => {
        let { images } = this.state;
        images.splice(index, 1);
        this.setState({
            images: images,
            isOverNumOfImage: false,
        });
    }

    // uploadFile = (e) => {
    //     let { images } = this.state;
    //     images.push(e.target.value);
    //     console.log('target', e.target);
    //     console.log('result', e.target.result);
    //     console.log('value', e.target.value);
    //     this.setState({images: images})
    // }


    async imageChangeHandler(e) {
        const { imageUri } = await resizeImage(e);
        let { images } = this.state;

        if(images.length<10){
            images.push(imageUri);
            this.setState({
                images: images,
                isOverNumOfImage: false
            });
        }
        else {
            this.setState({isOverNumOfImage: true})
        }
    }

    renderAlert = (isOver) => {
        if(isOver) {
            return (
                <Alert variant="danger">
                    添付できる画像は１０枚までです
                </Alert>
            );
        }
    }   


    renderPlaceholderImage = (images) => {
        if(images.length==0){
            return (
                <img src={placeholderImage} 
                    className="item-post-placeholder-image"
                />
            );
        }
    }
    


    render() {
        return (
            <div>
                <Container>            
                    {this.renderAlert(this.state.isOverNumOfImage)}
                    <Row>                        
                        <Col sm={12} md={6} lg={6} className="item-detail-pic">
                            <input type="file" className="item-post-select-file-input"
                                value={this.state.file}
                                // onChange={this.uploadFile}
                                accept='image/*'
                                onClick={() => console.log('@@@@')}
                                onChange={e => this.imageChangeHandler(e)}
                            />
                            {this.renderPlaceholderImage(this.state.images)}
                            <Row>                                
                                {this.state.images.map((image, index) => 
                                    <ItemPostCard 
                                        image={image} 
                                        index={index}
                                        deleteImage={() => this.deleteImage(index)}
                                    />
                                )}
                            </Row>
                        </Col>
                        <Col sm={12} md={6} className="item-post-item-info">
                            <Link to='/items'>
                                <Button className="item-detail-button-to-item-list">一覧に戻る</Button>
                            </Link>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    {/* <Form.Label>Email address</Form.Label> */}
                                    <div className="item-post-form-label">商品名</div>                                                        
                                    <Row>
                                    <Form.Control 
                                        className="item-post-item-name-form"
                                        type="text" placeholder="Dell モニター 24インチ"/>
                                    </Row>
                                    <div className="item-post-form-label">料金</div>                                                        
                                    <Row>
                                    <Form.Control 
                                        className="item-post-price-form"
                                        type="number" placeholder="20"/>
                                    <p className="item-post-price-label">円　 /</p>
                                    <select
                                        className="item-post-unit-time-select"
                                        // value={this.state.tag}
                                        onChange={(e) => this.setState({tag: e.target.value})}
                                    >
                                        <option>１分</option>
                                        <option>５分</option>
                                        <option>１０分</option>
                                        <option>１５分</option>
                                        <option>３０分</option>
                                        <option>１時間</option>
                                        <option>１週間</option>
                                        <option>１ヶ月</option>
                                        <option>１年</option>
                                    </select>
                                    </Row>
                                </Form.Group>
                            </Form>
                            <div className="item-post-form-label">その他の情報</div>                                                        
                            <textarea
                                className="item-post-item-detail-textarea"
                                type="text"
                                placeholder='購入価格: 32400円'
                            />

                            {/* <div className="item-detail-more-detail-info-contents">
                                
                            </div> */}
                            <Row className="item-post-confirm-button-container">
                                <Link to='/itempostconfirm'>
                                    <Button className="item-post-confirm-button">確認</Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Navbar/>
            </div>

        )
    }
}

class ItemPostCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selected: false,
        }
    }    

    render() {
        return(
            <Card className="item-post-image-container"
                onClick={() => this.setState({selected: !this.state.selected})}
            >
                <img className="item-post-image" src={this.props.image}></img>
                {[
                    <div/>,
                    <div>
                        <div className="item-post-image-smoke"/>
                        <Button className="item-post-image-delete-button"
                            onClick={this.props.deleteImage}                        
                        >削除</Button>
                    </div>,                    
                ][Number(this.state.selected)]
                }
            </Card>
        )
    }
}




const toBlob = (base64, reject) => {
    const bin = atob(base64.replace(/^.*,/, ''));
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i += 1) {
      buffer[i] = bin.charCodeAt(i);
    }
    // Blobを作成
    try {
      const blob = new Blob([buffer.buffer], {
        type: 'image/jpg',
      });
      return blob;
    } catch (e) {
      reject();
      return false;
    }
  }
  

  export const resizeImage = (event, maxWidth = 1024) => {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0];
      loadImage.parseMetaData(file, (data) => {
        const options = {
          maxWidth,
          canvas: true,
        };
        if (data.exif) {
          options.orientation = data.exif.get('Orientation');
        }
        loadImage(file, (canvas) => {
          const imageUri = canvas.toDataURL('image/jpg');
          const imageFile = toBlob(imageUri, reject);
          resolve({
            imageFile,
            imageUri,
          });
        }, options);
      });
    });
  };


//   const mapStateToProps = (items, ownProps) => {
//     // console.log('items', state);

//     const item = items[ownProps.match.params.id]
//     return { item: item };
// }
// const mapDispatchToProps = ({ getItem })

// export default connect(mapStateToProps, mapDispatchToProps)(ItemPost)
export default ItemPost