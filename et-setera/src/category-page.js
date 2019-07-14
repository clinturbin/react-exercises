import React from 'react';
import ProductList from './product-list';
import { connect } from 'react-redux';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';

let CategoryPage = (props) => {
    let urlId = props.match.params.id;
    let category = props.categories.find(category => category.id === urlId );
    let products = props.products.filter(product => product.category.id === category.id);
    return (
        <div>
            <HeaderContainer />
            <SideNavigation />
            {/* <h1>{category.title}</h1> */}
            <ProductList products={products}/>
        </div>
    )
};

export default connect(state => ({
    categories: state.categories,
    products: state.products
}))(CategoryPage);