import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import reportWebVitals from "./reportWebVitals";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispath.bind(store)} />,
    document.getElementById('root'));
    reportWebVitals();
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);