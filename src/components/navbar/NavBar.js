import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import {
  Row,
  Col,
  Container
} from 'reactstrap';

import logo from '../../assets/images/Logo_ML.png';
import ic_Search from '../../assets/images/ic_Search.png';
import './navbar.css';

class NavBar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ value: event.target.value });
  }
  
  handleSubmit(event){
    event.preventDefault();
    const value = this.state.value;
    this.props.history.push(`/items?search=${value}`);
  }
  
  render() {
    return (
      <header>
        <Container>
          <Row className="navbar navbar-expand-lg navbar-light">
            <Col xs={{ size: 1, offset: 0 }} sm={{ size: 1, offset: 1 }}>
              <img src={logo} />
            </Col>
            <Col xs={{ size: 9 }} sm={{ size: 9 }}>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" value={this.state.value} onChange={this.handleChange} />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-light">
                      <img src={ic_Search} />
                    </button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default withRouter(NavBar);
