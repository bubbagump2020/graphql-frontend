import React, {BaseSyntheticEvent, SyntheticEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WizSorcSpellContainer from "./component/WizSorcSpellContainer";
import SpellSearchForm from "./component/SpellSearchForm";
import {Stack} from "@mui/material";
import ClassCheckBoxContainer from "./component/ClassCheckBoxContainer";
import LevelCheckBox from "./component/LevelCheckBox";
import LevelCheckBoxContainer from "./component/LevelCheckBoxContainer";

function App() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e:BaseSyntheticEvent) => {
        e.preventDefault();
        setSearchTerm(e.currentTarget.value);
    }

    return (
        <div className="App">
            <Stack>
                <SpellSearchForm />
                <ClassCheckBoxContainer />
                {/*<LevelCheckBoxContainer />*/}
            </Stack>
            <WizSorcSpellContainer />
        </div>
    );
}

export default App;
