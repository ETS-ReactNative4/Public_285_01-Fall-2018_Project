import React, { Component } from 'react';
import '../stylesheets/Header.css';

export class Header extends Component {
    render() {
    return (
      <div className="Head">

          <header className="App-header">
          <div className = "logo">DocJosh</div>
          <div className="g-signin2" data-onsuccess="onSignIn" ></div>
          </header>

          <div className="navbar">
              <ul>
                  <li><a className="nav" href="https://twitter.com/JoshuaMPeeler" target="_blank"><img src="http://ratopati.prixa.net/media/albums/twitter_AvtSsRk7TV.png" alt="twitter"></img>
                    </a></li>
                  <li><a className="nav" href="https://www.facebook.com/jmpeeler" target="_blank"><img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19760.png" alt="facebook"></img>
                  </a></li>
                  <li><a className="nav" href="https://www.instagram.com/joshua.m.peeler" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png" alt="instagram"></img>
                  </a></li>
              </ul>

          </div>

      </div>
    );
  }
    }

export default Header;




