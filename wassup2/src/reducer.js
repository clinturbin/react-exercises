let reducers = {
    'ADD_NEW_WASSUP': addNewWassup,
    'REMOVE_WASSUP': removeWassup
};

let addNewWassup = (oldState, action) => {
    if (action.type === "ADD_NEW_WASSUP") {
        let newWassups = [...oldState.wassups, action.data ]
        return {...oldState, wassups: newWassups, newWassup: ''}; // New State
    }
};

let removeWassup = (oldState, action) => {
    if (action.type === 'REMOVE_WASSUP') {
        oldState.wassups.filter(wassup => wassup === action.data); // new list of wassups
        return {...oldState,
            wassups: oldState.newWassups,
        };
    }
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};

export default reducer;
