import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/Header.css';
import Login from './Login';


export class Header extends Component {
    render() {
    return (
      <div className="Head">

          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
        
        <Login />

          <div className="socialMedia">
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




