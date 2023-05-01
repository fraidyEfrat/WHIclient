import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContex'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Register from '../register';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const CourseRegister = () => {

const[flag,setFlag]=useState(false);    
const handleclick=()=>{
    if(role==='UNSIGNED')
       setOpen(true)
    else
       setFlag(true)
}

    const [open, setOpen] = React.useState(false);

   
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseFlag=()=>{
        setFlag(false)
    };

 const role=useContext(AuthContext).role

 console.log(role)

        return (<>
          <Button onClick={handleclick}>
            הרשמה
          </Button>
          <Dialog
           open={open}
           onClose={handleClose}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
         >
           <DialogTitle id="alert-dialog-title">
             {"רוצה להירשם לקורס?"}
           </DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-description">
             על מנת להירשם לקורס יש להזין פרטים אישיים
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose}>סגור</Button>
             <Link to="/register">רישום</Link>
           </DialogActions>
         </Dialog>
            <Dialog
            open={flag}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              הרשמה לקורס
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseFlag}>סגור</Button>
            </DialogActions>
          </Dialog>
          </>
        )
}
export default CourseRegister
