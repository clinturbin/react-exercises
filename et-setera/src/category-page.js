import React from 'react';
import ProductList from './product-list';
import { connect } from 'react-redux';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';

let mapStateToProps = state => ({categories: state.categories, products: state.products})

let CategoryPage = (props) => {
    let urlId = props.match.params.id;
    let category = props.categories.find(category => category.categoryId === urlId );
    let products = props.products.filter(product => product.categoryId === category.categoryId);
    return (
        <div>
            <HeaderContainer />
            <SideNavigation />
            <h1>{category.categoryName}</h1>
            <ProductList products={products}/>
        </div>
    )
};

let ConnectedCategoryPage = connect(mapStateToProps)(CategoryPage);

export default ConnectedCategoryPage;