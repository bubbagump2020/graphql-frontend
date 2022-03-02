import React, {SyntheticEvent, useState} from 'react';
import {SPELLS} from "../apollo/queries";
import {gql, useQuery} from "@apollo/client";
import  TableContainer  from '@mui/material/TableContainer';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

const WizSorcSpellContainer:React.FC = () => {
    let spells = [];
    const { loading, error, data } = useQuery(SPELLS);
    if(loading) return <p>Loading</p>;
    if(error) return <p>Error :(</p>;
    if(data === undefined) return <p>Not Found</p>;
    if(data !== undefined) spells = data.spells;
    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Spell Name</TableCell>
                        <TableCell>Spell Level</TableCell>
                        <TableCell>Spell School</TableCell>
                        <TableCell>Spell Description</TableCell>
                        <TableCell>Rule Book</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {spells.map((spell:any, index:number) => {
                        return (
                            <TableRow key={spell.SPELL_ID}>
                                <TableCell>{spell.SPELL_NAME}</TableCell>
                                <TableCell>{spell.SPELL_LEVEL}</TableCell>
                                <TableCell>{spell.SPELL_SCHOOL}</TableCell>
                                <TableCell>{spell.SPELL_DESCRIPTION}</TableCell>
                                <TableCell>{spell.RULEBOOK}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default WizSorcSpellContainer