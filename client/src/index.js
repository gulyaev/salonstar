import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={store.getState()} addPost={store.addPost.bind(store)} onPostChange={store.onPostChange.bind(store)}/>,
    document.getElementById('root'));
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);