import { createContext, useEffect, useState } from "react";
// import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import PRODUCTS from '../108 shop-data.json';

export const ProductsContext = createContext({
    products:[],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //              createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);

    //     });
    //     return unsubscribe
    // }, []);

    return <ProductsContext.Provider value={value} >
        {children}
    </ProductsContext.Provider>
}