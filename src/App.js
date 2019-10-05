import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import {
  Col,
  Row,  
} from 'react-bootstrap';

import MainSearch from './screens/MainSearch';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import ChatScreen from './screens/Chat';


export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        {/* <Route path='/search' component={MainSearch}/> */}
        <BrowserRouter>
          <Row>
            <Col>
              <Route path='/search' component={MainSearch}/>
              <Route path='/items'  component={ItemList}/>
              <Route path='/items/:id' component={ItemDetail}/>
              <Route path='/chat' component={ChatScreen}/>
            </Col>
          </Row>
        </BrowserRouter>
      </div>
    )
  }
}


