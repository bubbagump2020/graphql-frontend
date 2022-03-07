import React from "react";
import Spell from "../classes/Spell";
import {Container, Grid, Modal, Paper, Stack, Typography} from "@mui/material";
import '../style/Scrollbar.sass';

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

const SpellPaper:React.FC<Spell> = ({name, school, description, rulebook, savingThrow, targetOrArea, castTime, duration, classes, components, range, resist, effect}:Spell) => {
    const [elevation, setElevation] = React.useState(3);
    const handleMouseEnter = () => setElevation(12);
    const handleMouseLeave = () => setElevation(3)
    const [open, setOpen] = React.useState(false);
    const handleClick = (e:any) => {
        e.preventDefault();
        console.log("i'm being clicked!")
        setOpen(!open)
    };


    return(
        <Paper className={"paper-card"} elevation={elevation} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
            <Grid className={"paper-card-grid"} container >
                <Typography className={"spell-name"} variant={'h5'}>{name}</Typography>
            </Grid>
            <div className={"border-break"}/>
            <Container className={"desc-container"} >
                <Typography className={"description"}>{description}</Typography>
            </Container>
            <Modal
                open={open}
                onClose={handleClick}
                aria-labelledby={"modal-modal-title"}
                aria-describedby={"modal-modal-description"}
            >
                <Stack sx={modalStyle}>
                    <Paper className={"modal-paper"} elevation={6}>
                        <Typography variant={"h5"}>{name}</Typography>
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
        </Paper>
    )
}

export default SpellPaper;