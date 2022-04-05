import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpellContainer from "./component/SpellContainer";
import SpellSearchForm from "./component/SpellSearchForm";
import {Stack} from "@mui/material";
import ClassCheckBoxContainer from "./component/ClassCheckBoxContainer";
import LevelCheckBoxContainer from "./component/LevelCheckBoxContainer";

function App() {
    return (
        <div className="App">
            <Stack>
                <SpellSearchForm />
                <ClassCheckBoxContainer />
                <LevelCheckBoxContainer />
            </Stack>
            <SpellContainer />
        </div>
    );
}

export default App;
