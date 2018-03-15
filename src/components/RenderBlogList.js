/**
 * Created by Gaurav on 3/16/2018.
 */
import React,{Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';

export default class RenderBlogList extends Component{

    render=()=>{
        const {post} =this.props;
            return (
                <div key={post.id}>
                <div className="post-preview">
                    <Link to={`/post/${post.id}`}>
                        <h2 className="post-title">
                            {post.title}
                        </h2>
                        <h3 className="post-subtitle">
                            {post.categories}
                        </h3>
                    </Link>
                    <p className="post-meta">Posted by
                        <a href="#">Start Bootstrap</a>
                        on September 24, 2018</p>
                </div>
                <hr/>
            </div>
            );
    };
}