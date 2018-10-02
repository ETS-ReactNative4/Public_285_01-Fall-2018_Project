import React, { Component } from 'react'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Jumbotron from './Jumbotron.jsx';

export default class Blogs extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
          <Jumbotron title="" subtitle=""></Jumbotron>
          <div className="container">

          <h2>Doc Josh Peeler</h2>
                <p>
                    Blogs Page
                </p>
          </div>
      </div>
    )
  }
}
