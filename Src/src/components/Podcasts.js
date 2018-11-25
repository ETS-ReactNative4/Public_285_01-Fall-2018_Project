import React, { Component } from 'react';
import '../stylesheets/Podcasts.css';

var finalURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=christianpodcasts&key=AIzaSyA93e_7NX9qHKMzAb7XMCSm0PxRyfW-TI8'

export class Podcasts extends Component {

    constructor(props){
        super(props);

        this.state = {
            resultyt: [],
            isLoaded: false,
        }
    }

    componentDidMount () {
        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
          //console.log(responseJson);
          const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
          this.setState({
              resultyt,
              isLoaded: true,});
        })
        .catch((error) => {
          console.error(error);
        });    
    }


    render() {

        var {isLoaded, resultyt} = this.state;
        console.log(this.state.resultyt);

        if(!isLoaded) {
            return(<div>Loading...</div>);
        }

        else{

        return(
            <div className="Podcast">

                {
                this.state.resultyt.map((link, i) => {
                    console.log(link);
                    var frame = <div key={i} className="youtube"><iframe width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    return frame;
                })
            }
              {this.frame}
            
            
            </div>
        );
        }
    }
}

//youtube API key
//AIzaSyA93e_7NX9qHKMzAb7XMCSm0PxRyfW-TI8 