 import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal, { modalUnstyledClasses } from '@mui/material/Modal';
// import FloatingActionButtonZoom from './switch';
import FloatingActionButtonZoom from '../login/switch'
import PersonAddIcon from '@mui/icons-material/Person';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
};

export default function Register() {
    console.log("in register")
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* <Button variant="outlined" color="success" sx={{marginRight:'7px'}} onClick={handleOpen} >
            <PersonAddIcon />
            רישום
            </Button> */}
             <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FloatingActionButtonZoom val={1}></FloatingActionButtonZoom>
                </Box>
            </Modal>
            
        </div>
        
    );
    
}
