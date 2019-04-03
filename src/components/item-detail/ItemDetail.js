import React, { Component } from 'react';
import Currency from '../../helpers/Currency'
import './ItemDetail.css'
import {
  Col,
  Row
} from 'reactstrap';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined
    }
  }

  componentDidMount() {
    let {id} = this.props.match.params
    this.getItem(id);
  }

  getItem(id) {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then(results => results.json())
      .then(results => {
        this.setState({ product: results})
      })
  }

  

  render() {
    if (this.state.product === undefined){
      return (<p>Loading...</p>)
    }

    return (
      <div className="detail">
        <Row>
          <Col xs={{size: 8}} className="detail_image">
            <img src={this.state.product.picture} />
          </Col>
          <Col xs={{size: 4}}>
            <div className="detail_sidebar">
              <div className="detail_siderbar_condition">
                <span>{this.state.product.condition}</span>
              </div>
              <div className="detail_siderbar_title">
                <span>{this.state.product.title}</span>
              </div>
              <div className="detail_siderbar_price">
                <span className="integer">{Currency[this.state.product.price.currency]} {this.state.product.price.amount}</span>
                <span className="decimal">{this.state.product.price.decimals}</span>
              </div>
              <div className="detail_sidebar_button">
                <button className="btn btn-primary btn-block">Comprar</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 12 }}>
            <div className="detail_description">
            <h1 className="detail_description_title">Description</h1>
            <div className="detail_description_text" dangerouslySetInnerHTML={{ __html: this.state.product.description.replace(/(?:\r\n|\r|\n)/g, '<br>') }} />
          </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ItemDetail;
