import React, {ReactNode, useEffect} from 'react';
import { SPELLS } from "../apollo/queries";
import { useQuery} from "@apollo/client";
import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { allSpells } from "../redux/spellListSlice";
import Spell from "../classes/Spell";
import SpellPaper from "./SpellPaper";

const SpellContainer:React.FC = () => {

    // Redux
    const sClass = useAppSelector(state => state.checkbox.classNames);
    const sLevel = useAppSelector(state => state.checkbox.casterLevels);
    const sTerm = useAppSelector(state => state.search.name);
    let spells:Spell[] = useAppSelector(state => state.spells.allSpells);
    const dispatch = useAppDispatch();

    // GraphQL
    const { loading, error, data } = useQuery(SPELLS);
    if(data !== undefined) spells = Spell.createArrayOfSpells(data.spells);
    useEffect(() => {
        dispatch(allSpells(spells));
    }, [])
    if(loading) return <p>Loading</p>; // Loading Component
    if(error) return <p>Error :(</p>; // Error Component

    const filterSpells = (spellList:Spell[], sClass:String[], sTerm:string):ReactNode => {
        /*
        *   Order of Checking
        *   if - no checkboxes checked, no search term entered, what the user would see visiting the page for the first time.
        *   else if - One or more checkboxes checked, but no search term entered
        *   else if - A search term is entered, but no checkboxes checked
        *   else if - Checkboxes checked, and a search term entered.
        */
        if(sClass.length === 0 && sTerm.length === 0){
            return spellList.map((spell, index ) => {
                return <SpellPaper
                    key={index}
                    name={spell.name}
                    description={spell.description}
                    rulebook={spell.rulebook}
                    resist={spell.resist}
                    school={spell.school}
                    castTime={spell.castTime}
                    components={spell.components}
                    range={spell.range}
                    targetOrArea={spell.targetOrArea}
                    duration={spell.duration}
                    savingThrow={spell.savingThrow}
                    effect={spell.effect}
                    classes={spell.classes}
                />;
            })
        } else if(sClass.length !== 0 && sTerm.length === 0){
            return spellList.map((spell, index) => {
                const isClassEqual = spell.classes.some((reduxClass:String) => sClass.includes(reduxClass));
                if(isClassEqual){
                    return <SpellPaper
                        key={index}
                        name={spell.name}
                        description={spell.description}
                        rulebook={spell.rulebook}
                        resist={spell.resist}
                        school={spell.school}
                        castTime={spell.castTime}
                        components={spell.components}
                        range={spell.range}
                        targetOrArea={spell.targetOrArea}
                        duration={spell.duration}
                        savingThrow={spell.savingThrow}
                        effect={spell.effect}
                        classes={spell.classes}
                    />;
                }
            })
        } else if(sClass.length === 0 && sTerm.length !== 0){
            const st = spellList.filter((spell) => { return spell.name.toLowerCase().includes(sTerm.toLowerCase()); });
            return st.map((spell, index) => {
                return <SpellPaper
                    key={index}
                    name={spell.name}
                    description={spell.description}
                    rulebook={spell.rulebook}
                    resist={spell.resist}
                    school={spell.school}
                    castTime={spell.castTime}
                    components={spell.components}
                    range={spell.range}
                    targetOrArea={spell.targetOrArea}
                    duration={spell.duration}
                    savingThrow={spell.savingThrow}
                    effect={spell.effect}
                    classes={spell.classes}
                />;
            })
        } else if(sClass.length !== 0 && sTerm.length !== 0){

            // Filter the classes
            const classFiltered = spellList.filter((spell) => {
                const isClassEqual = spell.classes.some((reduxClass:any) => sClass.includes(reduxClass));
                if (isClassEqual) return spell
            })

            // Filter by the search term
            const sTermFiltered = spellList.filter((spell) => { return spell.name.toLowerCase().includes(sTerm.toLowerCase()); });

            // Filtering the class filter for the search term
            const totalFiltered = classFiltered.filter((spell) => {
                return sTermFiltered.includes(spell);
            })

            // Return the HTML
            if(totalFiltered.length === 0){
                return <SpellPaper
                    name={""}
                    description={"Not Found"}
                    rulebook={""}
                    resist={""}
                    school={""}
                    castTime={""}
                    components={""}
                    range={""}
                    targetOrArea={""}
                    duration={""}
                    savingThrow={""}
                    effect={""}
                    classes={[]}
                />;
            } else {
                return totalFiltered.map((spell, index) => {
                    return <SpellPaper
                        key={index}
                        name={spell.name}
                        description={spell.description}
                        rulebook={spell.rulebook}
                        resist={spell.resist}
                        school={spell.school}
                        castTime={spell.castTime}
                        components={spell.components}
                        range={spell.range}
                        targetOrArea={spell.targetOrArea}
                        duration={spell.duration}
                        savingThrow={spell.savingThrow}
                        effect={spell.effect}
                        classes={spell.classes}
                    />;
                })
            }
        }
    }

    return(
        <Grid container sx={{ justifyContent: 'center'}}>
            { filterSpells(spells, sClass, sTerm) }
        </Grid>
        // <TableContainer>
        //     <Table>
        //         <TableHead>
        //             <TableRow>
        //                 <TableCell>Spell Name</TableCell>
        //                 <TableCell>Spell Description</TableCell>
        //                 <TableCell>Rule Book</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        // {/*            { filterSpells(spells, sClass, sTerm) }*/}
        // {/*        </TableBody>*/}
        // {/*    </Table>*/}
        // {/*</TableContainer>*/}
    );
}

export default SpellContainer



