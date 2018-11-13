import React, { Component } from 'react';
import '../stylesheets/Blogs.css';

export class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('/blogs')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    blogs: json,
                })
            });
    }

    render() {

        var {isLoaded, blogs } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        else {

        return(
            <div className="Blog">

                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            Title: {blog.title} <br/> 
                            Blog Text: {blog.blog_text} <br/>
                            Created: {blog.created} <br/> 
                            --------
                        </li>
                    ))}
                </ul>

            </div>
        );
        }
    }
}