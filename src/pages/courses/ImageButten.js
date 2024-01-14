import * as React from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import defaultImage from '../images/4.jpg';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import CourseRegister from './CourseRegister';
// import PaymentIcon from '@mui/icons-material/Payment';
import Woman2Icon from '@mui/icons-material/Woman2';
import PlaceIcon from '@mui/icons-material/Place';
import CourseDetails from './courseDetails';
import { AuthContext } from '../../context/authContex'
import { useContext } from "react";
import Update from './update';
import Delete from './delete';

const ImgButton = styled(ButtonBase)(({ theme }) => ({

  // position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },

  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  // position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));


export default function ImageButten({ course }) {
  const { idcourse, lecturer, maxRegisters, cost, numLecture, idsubject, picture, address, minage, maxage, topic } = course
  const { role } = useContext(AuthContext);
  return (
    <ImgButton
      focusRipple
      key={lecturer}
      style={{
        display: 'block', maxWidth: 300, minHeight: 200, margin: "20px", width: '100%'
      }}
    >
      {/* <ImageSrc style={{ backgroundImage: `url(${defaultImage})` }} /> */}
      <ImageSrc style={{ backgroundImage: `url(http://localhost:3600/images/${picture})` }} />
      <ImageBackdrop className="MuiImageBackdrop-root" />
      <Image>
        <Typography
          // component="span"
          variant="subtitle1"
          color="inherit"
          fontSize={20}
          sx={{
            position: 'relative',
            p: 4,
            pt: 2,
            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
          }}
        >
          <div style={{ display: 'flex' }}>
              {role == "ADMIN" ? <><Update idcourse={idcourse} /> <Delete idcourse={idcourse} /> </> : <></>}
              </div>
          {topic}
          <br></br>
          {lecturer}
          <br/>

        </Typography>

        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <>
            <div>
                <br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br>
                <CourseRegister courseDetails={null}></CourseRegister>
              </div></>
          )}
        </PopupState>

        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
          <br></br><br></br><br></br> <br></br><br></br> <br></br><br></br> <br></br><br></br>
         <CourseDetails course={course}></CourseDetails>
         <br/><br/>
         {/* {role == "ADMIN" ?  <><Update idcourse={idcourse}/> <Delete idcourse={idcourse}/> </>: <></>} */}
            </div>
          )}
        </PopupState>
      </Image>
    </ImgButton>
  );
}
