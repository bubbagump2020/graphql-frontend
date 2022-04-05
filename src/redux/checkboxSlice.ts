import { createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface CheckboxState {
    classNames:Array<string>
    casterLevels:Array<number>
}

const initialState:CheckboxState = {
    classNames:[],
    casterLevels:[]
}

export const CheckboxSlice = createSlice({
    initialState,
    name: 'checkbox',
    reducers: {
        addClass: (state:Draft<CheckboxState>, action:PayloadAction<string>) => {
            state.classNames.push(action.payload);
        },
        removeClass: (state:Draft<CheckboxState>, action:PayloadAction<string>) => {
            state.classNames.forEach((c, i) => {
                if(c === action.payload){
                    state.classNames.splice(i, 1)
                }
            })
        },
        addLevel: (state:Draft<CheckboxState>, action:PayloadAction<number>) => {
            state.casterLevels.push(action.payload);
        },
        removeLevel: (state:Draft<CheckboxState>, action:PayloadAction<number>) => {
            state.casterLevels.forEach((l, i) => {
                if(l === action.payload){
                    state.casterLevels.splice(i, 1);
                }
            })
        }
    }
})

export const { addClass, removeClass, addLevel, removeLevel } = CheckboxSlice.actions;
export default CheckboxSlice.reducer