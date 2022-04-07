import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, {Fragment, FC, BaseSyntheticEvent} from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectClass, selectLevel } from '../../redux/radioButtonSlice';

interface ICRBG {
    label:string
    arr:string[]
}

const CustomRadioButtonGroup:FC<ICRBG> = ({arr, label}:ICRBG) => {

    const dispatch = useAppDispatch();

    const handleRadioButtonChange = (e:BaseSyntheticEvent) => {
        e.preventDefault();

        const name:string = e.currentTarget.name;
        let value:string = e.currentTarget.value;

        if(value === 'None')
            value = '';
        
        
        switch(name){
            case 'Class':
                dispatch(selectClass(value));
                break;
            default:
                dispatch(selectLevel(value));
                break;
        }
    }



    return(
        <Fragment>
            <FormControl>
                <FormLabel>{label}</FormLabel>
                <RadioGroup sx={{flexDirection: 'row'}}>
                    {arr.map((item, index) => {
                        return <FormControlLabel labelPlacement='top' key={index} value={item} control={<Radio name={label} onChange={handleRadioButtonChange} size="small"/>} label={item} />
                    })}
                </RadioGroup>
            </FormControl>
        </Fragment>
    );
}

export default CustomRadioButtonGroup;