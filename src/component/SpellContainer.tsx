import React, {ReactNode, useEffect} from 'react';
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { allSpells } from "../redux/spellListSlice";
import Spell from "../classes/Spell";
import SpellPaper from "./SpellPaper";
import axios from 'axios';

const SpellContainer:React.FC = () => {

    // Redux
    // cnl = Class Name & Level
    // term - Search Term
    
    const cnl = useAppSelector(state => state.radioButton.cnl);
    const term = useAppSelector(state => state.search.name);
    let spells:Spell[] = useAppSelector(state => state.spells.allSpells);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchRailsAPI = async () => {
            const request = await axios.get('http://pathfindermagicwiki-api.herokuapp.com/spells');
            spells = Spell.createArrayOfSpells(request.data);
            dispatch(allSpells(spells));
        }
        fetchRailsAPI();

    }, [])

    // Filtering
    const filterSpells = (spellList:Spell[], cnl:string, term:string ):ReactNode => {

        // fbcal = Filtered By Class And Level
        // fbt = Filtered By Term
        // fba = Filtered By All
        const fbcal:Spell[] = spellList.filter(spell => spell.classes.includes(cnl));
        const fbt:Spell[] = spellList.filter(spell => spell.name.toLowerCase().includes(term.toLowerCase()));
        const fba:Spell[] = fbcal.filter(spell => spell.name.toLowerCase().includes(term.toLowerCase()));

        if(fba.length !== 0){
            return fba.map((s, i) => {
                return <SpellPaper key={i} spell={s} />
            })
        } else if(fbcal.length !==0 && fbt.length === 0){
            return fbcal.map((s, i) => {
                return <SpellPaper key={i} spell={s} />
            })
        } else if(fbcal.length === 0 && fbt.length !== 0){
            return fbt.map((s, i) => {
                return <SpellPaper key={i} spell={s} />
            })
        } else {
            return spellList.map((s, i) => {
                return <SpellPaper key={i} spell={s} />
            })
        }

    }

    // HTML
    return(
        <Grid container sx={{ justifyContent: 'center'}}>
            { filterSpells(spells, cnl, term) }
        </Grid>
    );
}

export default SpellContainer



