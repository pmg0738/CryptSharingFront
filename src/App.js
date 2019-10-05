import React from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import {
  Col,
  Row,  
} from 'react-bootstrap';

import MainSearch from './screens/MainSearch';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import Chat from './screens/Chat';
// import Navbar from '.src/components/Navbar';



export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        {/* <Route path='/search' component={MainSearch}/> */}
        <BrowserRouter>
            <Route exact path='/search' component={MainSearch}/>
            <Route exact path='/items' component={ItemList}/>
            {/* <Route exact path='/items/:id' component={ItemDetail}/> */}
            <Route exact path='/items/1' component={ItemDetail}/>
            <Route exact path='/chat' component={Chat}/>
        </BrowserRouter>
      </div>
    )
  }
}


