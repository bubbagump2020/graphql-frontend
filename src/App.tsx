import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SpellContainer from "./component/SpellContainer";
import SpellSearchForm from "./component/forms/SpellSearchForm";
import RadioButtonContainer from './component/forms/RadioButtonContainer';
import {Stack} from "@mui/material";

function App() {
    return (
        <div className="App">
            <Stack>
                <SpellSearchForm />
                <RadioButtonContainer />
            </Stack>
            <SpellContainer />
        </div>
    );
}

export default App;
