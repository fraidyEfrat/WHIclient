import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import { TableCell,Table,TableHead,TableRow,TableBody } from '@mui/material';
import Request from './Request';
import { useNavigate } from 'react-router-dom';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';

const UserRequestList = () => {
    const [requestList, setRequestList] = useState([]);
    const [err, setErr] = useState(null);
    const navigate=useNavigate()

    useEffect(() => {
      async function fetchData() {
        setErr("");
        //e.preventDefault();
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        try {
    
          const {data:_requestList} = await axios.get("http://localhost:3600/api/user_request",config)
          if(_requestList?.length) 
              setRequestList(_requestList)  
        } 
       catch (err) {
        setErr(err.response.data?.message);
      }      
          
        }
        fetchData()
    }, []);
//cursor pointer

  return (   
    <>
    <div style={{ paddingTop: "66px" }}>הפניות שצריכות טיפול</div>
    <Table sx={{ width: '70%' }} sortMode="multiple" size="small" >
    <TableHead>
          <TableCell align="right"><SubjectRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>נושא</span></b></TableCell>
          <TableCell align="right"><AutorenewRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>סטטוס</span></b></TableCell>
          <TableCell align="right"><DraftsRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>בקשה</span></b></TableCell>
          <TableCell align="right" sortable><MarkEmailReadRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>תגובה</span></b></TableCell>
          <TableCell align="right"><DateRangeRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>תאריך</span></b></TableCell>
   </TableHead>
        {/* {userRequests?.length && userRequests.map((user_request)=>  <TableBody> */}
        {/* {.map((row) => ( */}
        <TableBody>
        {requestList?.length && requestList.map((user_request)=>  <TableRow
          sx={{cursor:"pointer",maxHeight:20}}
          onClick={()=>navigate(`/adminResponse/${user_request.iduser_request}` ,{ state: { iduser_request: user_request.iduser_request} })}
          key={"row.name"}
          >
            <TableCell align="right" >{user_request.subject}</TableCell>
            <TableCell align="right" >{user_request.status}</TableCell>
            <TableCell align="right" sx={{maxWidth:200, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{user_request.request}</TableCell>
            <TableCell align="right" sx={{maxWidth:200, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{user_request.response}</TableCell>
            <TableCell align="right">{user_request.date}</TableCell>
          </TableRow>)}
          </TableBody>
          </Table>
        {/* ))} */}
      {/* </TableBody>  )} */}
      {/* </Table> */} 
   </>
  )
}

export default UserRequestList;


