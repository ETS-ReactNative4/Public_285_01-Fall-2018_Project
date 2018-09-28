import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/Header.css';

export class Header extends Component {
    render() {
    return (
      <div className="Head">

          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>

          <div className="taskbar">
              <ul>
                  <li className="task"><a href="index.html">Home</a></li>
                  <li className="task"><a href="#Blogs">Blogs</a></li>
                  <li className="task"><a href="store.html">Store</a></li>
                  <li className="task"><a href="#Podcasts">Podcasts</a></li>
              </ul>
          </div>

          <div className="navbar">
              <ul>
                  <li><a href="https://twitter.com/">Twitter</a></li>
                  <li><a href="https://www.facebook.com/">Facebook</a></li>
                  <li><a href="https://www.instagram.com/">Instagram</a></li>
              </ul>

          </div>

      </div>
    );
  }
    }


export default Header;




