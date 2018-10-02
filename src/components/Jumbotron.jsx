import React, { Component } from 'react'
import './Jumbotron.css';

export default class Jumbotron extends Component {
  render() {
    return (
      <article className="banner">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <h1 className="display-1">{this.props.title}</h1>
              <p className="lead">{this.props.subtitle}</p>
          </div>        
        </div>
      </article>
    )
  }
}
