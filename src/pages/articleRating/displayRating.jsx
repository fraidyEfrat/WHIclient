
import Rating from '@mui/material/Rating';

//import StarIcon from '@mui/icons-material/Star';


const DisplayRating = ({stars}) => {

  return (<>
   
   <Rating 
    readOnly = {true}
    value={stars} 
      precision={1}
        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  />
       

      {/* <span>{stars2}</span> */}
     </>
    )
}

export default DisplayRating;