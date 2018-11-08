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
                            <div className="price">${books.products[0].price}.00</div>
                            <a href="https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567/ref=sr_1_1?s=books&ie=UTF8&qid=1541706084&sr=1-1&keywords=the+great+gatsby" 
                            target="_blank" className="addCart" role="button">Buy</a>
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
                            <div className="price">${books.products[1].price}.00</div>
                            <a href="https://www.amazon.com/Hatchet-Gary-Paulsen/dp/1416936475/ref=sr_1_3?s=books&ie=UTF8&qid=1541706149&sr=1-3&keywords=hatchet"
                            target="_blank" className="addCart" role="button">Buy</a>
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
                            <div className="price">${books.products[2].price}.00</div>
                            <a href="https://www.amazon.com/Casino-Royale-James-Bond-Fleming/dp/1612185436/ref=sr_1_1?s=books&ie=UTF8&qid=1541705941&sr=1-1&keywords=casino+royale"
                            target="_blank" className="addCart" role="button">Buy</a>
                        </div>
                      </div>
                  </div>
             </div>

    </div>
        );
    }
}