import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
//import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';




const UnsignedRating=()=>{
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
       return( 
       
         <>
         <Button color="success" onClick={handleClickOpen}>
                לדרוג
        </Button>
         <Dialog
           open={open}
           onClose={handleClose}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
         >
           <DialogTitle id="alert-dialog-title">
             {"רוצה להגיב ולדרג את המאמר?"}
           </DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-description">
             על מנת לדרג ולהוסיף תגובות
              עליך להכניס פרטים אישיים 
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose}>סגור</Button>
             <Link to="/register">רישום</Link>
           </DialogActions>
         </Dialog>
       </>
        );
        
}
export default UnsignedRating