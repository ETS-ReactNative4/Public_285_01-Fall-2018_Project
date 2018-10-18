import React, { Component } from 'react';
import '../stylesheets/Store.css';

import books from '../data/products.json';

export class Store extends Component {



    render() {
        return(
            <div className="Home">
               <h1 className="title">Store</h1>
                <div className="item1">
                  <div className="thumbnail">
                     <img src={books.products[0].imagePath} alt="..."></img>
                       <div className="caption">
                         <h3>{books.products[0].title}</h3>
                          <p className="description">{books.products[0].description}</p>
                        <div>
                            <div className="price">{books.products[0].price}$</div>
                            <a href="#" className="addCart" role="button">Add to Cart</a>
                        </div>
                      </div>
                  </div>
             </div>

                       <div className="item2">
                       <div className="thumbnail">
                     <img src={books.products[1].imagePath} alt="..."></img>
                       <div className="caption">
                         <h3>{books.products[1].title}</h3>
                          <p className="description">{books.products[1].description}</p>
                        <div>
                            <div className="price">{books.products[1].price}$</div>
                            <a href="#" className="addCart" role="button">Add to Cart</a>
                        </div>
                      </div>
                  </div>
             </div>
                       <div className="item3">
                    <div className="thumbnail">
                     <img src={books.products[2].imagePath} alt="..."></img>
                       <div className="caption">
                         <h3>{books.products[2].title}</h3>
                          <p className="description">{books.products[2].description}</p>
                        <div>
                            <div className="price">{books.products[2].price}$</div>
                            <a href="#" className="addCart" role="button">Add to Cart</a>
                        </div>
                      </div>
                  </div>
             </div>

    </div>
        );
    }
}