import { createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface RadioButtonState {
    cn:string
    cl:string
    cnl:string
}

const initialState:RadioButtonState = {
    cn:'',
    cl:'',
    cnl:''
}

export const RadioButtonSlice = createSlice({
    initialState,
    name: 'radiobutton',
    reducers: {
        selectClass: (state:Draft<RadioButtonState>, action:PayloadAction<string>) => {
            state.cn = action.payload;
            state.cnl = `${state.cn} ${state.cl}`
        },
        selectLevel: (state:Draft<RadioButtonState>, action:PayloadAction<string>) => {
            state.cl = action.payload;
            state.cnl = `${state.cn} ${state.cl}`
        }
    }
})

export const { selectClass, selectLevel } = RadioButtonSlice.actions;
export default RadioButtonSlice.reducer