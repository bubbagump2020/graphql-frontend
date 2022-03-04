import React from 'react';
import {Container, FormGroup} from "@mui/material";
import caster_levels from "../data/caster_levels";
import CustomCheckBox from "./CustomCheckBox";

const LevelCheckBoxContainer:React.FC = () => {
    const casterLevels = caster_levels;
    return(
        <Container>
            <FormGroup row>
                {casterLevels.map((level, index) => {
                    return <CustomCheckBox index={index} label={level.toString()} key={index} />
                })}
            </FormGroup>
        </Container>
    );
}

export default LevelCheckBoxContainer;