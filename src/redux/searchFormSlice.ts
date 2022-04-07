import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface SearchFormState {
    name: string
}

const initialState:SearchFormState = {
    name: "",
}

export const SearchFormSlice = createSlice({
    initialState,
    name: 'search',
    reducers: {
        searchName: (state:Draft<SearchFormState>, action:PayloadAction<string>) => {
            state.name = action.payload;
        }
    }
})

export const { searchName } = SearchFormSlice.actions;
export default SearchFormSlice.reducer;