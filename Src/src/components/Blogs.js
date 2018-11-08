import React, { Component } from 'react';
import '../stylesheets/Blogs.css';

export class Blogs extends Component {
    render() {
        return(
            <div className="Blog">

                <h1 className="blogTitle">God's Plans for Us Sinners</h1>

                <p className="blogText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Cras in porta eros. Duis a mi tristique, aliquet nisl ut, dignissim. 
                </p>
                <div className="created">
                created: October 30, 2018
                </div>
                <div className="comments">
                    <div className="commentBody">
                    testUser123: I disagree strongly.
                    </div>
                    <div className="commentDate">
                    commented: October 31, 2018
                    </div>
                </div>
            </div>
        );
    }
}