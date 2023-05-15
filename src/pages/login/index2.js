import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal, { modalUnstyledClasses } from '@mui/material/Modal';
import FloatingActionButtonZoom from './switch';
import PersonAddIcon from '@mui/icons-material/Person';
import LoginDetails from './index3';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    p: 4,
    minwidth:'20%',
    maxwidth:'20%',
};

export default function Login() {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
           
                {/* <Box sx={style}> */}
                    <LoginDetails ></LoginDetails>
                {/* </Box> */}
            
        </div>
        
    );
    
}
