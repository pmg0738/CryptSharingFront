import React from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './style.scss';
import { 
    Container,
    Form,
    Row,
    Col,
    Button,
    Dropdown,
    DropdownButton,
    Image,
    ButtonToolbar,
    InputGroup,
    FormControl,
} from 'react-bootstrap';

export default class SearchByOptionComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedCategory:"カテゴリー",
            periodVarientOneHour:"outline-primary", 
            periodVarientOneDay:"outline-success",
            periodStyle: '',
            priceValue: {min:0, max:3500},
            distance: {min:0, max:30},
        }
    }

    changeSelectedCategory = (categoryName) =>{
        this.setState({selectedCategory: categoryName})
    }
    changeVarientOnehour = () =>{
        this.setState({
            periodVarientOneHour:"primary",
            periodVarientOneDay:"outline-success"
        })
    }
    changeVarientOneday = () =>{
        this.setState({
            periodVarientOneHour:"outline-primary",
            periodVarientOneDay:"success"
        })
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
                                        size="lg"
                                        title={this.state.selectedCategory}
                                        className="option-search-category-dropdown-button"
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
                            <Row className="option-search-lent-price-head">
                                最大料金 (円)
                                <FormControl
                                    className="option-search-distance-input"
                                    placeholder="ex)200"
                                    value={this.state.priceValue.max}
                                    onChange={value => this.setState({distance: value})}
                                />
                            </Row>
                            <Row className="option-search-lent-price-head">
                                最小料金 (円)
                                <FormControl
                                    className="option-search-distance-input"
                                    placeholder="ex)1"
                                    value={this.state.priceValue.min}
                                    onChange={value => this.setState({distance: value})}
                                />
                            </Row>
                            <Row className="option-search-lent-price-row">
                                <InputRange
                                    className="option-search-price-input-range"
                                    step={2}
                                    formatLabel = {value => `${value}円`}
                                    maxValue={10000}
                                    minValue={0}
                                    value={this.state.priceValue}
                                    onChange={value => this.setState({priceValue:value})}
                                />
                            </Row>
                            <Row className="option-search-distance-head">
                                最大距離 (km)
                                <FormControl
                                    className="option-search-distance-input"
                                    placeholder="ex) 5"
                                    value={this.state.distance.max}
                                    onChange={value => this.setState({distance: value})}
                                />
                            </Row>

                            <Row className="option-search-distance-head">
                                最小距離 (km)
                                <FormControl
                                    className="option-search-distance-input"
                                    placeholder="ex) 5"
                                    value={this.state.distance.min}
                                    onChange={value => this.setState({distance: value})}
                                />
                            </Row>
                            
                            <Row className="option-search-distance-row">
                                <InputRange
                                    className="option-search-distance-input-range"
                                    step={2}
                                    formatLabel = {value => `${value}km`}
                                    maxValue={60}
                                    minValue={0}
                                    value={this.state.distance}
                                    onChange={value => this.setState({distance:value})}
                                />
                            </Row>
                        </Form>
                </div>
            
        )
    }
}
