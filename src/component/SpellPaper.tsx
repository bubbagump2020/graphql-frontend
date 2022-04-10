import React from "react";
import Spell from "../classes/Spell";
import { Card, CardActionArea, CardMedia, Container, Grid, Modal, Paper, Stack, Typography } from "@mui/material";
import '../style/Scrollbar.sass';

import abjuration from '../style/art/abjuration.jpg';
import conjuration from '../style/art/conjuration.jpg';
import divination from '../style/art/divination.jpg';
import enchantment from '../style/art/enchantment.jpg';
import evocation from '../style/art/evocation.jpg';
import illusion from '../style/art/illusion.jpg';
import necromancy from '../style/art/necromancy.jpg';
import transmutation from '../style/art/transmutation.jpg';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    p: 4,
    bgcolor: 'background.paper',
    overflow: 'hidden'
}

interface ISpellPaper {
    spell:Spell
}

const SpellPaper:React.FC<ISpellPaper> = ({spell}:ISpellPaper) => {

    // Modal boolean
    const [open, setOpen] = React.useState(false);

    // Destructured spell object
    const {
        name,
        school,
        castTime,
        components,
        range,
        description,
        effect,
        savingThrow,
        targetOrArea,
        resist,
        classes,
        duration
    } = spell;

    const handleClick = (e:any) => {
        e.preventDefault();
        console.log("i'm being clicked!")
        setOpen(!open)
    };

    // function to handle the choosing of the spell art
    const schoolImg = (school:string):string => {
        const splitSchool = school.split(' ');
        switch(splitSchool[0].toLowerCase()){
            case 'abjuration':
                return abjuration;
            case 'conjuration':
                return conjuration;
            case 'divination':
                return divination;
            case 'enchantment':
                return enchantment;
            case 'evocation':
                return evocation;
            case 'illusion':
                return illusion;
            case 'necromancy':
                return necromancy;
            default:
                return transmutation;
        }
    }

    // function to show the spells assigned classes.
    const showCasterClass = (castArr:String[]) => {
        return castArr.map((caster, index) => {
            return(
                <div key={index}>
                    <p>{caster}</p>
                </div>
            )
        });
    }

    // The HTML of the card
    return(
        <Card className='spellcard'>
            <CardActionArea onClick={handleClick}>
                <CardMedia component='img' height='127' width='130' image={schoolImg(school)} />
                <Typography className='card-name' variant='h6' gutterBottom component='div' sx={{height: '60px'}}>
                {name}
            </Typography>
            </CardActionArea>
            <Modal
                open={open}
                onClose={handleClick}
                aria-labelledby={"modal-modal-title"}
                aria-describedby={"modal-modal-description"}
            >
                <Stack sx={modalStyle}>
                    <Paper className={"modal-paper"} elevation={6}>
                        <Typography variant={"h5"}>{name}</Typography>
                        <Grid container sx={{justifyContent: 'space-evenly', marginTop: '5px'}}>
                            {showCasterClass(classes)}
                        </Grid>
                        <div className={"border-break"}></div>
                        <Grid container sx={{ justifyContent: "space-between"}}>
                            <Typography variant={"h6"}>School: {school}</Typography>
                            <Typography variant={"h6"}>Cast Time: {castTime}</Typography>
                        </Grid>
                            <Typography >{description}</Typography>
                            <Grid className={"modal-paper-grid"} container sx={{ flexDirection: 'column'}}>
                                <div >
                                    <Typography className={"info"} variant={"h6"}>Target Or Area</Typography>
                                    <Typography >{targetOrArea}</Typography>
                                </div>
                                <div >
                                    <Typography className={"info"} variant={"h6"}>Effect</Typography>
                                    <Typography>{effect}</Typography>
                                </div>
                                <div>
                                    <Typography className={"info"} variant={"h6"}>Saving Throw</Typography>
                                    <Typography>{savingThrow}</Typography>
                                </div>
                                <div>
                                    <Typography className={"info"} variant={"h6"}>Spell Resist</Typography>
                                    <Typography>{resist}</Typography>
                                </div>
                                <div>
                                    <Typography className={"info"} variant={"h6"}>Components</Typography>
                                    <Typography>{components}</Typography>
                                </div>
                                <div>
                                    <Typography className={"info"} variant={"h6"}>Range</Typography>
                                    <Typography>{range}</Typography>
                                </div>
                                <div>
                                    <Typography className={"info"} variant={"h6"}>Duration</Typography>
                                    <Typography>{duration}</Typography>
                                </div>
                            </Grid>
                    </Paper>
                </Stack>
            </Modal>
        </Card>
        
            
    )
}

export default SpellPaper;