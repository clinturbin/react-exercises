import React from 'react';
import { connect } from 'react-redux';
import CartButton from './cart-button';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';

let mapStateToProps = state => ({products: state.products})

let ProductPage = (props) => {
    let urlId = props.match.params.id;
    let product = props.products.find(product => product.id === urlId);
    return (
        <div>
            <HeaderContainer />
            <SideNavigation />
            <div className='product-page-section'>
                <img src={product.imageURL} alt='' width='300' height='300'></img>
            </div>
            <div className='product-page-section'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>{`Price: $${product.price}`}</p>
                <CartButton product={product}/>
            </div>
        </div>
    )
};

let ConnectedProductPage = connect(mapStateToProps)(ProductPage);

export default ConnectedProductPage;
    