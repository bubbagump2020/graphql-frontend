import React from 'react';
import WizardSpell from "../classes/WizardSpell";
import {Col, ListGroup, Row, Tab} from "react-bootstrap";



const WizSorcSpellCard:React.FC<WizardSpell> = ({
    wssId, wssName, wssLevel, wssCastTime, wssDescription, wssRange
}:WizardSpell) => {
    return(
        <tr key={wssId}>
            <td>{wssId}</td>
            <td>{wssName}</td>
            <td>{wssDescription}</td>
        </tr>
    )
}

export default WizSorcSpellCard;