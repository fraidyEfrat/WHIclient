// import { useParams } from "react-router-dom";
// import { useState } from "react";

// import { Link ,useNavigate,Navigate} from "react-router-dom"
// import { TableRow,Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import DisplayRating from "../articleRating/displayRating";
// import RatingArticle from "../articleRating/ratingArticle";


// const ArticleItem = ({article}) => {
// const {idarticle,idsubject,title,content,picture,author,rating}=article
// const navigate=useNavigate()
// // const {articleId}=useParams();
   


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
//   return (
//     <>
//     <TableRow />
//     <StyledTableCell >{idarticle}</StyledTableCell>
//     <StyledTableCell >{idsubject}</StyledTableCell>
//     <StyledTableCell >{title}</StyledTableCell>
//     <StyledTableCell >{content}</StyledTableCell>
//     <StyledTableCell >{picture}</StyledTableCell>
//     <StyledTableCell >{author}</StyledTableCell>
//     <StyledTableCell >{rating}</StyledTableCell>
//     <StyledTableCell ><DisplayRating stars={rating}></DisplayRating></StyledTableCell>
//     <StyledTableCell ><RatingArticle articleId={idarticle}></RatingArticle> </StyledTableCell>

//     {/* <Button onClick={<RatingArticle></RatingArticle>}></Button> */}


    
//     {/* <StyledTableCell ><Button >לדירוג </Button></StyledTableCell> 
//      <StyledTableCell ><DisplayRating stars={rating}></DisplayRating></StyledTableCell>*/}
  
//    { /*<StyledTableCell > <button onClick={()=>navigate(`${id}`)}>לפרטים נוספים</button> </StyledTableCell>*/}
//     {/* navigate:   singleInitiatorCard  =>initiator*/}

//    {/* <button onClick={()=>navigate(`/project/${id}`)}>לפרטים נוספים</button> */}
//     </>
//   )
// }

// export default ArticleItem;

