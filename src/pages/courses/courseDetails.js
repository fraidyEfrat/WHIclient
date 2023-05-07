import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContex'
import Typography from '@mui/material/Typography';
import { Link, useParams } from "react-router-dom";
import Register from '../register';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import CourseRegister from './CourseRegister';

const CourseDetails=({course})=>{

const { idcourse, lecturer, maxRegisters, cost, numLecture, idsubject, picture, address, minage, maxage, topic } = course
   
const [openDetails, setOpenDetails] = useState(false);

const [register,setRegister]=useState(false);

const handleclick=()=>{
   
    setOpenDetails(true)
}
const Register=()=>{
    handleClose();
    setRegister(true)
}


   
  
    const handleClose = () => {
      setOpenDetails(false);
    };

        return (<>
          <Button onClick={handleclick}>
            פרטים
          </Button>
          <Dialog
           open={openDetails}
           onClose={handleClose}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
         >
           <DialogTitle id="alert-dialog-title">
             {"פרטי הקורס:"}
           </DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-description">
             <Typography sx={{ p: 2 }}>כתובת:{address}<br></br>עלות:{cost}<br></br>מס' שיעורים:{numLecture}<br></br> מיועד לגילאים:{minage}-{maxage}</Typography>
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose}>סגור</Button>
             {/* <Button onClick={setRegister(true)}>רישום</Button> */}
           </DialogActions>
         </Dialog>
         {register &&  <CourseRegister closeDetails={setOpenDetails}></CourseRegister>}
          </>
        )
}

export default CourseDetails
