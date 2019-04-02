import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import shippingIcon from '../../assets/images/ic_shipping.png'
import {
  Container,
  Col,
  Row
} from 'reactstrap';
const ItemList = ({item}) => (
  <Link to={`items/${item.id}`}>
  <div className="item">
    <Row className="no-gutters">
      <Col md={{ size: 'auto' }}>
        <div className="item_image">
          < img className="item_image--thumbnail"
            src={
              'https://cdn2.wpbeginner.com/wp-content/uploads/2018/05/productcataloginwp-180x180.png'
            }
          />
        </div>
      </Col>
      <Col className="flex-grow-1">
        <div className="item_price">
          <p>R$ 90 <span className="item_price_shipping"></span></p>
        </div>
        <div className="item_description">
          <p>{item.title}</p>
        </div>
      </Col>
    </Row>
  </div></Link>)

export default ItemList