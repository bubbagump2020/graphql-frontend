import React, {BaseSyntheticEvent, SyntheticEvent} from 'react';
import { FormControl, Grid, Input, InputLabel, Link, Paper, TextField, Typography} from "@mui/material";

interface IForm {
    searchTerm: string
    handleChange(e:BaseSyntheticEvent):void
}

const SpellSearchForm:React.FC<IForm> = ({searchTerm, handleChange}:IForm) => {


    return(
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginTop: "10px"}}>
                <FormControl sx={{width: '50ch'}} variant={"standard"}>
                    <InputLabel htmlFor={"standard-adornment-search"}>Search Spells</InputLabel>
                    <Input
                        id={"standard-adornment-search"}
                        onChange={handleChange}
                        value={searchTerm}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Typography>
                    Note: The spell levels listed are for most of the classes who can use that spell. There may occasionally be some classes that get that particular spell at earlier or later caster levels. Check <Link href={"https://d20pfsrd.com"}>d20pfsrd.com</Link>  for more information
                </Typography>
            </Grid>
        </Grid>

    )
}

export default SpellSearchForm;