import React, {ReactNode, useEffect} from 'react';
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { allSpells } from "../redux/spellListSlice";
import Spell from "../classes/Spell";
import SpellPaper from "./SpellPaper";
import {
    classFilter, classLevelFilter,
    classSearchTermFilter, classSearchTermLevelFilter,
    levelFilter, levelSearchTermFilter,
    searchTermFilter
} from "../functions/dry-filter-functions";
import axios from 'axios';

const SpellContainer:React.FC = () => {

    // Redux
    const sClass = useAppSelector(state => state.checkbox.classNames);
    const sLevel = useAppSelector(state => state.checkbox.casterLevels);
    const sTerm = useAppSelector(state => state.search.name);
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
    const filterSpells = (spellList:Spell[], sClass:String[], sTerm:string):ReactNode => {
        // Natural state, no search term or any of the check-boxes checked.
        if(sClass.length === 0 && sTerm.length === 0 && sLevel.length === 0){
            return spellList.map((spell, index ) => {
                return <SpellPaper key={index} spell={spell} />;
            });
        // A class checkbox is checked, there is no search term, and no level checkbox is checked.
        } else if(sClass.length !== 0 && sTerm.length === 0 && sLevel.length === 0){
            return spellList.map((spell, index) => {
                const isClassEqual = classFilter(spell, sClass);
                if(isClassEqual.includes(true)){
                    return <SpellPaper key={index} spell={spell} />;
                }
            });
        // No class checkbox checked, there is a search term, and no level checkbox is checked
        } else if(sClass.length === 0 && sTerm.length !== 0 && sLevel.length === 0){
            const st = searchTermFilter(spellList, sTerm);
            return st.map((spell, index) => {
                return <SpellPaper key={index} spell={spell} />;
            });
            // No class checkbox checked, there is not a search term, and level checkbox(s) are checked.
        } else if(sClass.length === 0 && sTerm.length === 0 && sLevel.length !== 0){
            return spellList.map((spell, index) => {
                const isLevelEqual = levelFilter(spell, sLevel);
                if(isLevelEqual.includes(true)){
                    return <SpellPaper key={index} spell={spell} />;
                }
            });
            // There's a search term, a class checkbox has been checked and no level checkbox is checked
        } else if(sClass.length !== 0 && sTerm.length !== 0 && sLevel.length === 0){
            const totalFiltered = classSearchTermFilter(spellList, sClass, sTerm);
            if(totalFiltered.length === 0){
                const spell = new Spell('','','','','','','','','','','','',[]);
                return <SpellPaper spell={spell}/>;
            } else {
                return totalFiltered.map((spell, index) => {
                    return <SpellPaper key={index} spell={spell} />;
                });
            }
            // checkboxes checked and there is a searchterm
        } else if (sClass.length !== 0 && sTerm.length !== 0 && sLevel.length !== 0){
            const spells = classSearchTermLevelFilter(spellList, sClass, sTerm, sLevel)
            return spells.map((spell, index) => {
                return <SpellPaper key={index} spell={spell} />;
            });
            // both class and level checkboxes checked
        } else if(sClass.length !==0 && sTerm.length === 0 && sLevel.length !== 0 ) {
            const spells = classLevelFilter(spellList, sClass, sLevel);
            return spells.map((spell, index) => {
                return <SpellPaper key={index} spell={spell} />;
            });
            // level checkbox and search term
        } else if(sClass.length === 0 && sTerm.length !== 0 && sLevel.length !== 0){
            const spells = levelSearchTermFilter(spellList, sTerm, sLevel);
            return spells.map((spell, index) => {
                return <SpellPaper key={index} spell={spell} />;
            });
        }
    }

    // HTML
    return(
        <Grid container sx={{ justifyContent: 'center'}}>
            { filterSpells(spells, sClass, sTerm) }
        </Grid>
    );
}

export default SpellContainer



