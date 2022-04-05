import React, {BaseSyntheticEvent, useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {addClass, addLevel, removeClass, removeLevel} from "../redux/checkboxSlice";

interface ICheckBox {
    label:string
    index:number
}

const CustomCheckBox:React.FC<ICheckBox> = ({label, index}:ICheckBox) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const classNames:Array<string> = useAppSelector(state => state.checkbox.classNames);
    const casterLevels:Array<number> = useAppSelector(state => state.checkbox.casterLevels);
    const dispatch = useAppDispatch();

    const handleClick = (e:BaseSyntheticEvent) => {
        e.preventDefault();
        setIsChecked(!isChecked);
        if(label !== index.toString()){
            if(classNames.includes(label)){
                dispatch(removeClass(label))
            } else {
                dispatch(addClass(label));
            }
        } else {
            if(casterLevels.includes(parseInt(label))){
                dispatch(removeLevel(parseInt(label)));
            } else {
                dispatch(addLevel(parseInt(label)));
            }
        }
    }
    return <FormControlLabel control={<Checkbox checked={isChecked ? true : false} onClick={handleClick}/>} label={label} />;
}

export default CustomCheckBox;