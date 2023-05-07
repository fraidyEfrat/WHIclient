import { useParams } from "react-router-dom";
import { useState } from "react";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { TableRow,Button } from '@mui/material';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";






const Request = ({requestDetails}) => {
    const {iduser_request,subject,request,response,date,status,iduser}=requestDetails;
    const navigate = useNavigate()

console.log("in request");
console.log(iduser_request);

//const {imgsrc}=useParams();
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  

  return (
    <>
    <TableRow />
    <StyledTableCell ><div>{iduser_request}</div></StyledTableCell>
    <StyledTableCell >{subject}</StyledTableCell>
    <StyledTableCell >{request}</StyledTableCell>
    <StyledTableCell >{response}</StyledTableCell>
    <StyledTableCell >{date}</StyledTableCell>
    <StyledTableCell >{status}</StyledTableCell>
    <StyledTableCell >{iduser}</StyledTableCell>
    {/* <StyledTableCell ><Button onClick={()=>navigate(`/addResponse/${iduser_request}`)}>שליחת תגובה</Button></StyledTableCell> */}
    <StyledTableCell ><Button onClick={()=>navigate(`/adminResponse` ,{ state: { iduser_request: {iduser_request}} })}>שליחת תגובה</Button></StyledTableCell>

    
    {/* <StyledTableCell ><Button >לדירוג </Button></StyledTableCell> */}
  
    {/* <StyledTableCell > <button onClick={()=>navigate(`${id}`)}>לפרטים נוספים</button> </StyledTableCell> */}
    {/* navigate:   singleInitiatorCard  =>initiator*/}

   {/* <button onClick={()=>navigate(`/project/${id}`)}>לפרטים נוספים</button> */}
    </>
  )
}

export default Request;

