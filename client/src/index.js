import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </Provider>,
    document.getElementById('root'));
  reportWebVitals();
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});


