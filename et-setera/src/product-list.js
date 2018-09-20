import React from 'react';
import ProductListing from './product-listing';

let ProductList = (props) => 
    <ul>
        { props.products.map( product => 
            <ProductListing product={product} key={product['id']} />
        )}
    </ul>

export default ProductList;