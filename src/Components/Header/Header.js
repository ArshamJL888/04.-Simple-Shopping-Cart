import React, { Component } from 'react'
import './Header.css'
import Navbar from './Navbar'
export default class Header extends Component {
  render() {
    return (
      <>
        <div className='header-top'>
            <img src="./icons/icons8-shopping-100.png" alt="logo" />
            <Navbar />
                <button className='btn'>Sign in / Sign up Free</button>
        </div>
      </>
    )
  }
}
