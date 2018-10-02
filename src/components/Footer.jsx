import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <span className="date">{new Date().getDate()}</span>
        </div>
      </footer>
    )
  }
}
