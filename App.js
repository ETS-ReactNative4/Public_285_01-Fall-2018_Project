import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  edit () {
      alert('Editing comment');
  };
    render() {
    return (
      <div className="App">

          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Biography</h1>
          </header>

          <p className="info">
          this is we will put the clients biography ..............................
            .........................................................................
            ..........................................................................
            .......................................................................
            ........................................................................
            ............................................................................
            .............................................................................
        </p>

          <div className="taskbar">
              <ul>
                  <li className="task"><a href="#home">Home</a></li>
                  <li className="task"><a href="#blogs">Blogs</a></li>
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

export default App;
