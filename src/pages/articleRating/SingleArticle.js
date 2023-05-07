import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import defaultImage from '../images/2.jpg';
import DisplayRating from "./displayRating";
import RatingArticle from "./ratingArticle";
import UnsignedRating from "./articleRating/unsignedRating";
import ArticleComments from './btnComments/articleComments';
import ArticleRead from './btnRead/articleRead';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import { AuthContext } from '../../context/authContex'
import { useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const SingleArticle = ({ article }) => {
  const navigate=useNavigate()
  const { role } = useContext(AuthContext);
  //const [stars, setStars] = useState(0);

  const { idarticle, idsubject, title, content, picture, author, rating } = article;

  const [stars, setStars] = useState(rating);

   const updateStarsAfterRatingAndGetARticle = async(stars) => {
    const ArticleById = await axios.get(`http://localhost:3600/api/article/${idarticle}`)
    alert(ArticleById);
    ///////////TODO
    setStars(stars);
  }
  // const [selected, setSelected] = useState('');
  // //const navigate=useNavigate()

  //   const handleClick = (e)=>{
  //     console.log(e.target);
  //    setSelected(idarticle);
  //   }

  return (

    <Card
      
      sx={{
        // cursor:"pointer",
        margin: "20px",
        maxWidth: 300,
        flexGrow: 1,
        backgroundColor: 'rgb(255, 255, 214)',
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={`http://localhost:3600/images/${picture}`}
        title="green iguana"
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              {role == "ADMIN" ?  <Button >עריכה</Button> : <></>}
              {/* ()=>{alert("כאן צריך להביא לעמוד עריכה כמו הוספה רק עם הפרטים")} */}
             
                <Typography gutterBottom variant="subtitle1" component="div">
                  title: {title}
                </Typography>

                {/* <Typography variant="body2" gutterBottom>
                  content: {content}
                </Typography> */}
                <Typography variant="body2" color="text.secondary">
                  author: {author}
                </Typography>

              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid item>
          <Typography sx={{ cursor: 'pointer' }} variant="body2">
            {rating}
          </Typography>
          <Grid item>
            <DisplayRating stars={stars} ></DisplayRating>
            {/* {role == "UNSIGNED" ? <UnsignedRating/> : <RatingArticle updateStarsAfterRating={updateStarsAfterRatingAndGetARticle} idarticle={idarticle} ></RatingArticle>} */}
          </Grid>
          <Grid item>
            <ArticleComments idarticle={idarticle}></ArticleComments>
     
              <Button onClick={()=>navigate(`/article/${idarticle}`)}>לקריאה>>></Button>
          
       </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
export default SingleArticle;

{/* <Grid item>
<DisplayRating stars2={stars} changeStars={changeStars} setChangeStars={setChangeStars} stars={rating}></DisplayRating>
</Grid>
<Grid item>
<RatingArticle setStars={setStars} setChangeStars={setChangeStars} idarticle={idarticle} stars={stars}></RatingArticle>
</Grid> */}
//<CustomizedButton text={"View details"} onClick={(e)=>{handleClick(e)}}></CustomizedButton>


// <Grid container spacing={2}>
//         <Grid item xs={6} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//               title: {title}
//               </Typography>
//               <Grid item>
//                 <ButtonBase sx={{ width: 128, height: 128 }}>
//                     <Img alt={title} src={defaultImage} />
//                 </ButtonBase>
//               </Grid>
//               <Typography variant="body2" gutterBottom>
//               content: {content}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//               author: {author}
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 {rating}
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <DisplayRating stars={rating}></DisplayRating>
//           </Grid>
//           <Grid item>
//             <RatingArticle articleId={idarticle}></RatingArticle>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>