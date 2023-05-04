import { useState } from "react";
import { Button, TextField, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating, Stack } from '@mui/material';



//import { useFormik, FormikValues } from "formik";
import axios from "axios";
const RatingArticle = ({ idarticle, updateStarsAfterRating }) => {
    let frobidden=false;
    const [open, setOpen] = useState(false);
    //TODO :: BY DEFAULT SHOULD SHOW RATING FROM SERVER
    const [stars, setStars] = useState(0);
    const [opinion, setOpinion] = useState('');
    const token = sessionStorage.getItem("token");
    const handleClickOpen = (event) => {
      //event.stopPropagation();
      setOpen(true);
    };

    const handleClose = () => {
      setStars(3);
      setOpen(false);
    };

    const handleSubscribe = async () => {
      console.log(opinion);
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      const date = new Date();
      try {
        const { data: _opinion } = await axios.post(`http://localhost:3600/api/response_article`, { date, content: opinion, idarticle, rating: stars }, config)
        console.log(_opinion, "_opinion");
      }
      catch{
        console.log("cath rating article");
        frobidden=true;
        alert(" על כל מאמר אפשר להגיב פעם אחת תודה🙏")
      }
      
      //debugger;
      //איפה לשים את הhandleclick
      handleClose();
    }

    return (
      <>
        <Button color="success" onClick={handleClickOpen}>
          לדרוג
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>דרוג</DialogTitle>
          <DialogContent>
            <Stack spacing={1}>
              <Box  style={{direction:'ltr', textAlign:'left'}} sx={{ "& > legend": { mt: 2 } }}>
                <Rating onChange={(event) => {
                  const stars = Number(event.target.value)
                  setStars(stars);
                  updateStarsAfterRating(stars);

                }} value={stars} name="simple-controlled" precision={1} defaultValue={2} />
              </Box>
            </Stack>
            <DialogContentText>
              הייתה מרוצה?
              ספר לנו על זה!
              הכנס חוות דעת
            </DialogContentText>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="תגובתך"
                  multiline
                  rows={4}
                  defaultValue="Default Value"
                  value={opinion}
                  onChange={(e) => {
                    setOpinion(e.target.value)
                  }}
                />
              </div>
              <div>
              </div>
              <div>
              </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ביטול</Button>
            <Button onClick={handleSubscribe}>שלח</Button>
            
          </DialogActions>
        </Dialog>
      </>
    );
  }
export default RatingArticle
//<D frobidden={frobidden}></D>