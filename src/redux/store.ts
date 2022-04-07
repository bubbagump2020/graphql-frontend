import { configureStore } from '@reduxjs/toolkit';
import radioButtonReducer from './radioButtonSlice'
import searchFormReducer from './searchFormSlice'
import spellListReducer from './spellListSlice';
import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleWare = getDefaultMiddleware({
    serializableCheck: false
})


export const store = configureStore({
    reducer: {
        radioButton: radioButtonReducer,
        search: searchFormReducer,
        spells: spellListReducer
    },
    middleware: customizedMiddleWare
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;