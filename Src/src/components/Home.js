import React, { Component } from 'react';
import '../stylesheets/Home.css';
import Josh from "../Josh2.jpg";
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
                Dr. Joshua Peeler Ph.D. <br/>
Josh graduated from New Orleans Theological Seminary with a Ph.D. in Biblical
Exposition. He has served as an associate or senior pastor at southern Baptist
churches in Louisiana and Mississippi. He was awarded the Young Scholars Grant from
Southwestern Seminary’s Land Center, the Emerging Scholars Grant from the
Evangelical Homiletics Society (EHS), and has presented two papers at the EHS annual
meeting. His research interests include pastoral theology, New Testament theology,
homiletics, rhetorical style, and doctrine of humanity. Dr. Peeler and his wife Anna
currently live in New Roads, LA where she is a licensed professional counselor.
                </p>
            </div>
        );
    }
}