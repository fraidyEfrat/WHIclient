import React,{useState } from "react";
import { Button } from '@mui/material';
import ShowComments from './showComments'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ArticleComments=({idarticle})=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
return(
    <>
     <Button variant="outlined" onClick={handleClickOpen}>
        לתגובות
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"תגובות למאמר"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
               <ShowComments idarticle={idarticle}></ShowComments>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
       </DialogActions>
      </Dialog>
  </>
)
}
export default ArticleComments 