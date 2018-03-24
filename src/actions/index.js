import axios from 'axios';

export const fetchData='FetchWeather',typePost='createPost',typeFetchPostById='typeFetchPostById';
const urlRoot = 'http://gachnblog.herokuapp.com/api';


export function fetchPosts(){
    console.log(`${urlRoot}/posts` , " GET");
    const request = axios.get(`${urlRoot}/posts`);
        return{
          type: fetchData,
          payload: request
        };
}

export function createNewPost(blogData,callback) {

    console.log(`${urlRoot}/posts` , " POST");
    const request = axios.post(`${urlRoot}/posts`,blogData).then(callback);
    return{
        type:typePost,
        payload:request
    };
}

export function fetchPostById(id) {
    const request = axios.get(`${urlRoot}/posts/${id}`);
    return{
        type:typeFetchPostById,
        payload:request
    };
}