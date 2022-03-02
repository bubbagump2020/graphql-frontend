import React, {BaseSyntheticEvent, SyntheticEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WizSorcSpellContainer from "./component/WizSorcSpellContainer";
import SpellSearchForm from "./component/SpellSearchForm";

function App() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e:BaseSyntheticEvent) => {
        e.preventDefault();
        setSearchTerm(e.currentTarget.value);
    }

    return (
        <div className="App">
            <SpellSearchForm searchTerm={searchTerm} handleChange={handleChange}/>
            <WizSorcSpellContainer />
        </div>
    );
}

export default App;
