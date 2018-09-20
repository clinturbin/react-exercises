import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = state => ({products: state.products})

let ProductPage = (props) => {
    let urlId = props.match.params.id;
    let product = props.products.filter(product => product.id === urlId);
    return (
        <div>
            <div className='product-page-section'>
                <img src={product[0].imageURL} alt='' width='300' height='300'></img>
            </div>
            <div className='product-page-section'>
                <h1>{product[0].title}</h1>
                <p>{product[0].description}</p>
                <p>{`Price: $${product[0].price}`}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    )
};

let ConnectedProductPage = connect(mapStateToProps)(ProductPage);

export default ConnectedProductPage;
    