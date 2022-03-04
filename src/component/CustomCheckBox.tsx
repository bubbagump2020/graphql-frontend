import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import {Checkbox, FormControlLabel} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {addClass, addLevel, removeClass} from "../redux/checkboxSlice";

interface ICheckBox {
    label:string
    index:number
}

const CustomCheckBox:React.FC<ICheckBox> = ({label, index}:ICheckBox) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)
    const classNames:Array<string> = useAppSelector(state => state.checkbox.classNames);
    const dispatch = useAppDispatch();

    const handleClick = (e:BaseSyntheticEvent) => {
        e.preventDefault();
        setIsChecked(!isChecked);
        if(label != index.toString()){
            if(classNames.includes(label)){
                dispatch(removeClass(label))
            } else {
                dispatch(addClass(label));
            }
        } else dispatch(addLevel(index));
    }
    return <FormControlLabel control={<Checkbox checked={ isChecked ? true : false} onClick={handleClick}/>} label={label} />
}

export default CustomCheckBox;