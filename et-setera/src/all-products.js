import React from 'react';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';
import ProductList from './product-list';
import { connect } from 'react-redux';

let mapStateToProps = state => ({products: state.products})


let AllProductsPage = (props) =>
    <div>
        <HeaderContainer />
        <SideNavigation />
        <h1>All Products</h1>
        <ProductList products={props.products} />
    </div>


let ConnectedAllProductsPage = connect(mapStateToProps)(AllProductsPage);

export default ConnectedAllProductsPage;