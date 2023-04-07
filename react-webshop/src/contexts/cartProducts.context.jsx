import { createContext, useState, useEffect } from "react";

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
    return updatedCartItems.filter( cartItem => cartItem.quantity > 0);
}


export const CartProductsContext = createContext({
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    isCartOpen: false,
    setIscartOpen: () => { },
    cartCount: 0,
    setCartCount: () => { }
});

export const CartProductsProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);


    useEffect(() => {
        setCartCount(cartItems.reduce((acc, item) => acc + item.quantity, 0))
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItems(cartItems, productToRemove));
    }



    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, setCartItems,cartCount };
    return <CartProductsContext.Provider value={value} >
        {children}
    </CartProductsContext.Provider>
}