import React from 'react';
import ProductList from './product-list';
import { connect } from 'react-redux';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';
import fetchProducts from './fetch-products';

let AllProductsPage = (props) =>
    <div>
        <HeaderContainer />
        <SideNavigation />
        <h1>All Products</h1>
        <ProductList products={props.products} />
    </div>

export default connect(
    state => ({products: state.products})
)(fetchProducts(AllProductsPage, '/product'));