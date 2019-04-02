import React, { Component } from 'react';
import queryString from 'query-string'
import ItemList from './ItemList'
import './list.css'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchValue: ''
    }
  }

  componentDidMount() {
    let searchValue = queryString.parse(this.props.location.search).search
    this.getItems(searchValue);
  }

  componentDidUpdate(nextProps) {
    let searchValue = queryString.parse(this.props.location.search).search
    if (searchValue !== this.state.searchValue){
      this.getItems(searchValue);
    }
  }

  getItems(searchValue) {
    console.log('Items')
    this.setState({ searchValue: searchValue })
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchValue}`)
      .then(results => results.json())
      .then(results => this.setState({items: results.results}))
  }
  render() {
    return (
      <ul>
        { this.state.items.map(function(item,index){
          return (
            <ItemList item={item} key={index} />
          )
        })}
      </ul>
    );
  }
}

export default List;