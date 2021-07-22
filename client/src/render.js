import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
import { onPostChange } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} onPostChange={onPostChange}/>,
    document.getElementById('root'));
}
