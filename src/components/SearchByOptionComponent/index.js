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
    // FormControl,
} from 'react-bootstrap';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Grid from '@material-ui/core/Grid';



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
            feeType: 'HOUR',
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
                <div className="search-by-option-container">
                        <Form className="option-search-search-form">
                            <Row className="option-search-free-word-search-row">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control className="option-search-free-word-search-form" type="text" placeholder="フリーワード検索" />
                                </Form.Group>
                            </Row>
                            {/* <Row className="option-search-category-row">
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
                            </Row> */}
                             <Grid
                                container
                                direction="column"
                                // justify="flex-start"
                                alignItems="flex-start"
                                >

                            <FormControl required margin="normal" variant="outlined" className="" borderColor="#ffffff" style={{color: "#ffffff", borderColor: "#ffffff"}}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    >
                                <InputLabel htmlFor="age-native-required" style={{color: "#ffffff"}}>カテゴリ</InputLabel>
                                <Select
                                    native
                                    // value={state.age}
                                    // onChange={handleChange('age')}
                                    name="age"
                                    inputProps={{
                                        id: 'age-native-required',
                                    }}
                                    style={{color: "#ffffff"}}
                                >
                                    <option value="" />
                                    <option value="レディース"/>
                                    <option value="メンズ"/>
                                    <option value="ゲーム、本"/>
                                    <option value="スポーツ、レジャー"/>
                                    <option value="工具"/>
                                    <option value="ジュエリー"/>
                                    <option value="その他"/>
                                </Select>
                                </Grid>
                            </FormControl>

                            {/* <Row className="option-search-lent-period-head">料金</Row>
                            <Row className="option-search-lent-period-button">
                                <Button 
                                    className="button-one-hour" 
                                    variant={this.state.periodVarientOneHour}
                                    onClick={this.changeVarientOnehour}>1時間</Button>
                                <Button 
                                    className="button-one-day"　
                                    variant={this.state.periodVarientOneDay}
                                    onClick={this.changeVarientOneday}>1日</Button>                 
                            </Row> */}

                            <FormControl component="fieldset" className="">
                                <FormLabel component="legend"  style={{color: "#ffffff"}} margin="normal">料金</FormLabel>
                                    <RadioGroup aria-label="gender" name="gender2" value={this.state.feeType} 
                                        onChange={(e) => this.setState({feeType: e.target.value}) }
                                    >
                                        <Grid
                                            container
                                            direction="row"
                                            justify="center"
                                            alignItems="center"
                                            >
                                            <FormControlLabel
                                                value="HOUR"
                                                control={<Radio color="primary" style={{color: "#ffffff"}} />}
                                                label="1時間"
                                                labelPlacement="start"
                                                style={{color: "#ffffff"}}
                                            />
                                            <FormControlLabel
                                                value="DAY"
                                                control={<Radio color="primary" style={{color: "#ffffff"}} />}
                                                label="1日"
                                                labelPlacement="start"
                                                style={{color: "#ffffff"}}
                                            />
                                    </Grid>                                                              
                                    </RadioGroup>
                                {/* <FormHelperText>labelPlacement start</FormHelperText> */}
                            </FormControl>
                            <br/>
                            <FormControl required margin="normal" variant="outlined" className="" borderColor="#ffffff" style={{color: "#ffffff", borderColor: "#ffffff"}}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                <InputLabel htmlFor="age-native-required" style={{color: "#ffffff"}}>都道府県</InputLabel>
                                <Select
                                    native
                                    name="age"
                                    inputProps={{
                                        id: 'age-native-required',
                                    }}
                                    style={{color: "#ffffff"}}>
                                    <option value="" />
                                    {prefectures.map(prefecture => <option onClick={()=>{this.changeSelectedPrefecture({prefecture})}}>{prefecture}</option>)}
                                </Select>
                                </Grid>
                            </FormControl>

                            </Grid>



                            {/* <Row className="option-search-prefecture-row">
                            <ButtonToolbar>
                                    <DropdownButton
                                        size="md"
                                        title={this.state.selectedPrefecture}
                                        variant={this.state.prefectureDropdownVarient}
                                    >
                                        {prefectures.map(prefecture => <Dropdown.Item onClick={()=>{this.changeSelectedPrefecture({prefecture})}}>{prefecture}</Dropdown.Item>)}
                                    </DropdownButton>   
                                </ButtonToolbar>   
                            </Row> */}
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


