import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
        <Link className="navbar-brand" to="/">Doc Josh</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navbarsExample03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/store" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Store</Link>
                <div className="dropdown-menu" aria-labelledby="dropdown03">
                  <Link className="dropdown-item" to="/books">Books</Link>
                  <Link className="dropdown-item" to="/apparel">Apparel</Link>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/podcasts">Podcasts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

