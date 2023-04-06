import { createContext, useState } from "react";

export const CartProductsContext = createContext({
    cartProducts:[],
});

export const CartProductsProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const value = {};
    
    return <CartProductsContext.Provider value={value} >
        {children}
    </CartProductsContext.Provider>
}