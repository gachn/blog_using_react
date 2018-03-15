/**
 * Created by Gaurav on 3/16/2018.
 */
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class BlogDisplay extends Component{

    renderSideBar=()=>{
        return(

            <div className="col-md-4">
                <div className="card my-4">
                <div className="d-inline">
                    <div className="pull-xs-right">
                        <Link to="'/" className="btn btn-danger " >Delete</Link>
                    </div>
                </div>
                </div>
                 {/*Search Widget*/}
                <div className="card my-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button">Go!</button>
                </span>
                        </div>
                    </div>
                </div>

                {/*<!-- Categories Widget -->*/}
                <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="#">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="#">CSS</a>
                                    </li>
                                    <li>
                                        <a href="#">Tutorials</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<!-- Side Widget -->*/}
                <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                </div>

            </div>
        )
    }
    render(){
        const {post} = this.props;
        return(
        <div className="row">
        {/*<!-- Post Content Column -->*/}
        <div className="col-lg-8">
        {/*<!-- Title -->*/}
        <h1 className="mt-4">{post.title}</h1>
        {/*<!-- Author -->*/}
        <p className="lead">
        by
        <Link to="#" >Dummy Author</Link>>
        </p>

        <hr />

        {/*<!-- Date/Time -->*/}
        <p>Posted on January 1, 2018 at 12:00 PM</p>

        <hr />

        {/*<!-- Preview Image -->*/}
        <img className="img-fluid rounded" src="http://placehold.it/900x300" alt="" />

        <hr />

        {/*<!-- Post Content -->*/}
            {post.content}
        <hr />








        </div>
            {this.renderSideBar()}
        </div>
        );
        }

}