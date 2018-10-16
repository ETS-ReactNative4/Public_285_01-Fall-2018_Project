import React, { Component } from 'react';
import '../stylesheets/Store.css';

import books from '../data/products.json';
import cart from '../data/cartItems.json';

export class Cart extends Component {



    render() {
        cart.cartItems[0] = books.products[1];
        return(
            <div className="Home">
               <h1 className="title">Store</h1>
                <div className="item1">
                  <div className="thumbnail">
                     <img src={cart.cartItems[0].imagePath} alt="..."></img>
                       <div className="caption">
                         <h3>{cart.cartItems[0].title}</h3>
                          <p className="description">{cart.cartItems[0].description}</p>
                        <div>
                            <div className="price">{cart.cartItems[0].price}$</div>
                        </div>
                      </div>
                  </div>
             </div>

                       <div className="item2">
                       <div className="thumbnail">
                     <img src={cart.cartItems[0].imagePath} alt="..."></img>
                       <div className="caption">
                         <h3>{cart.cartItems[0].title}</h3>
                          <p className="description">{cart.cartItems[0].description}</p>
                        <div>
                            <div className="price">{cart.cartItems[0].price}$</div>
                        </div>
                      </div>
                  </div>
             </div>
                       <div className="item3">
                    <div className="thumbnail">
                     <img src={cart.cartItems[0].imagePath} alt="..."></img>
                       <div className="caption">
                         <h3>{cart.cartItems[0].title}</h3>
                          <p className="description">{cart.cartItems[0].description}</p>
                        <div>
                            <div className="price">{cart.cartItems[0].price}$</div>
                        </div>
                      </div>
                  </div>
             </div>

    </div>
        );
    }
}