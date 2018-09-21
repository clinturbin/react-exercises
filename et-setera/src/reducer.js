let loadProducts = (oldState, action) => {
    return {...oldState, products: action.products}
};

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
    'REMOVE_FROM_CART': removeFromCart,
    'LOAD_PRODUCTS': loadProducts
};

let reducer = (oldState, action) => {
    let actionToCall = reducers[action.type];
    return actionToCall ? actionToCall(oldState, action) : oldState;
};

export default reducer;