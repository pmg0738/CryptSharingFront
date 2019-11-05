import React from 'react';
import InputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import {prefectures} from './prefectures';
import './style.scss';
import { 
    Form,
    Row,
    Col,
    Button,
    Dropdown,
    DropdownButton,
    ButtonToolbar,
    InputGroup,
    FormControl,
} from 'react-bootstrap';

export default class SearchByOptionComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedCategory:"カテゴリー",
            categoryDropdownVarient:"outline-secondary",

            selectedPrefecture: "都道府県",
            prefectureDropdownVarient:"outline-primary",

            dropdownColor: "dropdown-default-color",
            periodVarientOneHour:"outline-info", 
            periodVarientOneDay:"outline-success",
            periodStyle: '',
            priceValue: {min:10, max:2000},
            distance: {min:0, max:30},
        }
    }

    changeSelectedCategory = (categoryName) =>{
        this.setState({selectedCategory: categoryName})
        this.setState({categoryDropdownVarient: "secondary"})
    }

    changeSelectedPrefecture = (prefecture) =>{
        console.log('prefecture', prefecture.prefecture)
        this.setState({selectedPrefecture: prefecture.prefecture})
        this.setState({prefectureDropdownVarient: "primary"})
    }

    changeVarientOnehour = () =>{
        this.setState({
            periodVarientOneHour:"info",
            periodVarientOneDay:"outline-success"
        })
    }
    changeVarientOneday = () =>{
        this.setState({
            periodVarientOneHour:"outline-info",
            periodVarientOneDay:"success"
        })
    }

    onFormControlChangeMaxPrice = (e)=>{
        this.setState({priceValue: {max: e.target.value, min: this.state.priceValue.min}});
        console.log(e.target.value)
    }

    onFormControlChangeMinPrice = (e)=>{
        this.setState({priceValue: {max: this.state.priceValue.max, min: e.target.value}});
    }



    render() {
        return (
                <div>
                        <Form className="option-search-search-form">
                            <Row className="option-search-free-word-search-row">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className="option-search-free-word-search-form" type="text" placeholder="フリーワード検索" />
                                </Form.Group>
                            </Row>
                            <Row className="option-search-category-row">
                                <ButtonToolbar>
                                    <DropdownButton
                                        style={{fontWeight: "bold"}}
                                        size="md"
                                        title={this.state.selectedCategory}
                                        className={this.state.dropdownColor}
                                        variant={this.state.categoryDropdownVarient}
                                        
                                    >
                                        <Dropdown.Item eventKey="1" onClick={()=>{this.changeSelectedCategory("レディース")}}>レディース</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onClick={()=>{this.changeSelectedCategory("メンズ")}}>メンズ</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" onClick={()=>{this.changeSelectedCategory("ゲーム、本")}}>ゲーム、本</Dropdown.Item>
                                        <Dropdown.Item eventKey="4" onClick={()=>{this.changeSelectedCategory("スポーツ、レジャー")}}>スポーツ、レジャー</Dropdown.Item>
                                        <Dropdown.Item eventKey="5" onClick={()=>{this.changeSelectedCategory("工具")}}>工具</Dropdown.Item>
                                        <Dropdown.Item eventKey="6" onClick={()=>{this.changeSelectedCategory("ジュエリー")}}>ジュエリー</Dropdown.Item>
                                        <Dropdown.Item eventKey="7" onClick={()=>{this.changeSelectedCategory("その他")}}>その他</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonToolbar>
                            </Row>

                            <Row className="option-search-lent-period-head">レンタル期間</Row>
                            <Row className="option-search-lent-period-button">
                                <Button 
                                    className="button-one-hour" 
                                    variant={this.state.periodVarientOneHour}
                                    onClick={this.changeVarientOnehour}>1時間</Button>
                                <Button 
                                    className="button-one-day"　
                                    variant={this.state.periodVarientOneDay}
                                    onClick={this.changeVarientOneday}>1日</Button>                 
                            </Row>
                            <Row className="option-search-prefecture-row">
                            <ButtonToolbar>
                                    <DropdownButton
                                        size="md"
                                        title={this.state.selectedPrefecture}
                                        variant={this.state.prefectureDropdownVarient}
                                    >
                                        {prefectures.map(prefecture => <Dropdown.Item onClick={()=>{this.changeSelectedPrefecture({prefecture})}}>{prefecture}</Dropdown.Item>)}
                                    </DropdownButton>   
                                </ButtonToolbar>   
                            </Row>
                            <Row className="option-search-lent-price-head">
                                最大料金 (円)
                                <FormControl
                                    className="option-search-max-price-input"
                                    placeholder="2000"
                                    value={this.state.priceValue.max}
                                    onChange={this.onFormControlChangeMaxPrice}
                                />
                            </Row>
                            <Row className="option-search-lent-price-head">
                                最小料金 (円)
                                <FormControl
                                    className="option-search-min-price-input"
                                    placeholder="10"
                                    value={this.state.priceValue.min}
                                    onChange={this.onFormControlChangeMinPrice}
                                />
                            </Row>
                            <Row className="option-search-lent-price-row">
                                <InputRange
                                    className="option-search-price-input-range"
                                    step={5}
                                    formatLabel = {value => `${value}円`}
                                    maxValue={10000}
                                    minValue={0}
                                    value={this.state.priceValue}
                                    onChange={value => this.setState({priceValue:value})}
                                    draggableTrack={true}
                                />
                            </Row>
                        </Form>
                </div>
            
        )
    }
}


