import React, { Component } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';

export default class Books extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
          <Jumbotron title="" subtitle=""></Jumbotron>
          <div className="container">

                <p>
                   Books Store Page
                </p>
          </div>
      </div>
    )
  }
}
