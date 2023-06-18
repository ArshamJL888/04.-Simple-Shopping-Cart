import React, { Component } from 'react'
import './Product.css'
export default class Product extends Component {
  constructor(prop) {
    super(prop);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(event, id) {
    event.preventDefault();
    this.props.addFunction(id);
  }

  render() {
    return (
      <div className='product-card'>
        <h5 className='product-title'>{this.props.title}</h5>
        <img className='product-img' src={this.props.img} alt="Product Photo" />
        <div className='product-footer'>
          <p className='product-price'>${this.props.price}</p>
          <button onClick={(event) => this.addProduct(event, this.props.id)} className='add-btn'>Add To Cart</button>
        </div>
      </div>
    )
  }
}
