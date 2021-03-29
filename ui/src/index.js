import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, /* combineReducers, */ compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from './store/reducers';
import reportWebVitals from './reportWebVitals';

const hasExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers =
  process.env.NODE_ENV === "development" && hasExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
