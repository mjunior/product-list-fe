import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import shippingIcon from '../../assets/images/ic_shipping.png'
import Currency from '../../helpers/Currency'
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
          <img className="item_image--thumbnail" src={item.picture} />
        </div>
      </Col>
      <Col className="flex-grow-1">
        <div className="item_price">
            <p>{Currency[item.price.currency]} {item.price.amount},{item.price.decimals} <span className={item.free_shipping === true ? 'item_price_shipping': ''}></span></p>
        </div>
        <div className="item_description">
          <p>{item.title}</p>
        </div>
      </Col>
    </Row>
  </div></Link>)

export default ItemList