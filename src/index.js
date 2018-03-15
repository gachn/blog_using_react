import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import BlogListViewer from './components/BlogListViewer'
import promise from 'redux-promise';
import reducers from './reducers';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NewBlog from './components/NewBlog';
import BlogDisplay from './components/BlogDisplay';
import Header from "./components/Header";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <div>

              <Switch>
                  <Route path = '/post/new' component={NewBlog}/>
                  <Route path = '/post/:id' component={BlogDisplay}/>
                  <Route path = '/' component={BlogListViewer}/>
              </Switch>
          </div>
      </BrowserRouter>
  </Provider>
  , document.getElementById('blog-body'));
