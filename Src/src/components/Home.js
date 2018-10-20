import React, { Component } from 'react';
import '../stylesheets/Home.css';
import Josh from "../Josh.jpg";
import Waves from "../wavesBackground.mp4";

export class Home extends Component {
    render() {
        return(
            <div className="Home">
                <div className="backgroundCover">
                <video class="backgroundVid" src ={Waves} autoplay="true" loop="true"></video>
                </div>

                <h1 className="title">Biography</h1>

                <p className="info">
                <img className="profilePic" src={Josh} alt="..."></img>
                    this is where will put the clients biography ..............................
                    .........................................................................
                    ..........................................................................
                    .......................................................................
                    ........................................................................
                    ............................................................................
                    .............................................................................
                </p>
            </div>
        );
    }
}