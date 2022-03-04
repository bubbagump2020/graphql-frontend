import React, {BaseSyntheticEvent, SyntheticEvent} from 'react';
import { FormControl, Grid, Input, InputLabel, Link, Paper, TextField, Typography} from "@mui/material";
import {useAppDispatch} from "../redux/hooks";
import {searchName} from "../redux/searchFormSlice";

const SpellSearchForm:React.FC = () => {

    const dispatch = useAppDispatch();

    const handleChange = (e:BaseSyntheticEvent):void => {
        e.preventDefault();
        dispatch(searchName(e.currentTarget.value));
    }


    return(
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "10px"}}>
                <FormControl sx={{width: '50ch'}} variant={"standard"}>
                    <InputLabel htmlFor={"standard-adornment-search"}>Search Spells</InputLabel>
                    <Input
                        id={"standard-adornment-search"}
                        onChange={handleChange}
                    />
                </FormControl>
            </Grid>
        </Grid>

    )
}

export default SpellSearchForm;