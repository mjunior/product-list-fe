import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import queryString from 'query-string'
import NavBar from './components/navbar/NavBar'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import ItemDetail from './components/item-detail/ItemDetail'
import List from './components/list/List'
import './App.css';
import {
  Container,
  Col,
  Row
} from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      breadcrumb: []
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(breadcrumb){
    if(breadcrumb.join('') !== this.state.breadcrumb.join('')){
      this.setState({ breadcrumb: breadcrumb})
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Container>
            <Row>
            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 10, offset: 1 }}>
              <Breadcrumb items={this.state.breadcrumb}/>
              <div className="page-body">  
                  <Route path="/items/:id" component={(props) => <ItemDetail {...props} handleChange={this.handleChange} />} exact />
                <Route path="/items" component={(props) => <List {...props} handleChange={this.handleChange}/>} exact /> 
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
