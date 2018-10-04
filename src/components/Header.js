import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/Header.css';

export class Header extends Component {
    render() {
    return (
      <div className="Head">

          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          </header>

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

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }

export default Header;




