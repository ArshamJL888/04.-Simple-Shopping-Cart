import React, { Component } from 'react'
import './Cartproduct.css'
export default class Cartproduct extends Component {

  constructor(prop) {
    super(prop);
    this.removeProduct = this.removeProduct.bind(this)
  }

  removeProduct(event, id) {
    event.preventDefault();
    this.props.removeFunction(id);
  }
  render() {
    return (
      <>
        <div className='pro-info'>
          <img className='cart-img' src={this.props.img} alt="" />
          <p className='cart-text'>{this.props.title}</p>
        </div>
        <div className='pro-price'>
          <p className='product-price'>${this.props.price}</p>
        </div>
        <div className='pro-action'>
          <button className='remove-btn' onClick={(event) => this.removeProduct(event, this.props.id)}>Remove</button>
        </div>
      </>
    )
  }
}
