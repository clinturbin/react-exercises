import { createStore } from 'redux';
import reducer from './reducer';
import products from './products';

let initialState = {
    products: products,
    categories: [
        {categoryId: '1', categoryName: 'Cat1'},
        {categoryId: '2', categoryName: 'Cat2'},
        {categoryId: '3', categoryName: 'Cat3'}
    ],
    cartItems: []
};

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;