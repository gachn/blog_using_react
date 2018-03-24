import React,{Component} from 'react';
import {fetchPosts} from '../actions';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import RenderBlogList from './RenderBlogList';

class BlogListViewer extends Component{

    componentDidMount(){
        this.props.fetchPosts();
    }
    displayPosts=()=> {
        if(!this.props.posts){
            return <li>No Data Available</li>
        }
        var list =_.map(this.props.posts, post => {
            return(
                <RenderBlogList key={post.id} post={post} />
           )
        });
       return(
           <div className="row">
               <div className="col-lg-8 col-md-10 mx-auto">
                   {list}
               </div>
           </div>
       );
    };
    render(){

        var renderHTML=(
            <div>
                <div className="fixed-at-right" data-toggle="tooltip" title="Create a new Post">
                    <Link  to="/post/New" style={{"color":"#343a40 !important"}}>
                        <i className="material-icons Dark" style={{"font-size":"100px"}}>add_circle</i>
                    </Link>
                    <br/>
                </div>
                <ul className="list-group">
                    {this.displayPosts()}
                </ul>
            </div>
        )
        return renderHTML;
    }
}
function mapStateToProps( state ) {
    return {posts:state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(BlogListViewer);