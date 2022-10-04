export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART" : 
        return{...state,Cart: [...state.Cart, {...action.payload,qty:1}]}
        case "REMOVE_FROM_CART" : 
        return{...state,Cart: state.Cart.filter(c=>c.id !== action.payload.id)}
        default:
         return state;
    }
}