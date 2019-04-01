import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import logo from '../../assets/images/Logo_ML.png';
import ic_Search from '../../assets/images/ic_Search.png';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div class="container">
          <Row className="navbar navbar-expand-lg navbar-light">
            <Col xs={{ size: 1, offset: 0 }} sm={{ size: 1, offset: 1 }}>
              <img src={logo} />
            </Col>
            <Col xs={{ size: 9 }} sm={{ size: 9 }}>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                  <button class="btn btn-light" type="button">
                    <img src={ic_Search} />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

export default NavBar;
