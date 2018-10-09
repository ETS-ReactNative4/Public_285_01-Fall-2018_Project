import React, { Component } from 'react';
import '../stylesheets/Store.css';

export class Store extends Component {
    render() {
        return(
            <div className="Home">
               <h1 className="title">Store</h1>
                <div className="item1">
                  <div className="thumbnail">
                     <img src="https://1.bp.blogspot.com/-STXLqSdhkqs/UWVT8z02sbI/AAAAAAAC6J0/mvW8SvUPcBs/s400/Gatsby___1A.jpg" alt="..."></img>
                       <div className="caption">
                         <h3>The Great Gatsby</h3>
                          <p className="description">Great Book!!!!!!</p>
                        <div>
                            <div className="price">12$</div>
                            <a href="#" className="addCart" role="button">Add to Cart</a>
                        </div>
                      </div>
                  </div>
             </div>

                       <div className="item2">
                  <div className="thumbnail">
                     <img src="https://1.bp.blogspot.com/-STXLqSdhkqs/UWVT8z02sbI/AAAAAAAC6J0/mvW8SvUPcBs/s400/Gatsby___1A.jpg" alt="..."></img>
                       <div className="caption">
                         <h3>The Great Gatsby</h3>
                          <p className="description">Another Great Book!!!!!!</p>
                        <div>
                            <div className="price">13$</div>
                            <a href="#" className="addCart" role="button">Add to Cart</a>
                        </div>
                      </div>
                  </div>
             </div>

                       <div className="item3">
                  <div className="thumbnail">
                     <img src="https://1.bp.blogspot.com/-STXLqSdhkqs/UWVT8z02sbI/AAAAAAAC6J0/mvW8SvUPcBs/s400/Gatsby___1A.jpg" alt="..."></img>
                       <div className="caption">
                         <h3>The Great Gatsby</h3>
                          <p className="description">Third Great Book!!!!!!</p>
                        <div>
                            <div className="price">14$</div>
                            <a href="#" className="addCart" role="button">Add to Cart</a>
                        </div>
                      </div>
                  </div>
             </div>

    </div>
        );
    }
}