import React from "react";
import {Container, FormGroup} from "@mui/material";
import classes from "../data/classes";
import CustomCheckBox from "./CustomCheckBox";

const ClassCheckBoxContainer:React.FC = () => {
    const casterClasses = classes;

    return(
        <Container>
            <FormGroup row>
                {casterClasses.map((c, i) => {
                    return <CustomCheckBox label={c} key={i} index={i}/>
                })}
            </FormGroup>
        </Container>
    )
}

export default ClassCheckBoxContainer;