

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: action.payload }
        default:
            return state;
    }
};


export const searchReducer = (state, action) => {
    
    switch (action.type) {
        case "ADD_TO_SEARCH":
            return { ...state, searchString: action.payload }
        default:
            return state;
    }
}