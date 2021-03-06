import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

let mapStateToProps = state => ({cartCount: state.cartItems.length})

let HeaderNavigation = (props) => 
    <div className='header-container'>
        <div className='header-section'>
        <Link to='/'><h1>Et Setera</h1></Link>
        </div>
        <div className='header-section header-right'>
            <p>Cart {props.cartCount}</p>
        </div>
        
    </div>

let ConnectedHeaderContainer = connect(mapStateToProps)(HeaderNavigation);

export default ConnectedHeaderContainer;