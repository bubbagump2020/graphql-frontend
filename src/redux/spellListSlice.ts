import { createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from './store'
import Spell from "../classes/Spell";

interface SpellListState {
    allSpells: Spell[]
}

const initialState:SpellListState = {
    allSpells: [],
}

export const SpellListSlice = createSlice({
    initialState,
    name: 'spell',
    reducers: {
        allSpells: (state:Draft<SpellListState>, action:PayloadAction<Array<Spell>>) => {
            state.allSpells = action.payload;
        },
    }
});

export const { allSpells, } = SpellListSlice.actions;
export default SpellListSlice.reducer;