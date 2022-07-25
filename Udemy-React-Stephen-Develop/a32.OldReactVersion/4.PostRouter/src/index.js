import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/post_index';
import PostNew from './components/post_new';
import PostShow from './components/post_show';

import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/posts/new" component={PostNew} />
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/" component={PostsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
