import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = state => ({products: state.products})

let ProductPage = (props) => {
    let urlId = props.match.params.id;
    let product = props.products.filter(product => product.id === urlId)[0];
    return (
        <div>
            <div className='product-page-section'>
                <img src={product.imageURL} alt='' width='300' height='300'></img>
            </div>
            <div className='product-page-section'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{`Price: $${product.price}`}</p>
                <button 
                    onClick={()=> {
                        props.dispatch({type: 'ADD_TO_CART', product: product})
                    }}
                >Add to Cart</button>
            </div>
        </div>
    )
};

let ConnectedProductPage = connect(mapStateToProps)(ProductPage);

export default ConnectedProductPage;
    