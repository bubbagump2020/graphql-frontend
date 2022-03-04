import { createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from './store'

interface SpellListState {
    allSpells: any[]
    filteredSpells: any[]
}

const initialState:SpellListState = {
    allSpells: [],
    filteredSpells: []
}

export const SpellListSlice = createSlice({
    initialState,
    name: 'spell',
    reducers: {
        allSpells: (state:Draft<SpellListState>, action:PayloadAction<any>) => {
            state.allSpells = action.payload;
        },
        filteredSpells: (state:Draft<SpellListState>, action:PayloadAction<any>) => {

        }
    }
});

export const { allSpells, filteredSpells } = SpellListSlice.actions;
export default SpellListSlice.reducer;