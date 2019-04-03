import React, { Component } from 'react';
import './ItemDetail.css'
import {
  Col,
  Row
} from 'reactstrap';

class ItemDetail extends Component {
  render() {
    return (
      <div className="detail">
        <Row>
          <Col xs={{size: 8}} className="detail_image">
            <img src={'https://10hzvd2nqqtw5fi4x39favty-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/pinboard30-680x680.png'} />
          </Col>
          <Col xs={{size: 4}}>
            <div className="detail_sidebar">
              <div className="detail_siderbar_condition">
                <span>nuevo</span>
              </div>
              <div className="detail_siderbar_title">
                <span>Celular Moto One Lg 32 GB Branco</span>
              </div>
              <div className="detail_siderbar_price">
                <span className="integer">$ 100</span>
                <span className="decimal">30</span>
              </div>
              <div className="detail_sidebar_button">
                <button className="btn btn-primary btn-block">Comprar</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="detail_image">
            <h3>Description</h3>
          </div>
        </Row>
      </div>
    );
  }
}

export default ItemDetail;
