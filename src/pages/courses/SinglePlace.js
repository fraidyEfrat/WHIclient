import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import defaultImage from '../images/apple.jpg';
import { useState } from 'react';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const SinglePlace = ({course}) => {
  console.log(course);

  // const {lecturer, cost,picture,address,minage,maxage, numLecture,maxRegesters ,subject   }=course
  const {idcourse,lecturer,maxRegisters,cost,numLecture,idsubject,picture,address,minage,maxage}=course
 console.log("maxRegisters "+maxRegisters);
 console.log("cost "+cost);

  return (
    <Paper
      sx={{
        p: 2,
        margin: '20px auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
              lecturer: {lecturer}
              </Typography>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt={idsubject} src={defaultImage} />
                </ButtonBase>
              </Grid>
              <Typography variant="body2" color="text.secondary">
              maxRegisters: {maxRegisters}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              cost: {cost}
              </Typography>
              <Grid item>
              <Grid item>
          </Grid>
          <Grid item>
          </Grid>
            </Grid>
            </Grid>
           </Grid>
        
        </Grid>
      </Grid>
    </Paper>
  );
}
export default SinglePlace;
