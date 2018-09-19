let addNewWassup = (oldState, action) => {
    let newWassups = [...oldState.wassups, action.id];
    return {...oldState, wassups: newWassups, newWassup: ''};
};

let removeWassup = (oldState, action) => {
        let filteredWassups = oldState.wassups.filter(wassup => wassup.id !== action.id);
        return {...oldState,
            wassups: filteredWassups,
        }
};

let reducers = {
    'ADD_NEW_WASSUP': addNewWassup,
    'REMOVE_WASSUP': removeWassup
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};

export default reducer;
