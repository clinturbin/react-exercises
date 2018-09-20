import React from 'react';
import ProductListing from './product-listing';

let ProductList = (props) => 
    <ul className='product-list'>
        { props.products.map( product => 
            <ProductListing product={product} key={product['id']} />
        )}
    </ul>

export default ProductList;