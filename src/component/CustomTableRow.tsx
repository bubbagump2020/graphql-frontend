import React from 'react';
import {
    Grid,
    Modal, Paper, Stack,
    TableCell,
    TableRow,
    Typography
} from "@mui/material";
import '../TableRow.sass';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    height: '75%',
    boxShadow: 24,
    p: 4,
    bgcolor: 'background.paper',
    overflow: 'hidden'
}

interface ITableRow{
    name:string
    description:string
    school:string
    rulebook:string
    cast_time:string
    components:string
    range:string
    target_or_area:string
    effect:string
    duration:string
    saving_throw:string
    resist:string
}

const CustomTableRow:React.FC<ITableRow> = ({
                                                name, school, description, rulebook, cast_time, components, range, target_or_area, effect, duration, saving_throw, resist
                                            }:ITableRow) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const handleClick = () => {
        setOpen(!open);
    }

    console.log(saving_throw);

    return(
        <TableRow hover onClick={handleClick}>
            <TableCell>{name}</TableCell>
            <TableCell>{description}</TableCell>
            <TableCell>{rulebook}</TableCell>
            <Modal
                open={open}
                onClose={handleClick}
                aria-labelledby={"modal-modal-title"}
                aria-describedby={"modal-modal-description"}
            >
                <Stack sx={style}>
                    <Paper sx={{height: "100%", padding: "20px"}} elevation={6}>
                        <Typography variant={"h5"}>{name}</Typography>
                        <div className={"border-break"}></div>
                        <Grid container sx={{ justifyContent: "space-between"}}>
                            <Typography variant={"h6"}>School: {school}</Typography>
                            <Typography variant={"h6"}>Cast Time: {cast_time}</Typography>
                        </Grid>
                        <div className={"border-break"}/>
                        <Stack sx={{height: "60%"}}>
                            <Typography>{description}</Typography>
                            <Grid container sx={{justifyContent: "space-evenly", alignItems: "flex-end", height: "100%", overflow: "hidden"}}>
                                <div>
                                    <Typography variant={"h6"}>Target Or Area</Typography>
                                    <Typography>{target_or_area}</Typography>
                                </div>
                                <div>
                                    <Typography variant={"h6"}>Effect</Typography>
                                    <Typography>{effect}</Typography>
                                </div>
                                <div>
                                    <Typography variant={"h6"}>Saving Throw</Typography>
                                    <Typography>{saving_throw}</Typography>
                                </div>
                                <div>
                                    <Typography variant={"h6"}>Spell Resist</Typography>
                                    <Typography>{resist}</Typography>
                                </div>
                            </Grid>
                        </Stack>
                        <div className={"border-break"}/>
                        <Grid container sx={{ justifyContent: "space-evenly"}}>
                            <div>
                                <Typography variant={"h6"}>Components</Typography>
                                <Typography>{components}</Typography>
                            </div>
                            <div>
                                <Typography variant={"h6"}>Range</Typography>
                                <Typography>{range}</Typography>
                            </div>
                            <div>
                                <Typography variant={"h6"}>Duration</Typography>
                                <Typography>{duration}</Typography>
                            </div>
                        </Grid>
                    </Paper>
                </Stack>
            </Modal>
        </TableRow>
    )
}

export default CustomTableRow;