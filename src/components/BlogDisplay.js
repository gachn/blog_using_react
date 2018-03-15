import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {fetchPostById} from '../actions';
import {connect} from 'react-redux';
import RenderBlogPost from './RenderBlogPost';

class BlogDisplay extends Component{
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchPostById(id);
    }
     render(){
            const {post} = this.props;
            console.log('',post);
           if(!post)
               return <div>Empty</div>;
         return(
            <div className="container">
                <RenderBlogPost post={this.props.post}/>
            </div>
        );
    }

}
function  mapsStateToProps({posts},ownProps) {
    const {id} = ownProps.match.params;
    return {post:posts[id]}
}
export default connect(mapsStateToProps,{fetchPostById})(BlogDisplay);