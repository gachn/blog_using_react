import axios from 'axios';

export const fetchData='FetchWeather',typePost='createPost',typeFetchPostById='typeFetchPostById';
const urlRoot = 'http://reduxblog.herokuapp.com/api';
const key = '?key=gachn';

export function fetchPosts(){
    const request = axios.get(`${urlRoot}/posts${key}`);
        return{
          type: fetchData,
          payload: request
        };
}

export function createNewPost(blogData,callback) {
    const request = axios.post(`${urlRoot}/posts${key}`,blogData).then(callback);
    return{
        type:typePost,
        payload:request
    };
}

export function fetchPostById(id) {
    const request = axios.get(`${urlRoot}/posts/${id}/${key}`);
    return{
        type:typeFetchPostById,
        payload:request
    };
}