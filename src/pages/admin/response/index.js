import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Table,TableBody } from '@mui/material';
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
    <div>---</div>
    <Table style={{ paddingTop: "66px" }}>
      <TableBody>
      {requestList?.length && requestList.map((request)=>{return <Request requestDetails={request} /> })}
    </TableBody>
    </Table>
    </>
  )
}

export default UserRequestList;


