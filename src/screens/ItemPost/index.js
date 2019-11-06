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

import Navbar from '../../components/Navbar';
import eraiza from '../../images/eraiza.png';


import placeholderImage from '../../images/rain.png';


export default class ItemPost extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: [],
            imageStartIndex: 0,                
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

    deleteImage = (index) => {
        let { images } = this.state;
        images.splice(index, 1);
        this.setState({
            images: images,
            isOverNumOfImage: false,
        });
    }

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
                                {/* <Button className="item-detail-button-to-item-list">一覧に戻る</Button> */}
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
                                    {/* <div className="item-post-form-label">料金</div>                                                         */}
                                    
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            <div className="item-post-one-hour-fee">1時間 料金</div>
                                        </Form.Label>
                                        <Col sm="4">
                                            <Form.Control/>
                                        </Col>
                                        <p className="yen">円</p>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm="3">
                                            <div className="item-post-one-hour-fee">1日 料金</div>
                                        </Form.Label>
                                        <Col sm="4">
                                            <Form.Control/>
                                        </Col>
                                        <p className="yen">円</p>
                                    </Form.Group>    
                                </Form.Group>
                            </Form>
                            <div className="item-post-form-label">その他の情報</div>                                                        
                            <textarea
                                className="item-post-item-detail-textarea"
                                type="text"
                                placeholder='購入価格: 32400円'
                            />
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
