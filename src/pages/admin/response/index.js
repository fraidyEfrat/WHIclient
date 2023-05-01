import React, { useState ,useEffect } from 'react'
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Table,TableBody } from '@mui/material';
import Request from './Request';


const UserRequestList = () => {
    const [requestList, setRequestList] = useState([]);
    useEffect(() => {
      async function fetchData() {
          const {data:_requestList} = await axios.get("http://localhost:3600/api/user_request")
          if(_requestList?.length) setRequestList(_requestList)         
          
        }
        fetchData()
    }, []);
//cursor pointer

  return (   
    <>
    <div>---</div>
    <Table>
      <TableBody>
      {requestList?.length && requestList.map((request)=>{return <Request requestDetails={request} /> })}
    </TableBody>
    </Table>
    </>
  )
}

export default UserRequestList;


