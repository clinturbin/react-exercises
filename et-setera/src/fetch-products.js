import React from 'react';
import {API_URL} from './variables';

let fetchProducts = (Component, url) => 
    class FetchProducts extends React.Component {
        componentDidMount() {
            fetch(API_URL + url)
            .then(res => res.json())
            .then(result => {
                this.props.dispatch({
                    type: 'LOAD_PRODUCTS',
                    result: result
                })
            })
        }
        render() {
            return <Component {...this.props}/>
        }
    };

export default fetchProducts;