import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Link} from "react-router-dom";
import Route from "react-router-dom/Route"

import {Header} from './components/Header';
import {Home} from './components/Home';
import {Blogs} from './components/Blogs';
import {Podcasts} from './components/Podcasts';
import {Store} from './components/Store';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
              <div>
              <Header/>
              <BrowserRouter>
              <div>
              <div className="navBar">
              <ul>
                  <li className="nav">
                     <Link to="/">Home</Link>
                  </li>
                  <li className="nav">
                     <Link to="/blogs">Blogs</Link>
                  </li>
                  <li className="nav">
                     <Link to="/store">Store</Link>
                  </li>
                  <li className="nav">
                      <Link to="/podcasts">Podcasts</Link>
                  </li>
              </ul>
          </div>
                   <Route path="/" exact strict component={Home} />
                   <Route path="/blogs" exact strict component={Blogs} />
                   <Route path="/podcasts" exact strict component={Podcasts} />
                   <Route path="/store" exact strict component={Store} />
                </div>
               </BrowserRouter>
               </div>
        );
    }
}

ReactDOM.render(<div>
    <App />
</div>, document.getElementById('root'));
registerServiceWorker();




