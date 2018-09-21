import React from 'react';
import { connect } from 'react-redux';

let CartButton = (props) => {
    let button = props.inCart 
        ? {type: 'REMOVE_FROM_CART', text: 'Delete From Cart'}
        : {type: 'ADD_TO_CART', text: 'Add To Cart'};
    return (
        <button
            onClick={ () => {
                props.dispatch({type: button.type, product: props.product})
            }}
        >{button.text}</button>
    )
};

let ConnectedCartButton = connect((state, props) => ({
        inCart: state.cartItems.includes(props.product)
    })
)(CartButton);

export default ConnectedCartButton;