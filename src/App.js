import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import {
  Col,
  Row,  
} from 'react-bootstrap';

import MainSearch from './screens/MainSearch';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import ChatScreen from './screens/ChatScreen';


export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        <BrowserRouter>
          <Row>
            <Col></Col>
            <Col>
              <Route path='/MainSearch' component={MainSearch}/>
              <Route path='/ItemList' component={ItemList}/>
              <Route path='/ItemDetail' component={ItemDetail}/>
              <Route path='/ChatScreen' component={ChatScreen}/>
            </Col>
          </Row>
        </BrowserRouter>
      </div>
    )
  }
}


