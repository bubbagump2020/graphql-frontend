import React from 'react';
import {SPELLS} from "../apollo/queries";
import {gql, useQuery} from "@apollo/client";
import  TableContainer  from '@mui/material/TableContainer';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {allSpells} from "../redux/spellListSlice";
import {filteredSpells} from "../redux/spellListSlice";

const WizSorcSpellContainer:React.FC = () => {

    // Redux
    const reduxClasses = useAppSelector(state => state.checkbox.classNames);
    const reduxLevels = useAppSelector(state => state.checkbox.casterLevels);
    const searchTerm = useAppSelector(state => state.search.name);
    const spellList = useAppSelector(state => state.spells.allSpells);
    const dispatch = useAppDispatch();

    // GraphQL
    const { loading, error, data } = useQuery(SPELLS);
    if(loading) return <p>Loading</p>;
    if(error) return <p>Error :(</p>;
    if(data === undefined) return <p>Not Found</p>;
    if(data !== undefined) dispatch(allSpells(data.spells));

    const st = spellList.filter((spell, index) => {
        return spell.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    const filterSpells = (spellList:any[], reduxClasses:any[], searchTerm:string) => {
        if(reduxClasses.length === 0 && searchTerm.length === 0){
            return spellList.map((spell, index ) => {
                return (
                    <TableRow key={spell.name}>
                        <TableCell>{spell.name}</TableCell>
                        <TableCell>{spell.description}</TableCell>
                        <TableCell>{spell.rulebook}</TableCell>
                    </TableRow>
                )
            })
        }
        if(reduxClasses.length !== 0 && searchTerm.length === 0){
            return spellList.map((spell, index) => {
                const isClassEqual = spell.classes.some((reduxClass:any) => reduxClasses.includes(reduxClass));
                if(isClassEqual){
                    return (
                        <TableRow key={spell.name}>
                            <TableCell>{spell.name}</TableCell>
                            <TableCell>{spell.description}</TableCell>
                            <TableCell>{spell.rulebook}</TableCell>
                        </TableRow>
                    )
                }
            })
        }
        if(reduxClasses.length === 0 && searchTerm.length !== 0){
            const st = spellList.filter((spell) => { return spell.name.toLowerCase().includes(searchTerm.toLowerCase()); });
            return st.map((spell, index) => {
                return (
                    <TableRow key={spell.name}>
                        <TableCell>{spell.name}</TableCell>
                        <TableCell>{spell.description}</TableCell>
                        <TableCell>{spell.rulebook}</TableCell>
                    </TableRow>
                )
            })
        }
        if(reduxClasses.length !== 0 && searchTerm.length !== 0){
            const classFiltered = spellList.filter((spell) => {
                const isClassEqual = spell.classes.some((reduxClass:any) => reduxClasses.includes(reduxClass));
                if (isClassEqual) return spell
            })
            const searchTermFiltered = spellList.filter((spell) => { return spell.name.toLowerCase().includes(searchTerm.toLowerCase()); });
            const totalFiltered = classFiltered.filter((spell) => {
                return searchTermFiltered.includes(spell);
            })
            if(totalFiltered.length === 0){
                return (
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Not Found</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                )
            } else {
                return totalFiltered.map((spell, index) => {
                    return (
                        <TableRow key={spell.name}>
                            <TableCell>{spell.name}</TableCell>
                            <TableCell>{spell.description}</TableCell>
                            <TableCell>{spell.rulebook}</TableCell>
                        </TableRow>
                    )
                })
            }
        }
    }

    filterSpells(spellList, reduxClasses, searchTerm);

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
                    { filterSpells(spellList, reduxClasses, searchTerm) }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default WizSorcSpellContainer



