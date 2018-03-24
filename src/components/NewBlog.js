/**
 * Created by Gaurav on 2/26/2018.
 */
import React,{Component} from 'react'
import{Field ,reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createNewPost} from '../actions'

 class NewBlog extends Component{
     renderField(field){

         const {meta:{touched,error}} = field;
         const className=`form-group ${touched && error ? 'has-danger':' ' }`
        return(
            <div className={className}>
                <label>{field.label}</label>
                <input type="text"
                       className="form-control"
                       {...field.input}
                />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
     }
     renderTextArea(field){

         const {meta:{touched,error}} = field;
         const className=`form-group ${touched && error ? 'has-danger':' ' }`
         return(
             <div className={className}>
                 <label>{field.label}</label>
                 <textarea rows="8" cols="50"
                        className="form-control"
                        {...field.input}
                 >

                 </textarea>
                 <div className="text-help">{touched ? error : ''}</div>
             </div>
         );
     }

   onSubmit(values){
        this.props.createNewPost(values,()=>{
            this.props.history.push('/');
        });
   }
    render(){
        const {handleSubmit} = this.props;
        return (

            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderTextArea}
                />
                <button className="btn btn-dark" type="submit">Post It</button>
                <Link to="/" className="btn btn-danger" >Cancel</Link>
            </form>
        );
    }
}
function validate(values) {
    //receive all the form data to validate
    //validation is successfully if errors object is empty
    const errors={};
    if(!values.title)
            errors.title = "Enter a Title for your Blog !";
    if(!values.categories)
            errors.categories = "Enter some Tags to your Blog !";
    if(!values.content)
            errors.content = "Enter the content for your Blog !";

    //validate input done below
    return errors;
 }

export default reduxForm({
    validate,
    form:'PostNewForm'
})(
    connect(null,{createNewPost})(NewBlog)
);