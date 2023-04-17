import { createContext, useReducer } from "react";
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItems = (cartItems, productToAdd) => {

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

const removeCartItems = (cartItems, productToRemove) => {
    const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === productToRemove.id) {
            cartItem.quantity--;
        }
        return cartItem
    })
    return updatedCartItems.filter(cartItem => cartItem.quantity > 0);
}


export const CartProductsContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartCount: 0,
    setCartCount: () => { },
    cartTotal: 0,
    setCartTotal: () => { },
});

const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
    cartCount: 0,
    cartTotal: 0
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            }
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error('Unknown action type provided!');
    }

}

export const CartProductsProvider = ({ children }) => {

    const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatchCartReducer] =
     useReducer(cartReducer, INITIAL_STATE);

    const updatedCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0);
    
   
    dispatchCartReducer(
        createAction( 'SET_CART_ITEMS', {
            cartItems: newCartItems,
            cartTotal: newCartTotal,
            cartCount: newCartCount,
        })
        );
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItems(cartItems, productToAdd);
        updatedCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItems(cartItems, productToRemove);
        updatedCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (bool) => {
        dispatchCartReducer( createAction('SET_IS_CART_OPEN', bool));
    }



    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        cartItems,
        cartCount,
        cartTotal,
    };

    return <CartProductsContext.Provider value={value} >
        {children}
    </CartProductsContext.Provider>
}