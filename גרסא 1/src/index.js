import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers,createStore } from 'redux';
import  UserReducer  from './store/Reducer/UserReducer';
import ChatReducer from './store/Reducer/ChatReducer';
import PropReducer from './store/Reducer/PropReducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={createStore(combineReducers({user:UserReducer, chat:ChatReducer, prop:PropReducer}))}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
