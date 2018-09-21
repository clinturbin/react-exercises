import React from 'react';
import {API_URL} from './variables';

let fetchProducts = (Component) => 
    class FetchProducts extends React.Component {
        componentDidMount() {
            fetch(API_URL + '/product')
            .then(res => res.json())
            .then(products => {
                this.props.dispatch({
                    type: 'LOAD_PRODUCTS',
                    products: products
                })
            })
        }
        render() {
            return <Component {...this.props}/>
        }
    };

export default fetchProducts;