import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { authReducer } from './features/auth/authSlice'

// Combine reducers 
const rootReducer = combineReducers({
    auth: authReducer,
})

// Configure the persist reducer (optional)
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth'],  // Whitelist the `auth` slice for persistence
};


// Apply persistence to the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Function to create the store
export const makeStore = () => {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
};


