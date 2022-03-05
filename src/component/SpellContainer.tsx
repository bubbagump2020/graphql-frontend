import React from 'react';
import { SPELLS } from "../apollo/queries";
import { useQuery} from "@apollo/client";
import TableContainer  from '@mui/material/TableContainer';
import { Table, TableBody, TableCell, TableHead, TableRow,  } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { allSpells } from "../redux/spellListSlice";
import CustomTableRow from "./CustomTableRow";

const SpellContainer:React.FC = () => {

    // Redux
    const sClass = useAppSelector(state => state.checkbox.classNames);
    const sLevel = useAppSelector(state => state.checkbox.casterLevels);
    const sTerm = useAppSelector(state => state.search.name);
    const spellList = useAppSelector(state => state.spells.allSpells);
    const dispatch = useAppDispatch();

    // GraphQL
    const { loading, error, data } = useQuery(SPELLS);
    if(loading) return <p>Loading</p>; // Loading Component
    if(error) return <p>Error :(</p>; // Error Component
    if(data !== undefined) dispatch(allSpells(data.spells));

    const filterSpells = (spellList:any[], sClass:any[], sTerm:string) => {
        /*
        *   Order of Checking
        *   if - no checkboxes checked, no search term entered, what the user would see visiting the page for the first time.
        *   else if - One or more checkboxes checked, but no search term entered
        *   else if - A search term is entered, but no checkboxes checked
        *   else if - Checkboxes checked, and a search term entered.
        */
        if(sClass.length === 0 && sTerm.length === 0){
            return spellList.map((spell, index ) => {
                console.log(spell);
                return <CustomTableRow
                    key={index}
                    name={spell.name}
                    description={spell.description}
                    rulebook={spell.rulebook}
                    resist={spell.resist}
                    school={spell.school}
                    cast_time={spell.cast_time}
                    components={spell.components}
                    range={spell.range}
                    target_or_area={spell.target_or_area}
                    duration={spell.duration}
                    saving_throw={spell.saving_throw}
                    effect={spell.effect}
                />;
            })
        } else if(sClass.length !== 0 && sTerm.length === 0){
            return spellList.map((spell, index) => {
                const isClassEqual = spell.classes.some((reduxClass:any) => sClass.includes(reduxClass));
                if(isClassEqual){
                    return <CustomTableRow
                        key={index}
                        name={spell.name}
                        description={spell.description}
                        rulebook={spell.rulebook}
                        resist={spell.resist}
                        school={spell.school}
                        cast_time={spell.cast_time}
                        components={spell.components}
                        range={spell.range}
                        target_or_area={spell.target_or_area}
                        duration={spell.duration}
                        saving_throw={spell.saving_throw}
                        effect={spell.effect}
                    />;
                }
            })
        } else if(sClass.length === 0 && sTerm.length !== 0){
            const st = spellList.filter((spell) => { return spell.name.toLowerCase().includes(sTerm.toLowerCase()); });
            return st.map((spell, index) => {
                return <CustomTableRow
                    key={index}
                    name={spell.name}
                    description={spell.description}
                    rulebook={spell.rulebook}
                    resist={spell.resist}
                    school={spell.school}
                    cast_time={spell.cast_time}
                    components={spell.components}
                    range={spell.range}
                    target_or_area={spell.target_or_area}
                    duration={spell.duration}
                    saving_throw={spell.saving_throw}
                    effect={spell.effect}
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
                return <CustomTableRow
                    name={""}
                    description={"Not Found"}
                    rulebook={""}
                    resist={""}
                    school={""}
                    cast_time={""}
                    components={""}
                    range={""}
                    target_or_area={""}
                    duration={""}
                    saving_throw={""}
                    effect={""}
                />;
            } else {
                return totalFiltered.map((spell, index) => {
                    return <CustomTableRow
                        key={index}
                        name={spell.name}
                        description={spell.description}
                        rulebook={spell.rulebook}
                        resist={spell.resist}
                        school={spell.school}
                        cast_time={spell.cast_time}
                        components={spell.components}
                        range={spell.range}
                        target_or_area={spell.target_or_area}
                        duration={spell.duration}
                        saving_throw={spell.saving_throw}
                        effect={spell.effect}
                    />;
                })
            }
        }
    }

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Spell Name</TableCell>
                        <TableCell>Spell Description</TableCell>
                        <TableCell>Rule Book</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { filterSpells(spellList, sClass, sTerm) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default SpellContainer



