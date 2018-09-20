import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let ProductListing = (props) => console.log(props) ||
    <Link to={`/products/${props.product['id']}`} id={props.product['id']} >
        <li className='product-listing'>
            <div>
                <img className='image' src={props.product['imageURL']} alt='' />
            </div>
            <p>{props.product['title']}</p>
            <p>{props.product['description']}</p>
        </li>
    </Link>
    
let ConnectedProductListing = connect()(ProductListing);

export default ConnectedProductListing;