import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware,combineReducers} from 'redux';

import {Provider} from 'react-redux';
  
import store from './BaseStore';
import App from '../../App';
import { configureStore } from '@reduxjs/toolkit';
 
const rootReducer=combineReducers({ 
})


// Passing burgerReducer to createStore
const store = configureStore(rootReducer, applyMiddleware(thunk));
const Redux= () => {
  return (
    <Provider store={store}>
    <App></App>
    </Provider>
  );
};
    
  
export default Redux;