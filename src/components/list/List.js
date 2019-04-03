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
    this.setState({ searchValue: searchValue })
    
    fetch(`http://localhost:5000/api/items?q=${searchValue}`)
      .then(results => results.json())
      .then(results => {
        this.setState({items: results.items})
        this.props.handleChange(results['categories'])
      })
  }
  render() {
    if(this.state.items.length <= 0){
      return(<p>Loading...</p>)
    }
    return (
      <ul>
        { this.state.items.map(function(item,index){
          return (
            <li><ItemList item={item} key={index} /></li>
          )
        })}
      </ul>
    );
  }
}

export default List;
