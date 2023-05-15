import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { compose, applyMiddleware } from "redux";
import logger from 'redux-logger';
const middlewares = [process.env.NODE_ENV==='development' && logger].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(middlewares),
})

export const persistor = persistStore(store);