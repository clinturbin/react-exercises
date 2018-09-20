import React from 'react';
import HeaderContainer from './header-container';
import SideNavigation from './side-navigation';
import { connect } from 'react-redux';

let mapStateToProps = state => ({products: state.products})

let ProductPage = (props) => console.log(props) ||
    <div>
        <HeaderContainer />
        <SideNavigation />
        <h1>Hi {props.products[props.match.params.id-1]['title']}</h1>
    </div>

let ConnectedProductPage = connect(mapStateToProps)(ProductPage);

export default ConnectedProductPage;
    