import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import { TableCell,Table,TableHead,TableRow } from '@mui/material';
import Request from './Request';


const UserRequestList = () => {
    const [requestList, setRequestList] = useState([]);
    const [err, setErr] = useState(null);

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
         {requestList?.length && requestList.map((user_request)=><TableRow
          sx={{cursor:"pointer"}}
          // onClick={()=>navigate("/add")}
            key={"row.name"}
          >
            <TableCell align="right" sx={{minWidth:15,minHeight:7}}  >{user_request.subject}</TableCell>
            <TableCell align="right" sx={{maxWidth:15,minWidth:15, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{user_request.status}</TableCell>
            <TableCell align="right" sx={{maxWidth:15,minWidth:15, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{user_request.request}</TableCell>
            <TableCell align="right" sx={{maxWidth:15,minWidth:15, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{user_request.response}</TableCell>
            <TableCell align="right" sx={{maxWidth:15,minWidth:15, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{user_request.date}</TableCell>
          </TableRow> )
         }
          {/* <TableRow
          sx={{cursor:"pointer"}}
          // onClick={()=>navigate("/add")}
            key={"row.name"}
          >
            <TableCell align="right"  sx={{maxWidth:6, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{"subjectsubjectsubjectsubjectsubjectsubjectsubjectsubjectstsubject"}</TableCell>
            <TableCell align="right">{"user_request.status"}</TableCell>
            <TableCell align="right">{"user_request.request"}</TableCell>
            <TableCell align="right">{"user_request.response"}</TableCell>
            <TableCell align="right">{"user_request.date"}</TableCell>
          </TableRow> */}
          </Table>
        {/* ))} */}
      {/* </TableBody>  )} */}
      {/* </Table> */} 
   </>
  )
}

export default UserRequestList;


