import { createContext, useState } from "react";

export const CartProductsContext = createContext({
    cartProducts:[],
    isCartOpen: false,
    setIscartOpen: ()=>{}
});

export const CartProductsProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};
    
    return <CartProductsContext.Provider value={value} >
        {children}
    </CartProductsContext.Provider>
}