import { createContext, useEffect, useState, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

const INITIAL_STATE = {
    currentUser: null,
}

const ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) =>{

    const {type, payload} = action;

    switch(type) {
        case ACTION_TYPES.SET_CURRENT_USER:
            return {
            ...state,
            currentUser:payload,
            }
    default:
        throw new Error ('Errot in userContext');
    }
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
    const {currentUser} = state;

    const setCurrentUser = (user) => {
        dispatch ({type: ACTION_TYPES.SET_CURRENT_USER, payload: user});
    }

    const value = { currentUser, setCurrentUser };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                 createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);

        });
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value} >
        {children}
    </UserContext.Provider>
}

