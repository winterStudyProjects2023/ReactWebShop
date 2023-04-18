import { createSlice } from "@reduxjs/toolkit";

const CART_INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
}

const addCartItem = (cartItems, productToAdd) => {

    let isItemPresented = false;

    let updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === productToAdd.id) {
            cartItem.quantity++;
            isItemPresented = true;
        }
        return cartItem
    })

    return isItemPresented ? updatedCartItems : [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
    const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === productToRemove.id) {
            cartItem.quantity--;
        }
        return cartItem
    })
    return updatedCartItems.filter(cartItem => cartItem.quantity > 0);
}

const clearItemFromCartItem = (cartItems, cartItemToClear)=>
    cartItems.filter((cartItem)=> cartItem.id!==cartItemToClear.id);


export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: {
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload
        },
        removeItemFromCart(state, action) {
            state.cartItems = removeCartItem(state.cartItems, action.payload);
        },
        addItemToCart(state,action){
            state.cartItems = addCartItem(state.cartItems, action.payload);
        },
        clearCartItem(state,action) {
            state.cartItems = clearItemFromCartItem(state.cartItems, action.payload);
        }
        }
})

export const {setIsCartOpen, removeItemFromCart, addItemToCart, clearCartItem} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
