import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TextField} from "@mui/material";
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function BasicModal() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const randomName = uniqueNamesGenerator({dictionaries: [adjectives, colors, animals]});
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h2>Welcome To Monopalli</h2>
                    <TextField label={'Username'} variant="filled" defaultValue={randomName}></TextField>
                    <div><Button onClick={handleClose}>Enter</Button></div>
                </Box>
            </Modal>
        </div>
    );
}