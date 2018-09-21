import { createStore } from 'redux';
import reducer from './reducer';
// import products from './products';

let initialState = {
    products: [],
    categories: [],
    // categories: [
    //     {categoryId: '1', categoryName: 'Hats'},
    //     {categoryId: '2', categoryName: 'Pants'},
    //     {categoryId: '3', categoryName: 'Tops'},
    //     {categoryId: '4', categoryName: 'Shoes'},
    // ],
    cartItems: []
};

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;