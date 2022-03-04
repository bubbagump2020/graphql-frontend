import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from './checkboxSlice'
import searchFormReducer from './searchFormSlice'
import spellListReducer from './spellListSlice';

export const store = configureStore({
    reducer: {
        checkbox: checkboxReducer,
        search: searchFormReducer,
        spells: spellListReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;