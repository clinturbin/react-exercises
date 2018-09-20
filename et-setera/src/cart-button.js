import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = state => ({cartItems: state.cartItems})

let CartButton = (props) => {
    let button = {type: 'ADD_TO_CART', text: 'Add To Cart'};
    if (props.cartItems.includes(props.product)) {
        button = {type: 'REMOVE_FROM_CART', text: 'Delete From Cart'};
    };
    return <button
        onClick={ () => {
            props.dispatch({type: button.type, product: props.product})
        }}
    >{button.text}</button>
};

let ConnectedCartButton = connect(mapStateToProps)(CartButton);

export default ConnectedCartButton;