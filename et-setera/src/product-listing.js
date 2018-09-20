import React from 'react';

let ProductListing = (props) => console.log(props) ||
    <li>
        <div>
            <img className='image' src={props.product['imageURL']} alt='' />
        </div>
        <p>{props.product['title']}</p>
        <p>{props.product['description']}</p>
        <p>{`Key: ${props.product['id']}`}</p>
    </li>

export default ProductListing;