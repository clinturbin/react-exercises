import React from 'react';
import ProductList from './product-list';
import { connect } from 'react-redux';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';
// import {API_URL} from './variables';

import fetchProducts from './fetch-products';

// class FetchProducts extends React.Component {
//     componentDidMount() {
//         fetch(API_URL + '/product')
//         .then(res => res.json())
//         .then(products => {
//             this.props.dispatch({
//                 type: 'LOAD_PRODUCTS',
//                 products: products
//             })
//         })
//     }
//     render() {
//         return <AllProductsPage {...this.props}/>
//     }
// };

let AllProductsPage = (props) =>
    <div>
        <HeaderContainer />
        <SideNavigation />
        <h1>All Products</h1>
        {/* if products lenght = 0 display loading screen */}
        <ProductList products={props.products} />
    </div>


// let mapStateToProps = state => ({products: state.products})

// let ConnectedAllProductsPage = connect(mapStateToProps)(AllProductsPage);
// let ConnectedAllProductsPage = connect(mapStateToProps)(FetchProducts);

// export default ConnectedAllProductsPage;

export default connect(
    state => ({products: state.products})
)(fetchProducts(AllProductsPage));