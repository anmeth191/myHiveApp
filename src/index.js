import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reduxReducer from './reduxReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(reduxReducer); 
ReactDOM.render(
<Provider store={ store }> <App /> </Provider>,document.getElementById('root'));
