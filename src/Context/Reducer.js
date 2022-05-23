export const cartReducer = (state, action) => {
    switch (action.type) {
        case "addToCart":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }]};
        case "removeFromCart":
            return { ...state, cart: state.cart.filter(c => c.id !== action.payload.id)};
        case "changeCartQuantity":
            return { ...state, cart: state.cart.filter((c) => c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty)};
        default:
            return state;
    }
};
