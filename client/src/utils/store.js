//import { configureStore } from '@reduxjs/toolkit'
import { createStore, applyMiddleware } from 'redux';
import  { reducers }  from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk';

const initialState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
};
const middleware = [thunk];

const store = createStore(reducers,initialState, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
  ));
  
export default store;