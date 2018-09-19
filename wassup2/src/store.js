import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    wassups: [
        {id: 1, content: 'Post 1'},
        {id: 2, content: 'Post 2'},
        {id: 3, content: 'Post 3'},
        {id: 4, content: 'Post 4'},
    ],
    newWassup: ''
};

let store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;