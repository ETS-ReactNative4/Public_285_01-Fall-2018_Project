import React, { Component } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';

export default class Apparel extends Component {
  render() {
    return (
      
      <div>
        <Navbar></Navbar>
          <Jumbotron title="" subtitle=""></Jumbotron>
          <div className="container">

                <p>
                    Apparel Store Page
                </p>
          </div>
          
      </div>
      /* If a footer is designed, likely to put
          above the last div
      */
    )
  }
}
