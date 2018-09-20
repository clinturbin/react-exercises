let addToCart = (oldState, action) => {
    let newCart = [...oldState.cartItems, action.product];
    return {...oldState, cartItems: newCart};
};

let removeFromCart = (oldState, action) => {
    let filteredCart = oldState.cartItems.filter(cartItem => cartItem.id !== action.product.id);
    return {...oldState, cartItems: filteredCart};
}

let reducers = {
    'ADD_TO_CART': addToCart,
    'REMOVE_FROM_CART': removeFromCart
};

let reducer = (oldState, action) => {
    let actionToCall = reducers[action.type];
    return actionToCall ? actionToCall(oldState, action) : oldState;
};

export default reducer;

// let removeFromCart = (oldState, action) => {
//         let filteredWassups = oldState.wassups.filter(wassup => wassup.id !== action.id);
//         return {...oldState,
//             wassups: filteredWassups,
//         }
// };