let addToCart = (oldState, action) => {
    let newCart = [...oldState.cartItems, action.product]
    return {...oldState, cartItems: newCart};
};

let reducers = {
    'ADD_TO_CART': addToCart
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