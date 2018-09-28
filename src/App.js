import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home.jsx'
import Blogs from './components/Blogs.jsx';
import Books from './components/Books.jsx';
import Apparel from './components/Apparel.jsx';
import Podcasts from './components/Podcasts.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/books" component={Books} />
          <Route path="/apparel" component={Apparel} />
          <Route path="/podcasts" component={Podcasts} />
        </div>
      </Router>
    );
  }
}

export default App;
