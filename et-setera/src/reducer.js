let loadProducts = (oldState, action) => {
    return {...oldState, products: action.result}
};

let loadCategories = (oldState, action) => {
    return {...oldState, categories:action.result}
};

let categoryProducts = (oldState, action) => {
    return {...oldState, products: action.products}
}

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
    'LOAD_PRODUCTS': loadProducts,
    'LOAD_CATEGORIES': loadCategories,
    'CATEGORY_PRODUCTS': categoryProducts
};

let reducer = (oldState, action) => {
    let actionToCall = reducers[action.type];
    return actionToCall ? actionToCall(oldState, action) : oldState;
};

export default reducer;