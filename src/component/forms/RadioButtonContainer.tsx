import { Grid } from '@mui/material';
import React from 'react';
import { radioButtonCasterLevels, radioButtonClasses } from '../../data/radio_button_labels';
import CustomRadioButtonGroup from './CustomRadioButtonGroup';

const RadioButtonContainer:React.FC = () => {
    return(
        <Grid container sx={{justifyContent: 'space-evenly'}}>
            <CustomRadioButtonGroup arr={radioButtonClasses} label={'Class'} />
            <CustomRadioButtonGroup arr={radioButtonCasterLevels} label={'Caster Level'} />
        </Grid>
    )
}

export default RadioButtonContainer;
