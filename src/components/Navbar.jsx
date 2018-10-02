import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
        <div className="container">
        <Link className="navbar-brand" to="/">Doc Josh</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hamburger" aria-controls="hamburger" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
          </span>
        </button>

          <div className="collapse navbar-collapse" id="hamburger">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" exact activeStyle={
                  { color:'slateblue' }
                }>Home <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs" exact activeStyle={
                  { color:'slateblue' }
                }>Blogs</NavLink>
              </li>
              
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/store" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Store</NavLink>
                <div className="dropdown-menu" aria-labelledby="dropdown03">
                  <NavLink className="dropdown-item" to="/books">Books</NavLink>
                  <NavLink className="dropdown-item" to="/apparel">Apparel</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/podcasts" exact activeStyle={
                  { color:'slateblue' }
                }>Podcasts</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

