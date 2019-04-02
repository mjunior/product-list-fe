import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/navbar/NavBar'
import ItemDetail from './components/item-detail/ItemDetail'
import List from './components/list/List'
import './App.css';
import {
  Container,
  Col,
  Row
} from 'reactstrap';
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Container>
            <Row>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }}>
              <div className="bread">Home > Listagem</div>
                <div className="page-body">  
              <Switch> 
                <Route path="/items/:id" component={ItemDetail} exact />
                <Route path="/items" component={List} />
              </Switch>
              </div>
            </Col>
            </Row>
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
