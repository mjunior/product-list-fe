import React, { Component } from 'react';
import './breadcrumb.css'

const Breadcrumb = ({ items }) => (
  <div class="breadcrumb">
  {items.join(' > ')}
  </div>
)
export default Breadcrumb