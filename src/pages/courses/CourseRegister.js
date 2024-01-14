import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContex'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
// import Register from '../register';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Register from '../register/index2';
import RegisterDetails from './RegisterDetails';

const CourseRegister = ({closeDetails}) => {

// useEffect(()=>{button?handleClose():handleclick()},[])  

const[flag,setFlag]=useState(false);    


    const [open, setOpen] = useState(false);
    const [register,setRegister]=useState(false);
   
    
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseFlag=()=>{
        setFlag(false)
    };

    const handleclick=()=>{
      if(closeDetails)
        closeDetails(false);
      if(role==='UNSIGNED')
         setOpen(true)
      else
         setFlag(true)
       }
  

 const role=useContext(AuthContext).role
 
        return (<>
          <Button onClick={handleclick}>רישום</Button>
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
             <Button onClick={()=>setRegister(true)}>רישום</Button>
             {/* <Link to="/register">רישום</Link> */}
            { register?<Register isOpen={true} setRegister={setRegister}></Register>:<></>}
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
              <RegisterDetails></RegisterDetails>
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
