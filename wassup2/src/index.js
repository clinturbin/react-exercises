import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import reducer from './reducer';

// 1) Make a redux store, start it off with a list of wassups
import { createStore } from 'redux';
import { Provider    } from 'react-redux';

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

let app = <Provider store={store}><Router/></Provider>

ReactDOM.render(app, document.getElementById('root'));


// ReactDOM.render(<Router />, document.getElementById('root'));