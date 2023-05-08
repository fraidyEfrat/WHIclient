import { useParams } from "react-router-dom";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { TableRow,Button,TableCell } from '@mui/material';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";






const Request = ({requestDetails}) => {
    const {iduser_request,subject,request,response,date,status,iduser}=requestDetails;
    const navigate = useNavigate()

console.log("in request");
console.log(iduser_request);

const {imgsrc}=useParams();
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

  

  return (
    <>
    <TableRow />
    <TableCell align="left" >{subject}</TableCell>
    <TableCell align="left" sx={{width:5, backgroundColor:"red"}}>{request}</TableCell>
    <TableCell align="left" sx={{width:5}}>{response}</TableCell>
    <TableCell align="left">{date}</TableCell>
    <TableCell align="left">{status}</TableCell>
    {/* <StyledTableCell ><Button onClick={()=>navigate(`/addResponse/${iduser_request}`)}>שליחת תגובה</Button></StyledTableCell> */}
    <TableCell align="left"><Button onClick={()=>navigate(`/adminResponse` ,{ state: { iduser_request: {iduser_request}} })}>שליחת תגובה</Button></TableCell>

    
    {/* <StyledTableCell ><Button >לדירוג </Button></StyledTableCell> */}
  
    {/* <StyledTableCell > <button onClick={()=>navigate(`${id}`)}>לפרטים נוספים</button> </StyledTableCell> */}
    {/* navigate:   singleInitiatorCard  =>initiator*/}

   {/* <button onClick={()=>navigate(`/project/${id}`)}>לפרטים נוספים</button> */}
    </>
  )
}

export default Request;

