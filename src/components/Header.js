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
                  <li><a className="nav" href="https://twitter.com/"><img src="http://ratopati.prixa.net/media/albums/twitter_AvtSsRk7TV.png" alt="twitter"></img>
                    </a></li>
                  <li><a className="nav" href="https://www.facebook.com/"><img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19760.png" alt="facebook"></img>
                  </a></li>
                  <li><a className="nav" href="https://www.instagram.com/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" alt="instagram"></img>
                  </a></li>
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




