import React, { Component } from 'react';
import '../stylesheets/Blogs.css';

export class Blogs extends Component {
    render() {
        return(
            <div className="Blog">

                <h1 className="blogTitle">Problems in Politics</h1>

                <p className="blogText">
                        Things need to change right now. I am very experianced, 
                        and I know what I am talking about. I am tired of the problems.
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