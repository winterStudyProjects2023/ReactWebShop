import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    // ------- with this use effect in the comment below the data collection is set to fire base ---
    // useEffect (()=>{
    // addCollectionAndDocuments('categories', SHOP_DATA);
    // },[]);


    // ---------- this useEffect hoek is used to subscribe users with google on the same page 
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((user) => {
    //         if (user) {
    //              createUserDocumentFromAuth(user);
    //         }
    //         setCurrentUser(user);

    //     });
    //     return unsubscribe
    // }, []);

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value} >
           {children}
           </CategoriesContext.Provider>
}