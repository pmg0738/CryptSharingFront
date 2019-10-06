import React from 'react';
import './app.scss';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import {
  Col,
  Row,  
} from 'react-bootstrap';

import MainSearch from './screens/MainSearch';
import ItemList from './screens/ItemList';
import ItemDetail from './screens/ItemDetail';
import Chat from './screens/Chat';
import Navbar from './components/Navbar';
import NavbarNoLogo from './components/NavbarNoLogo';



export default class App extends React.Component{
  render(){
  return (
      <div className="App">
        {/* <Route path='/search' component={MainSearch}/> */}
        <BrowserRouter>
            <div className="screen-container">
              <Route exact path='/search' component={MainSearch}/>
              <Route exact path='/items' component={ItemList}/>
              {/* <Route exact path='/items/:id' component={ItemDetail}/> */}
              <Route exact path='/items/1' component={ItemDetail}/>
              <Route exact path='/chat' component={Chat}/>
              {console.log('props', this.props)}
            </div>
            <Navbar/>
        </BrowserRouter>        
      </div>
    )
  }
}


