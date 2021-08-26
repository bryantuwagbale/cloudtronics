//import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import  { reducers }  from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    products: [],
    cart: [],
    loginOpen: false,
    cartOpen: false,
    categories: [],
    currentCategory: ''
};

const store = createStore(reducers,initialState, composeWithDevTools());
  
export default store;