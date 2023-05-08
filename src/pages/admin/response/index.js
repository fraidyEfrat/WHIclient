import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import { TableCell,Table,TableHead,TableRow,TableBody } from '@mui/material';
import Request from './Request';
import { useNavigate } from 'react-router-dom';

const UserRequestList = () => {
    const [requestList, setRequestList] = useState([]);
    const [err, setErr] = useState(null);
    const navigate=useNavigate()

    useEffect(() => {
      async function fetchData() {
        setErr("");
        //e.preventDefault();
        const token = sessionStorage.getItem("token");
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
    <Table sx={{ width: '50%' }} sortMode="multiple" size="small" >
        <TableHead >
            <TableCell align="right" >נושא</TableCell>
            <TableCell align="right">סטטוס</TableCell>
            <TableCell align="right">בקשה</TableCell>
            <TableCell align="right" sortable >תגובה</TableCell>
            <TableCell align="right" >תאריך</TableCell>
        </TableHead>
        {/* {userRequests?.length && userRequests.map((user_request)=>  <TableBody> */}
        {/* {.map((row) => ( */}
        <TableBody>
        {requestList?.length && requestList.map((user_request)=>  <TableRow
          sx={{cursor:"pointer",maxHeight:20}}
          onClick={()=>navigate(`/adminResponse/${user_request.iduser_request}` ,{ state: { iduser_request: user_request.iduser_request} })}
          key={"row.name"}
          >
            <TableCell align="right">{user_request.subject}</TableCell>
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


