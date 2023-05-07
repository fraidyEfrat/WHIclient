import React from 'react'
import SingleUserRequest from './singleUserRequest'
import { Grid } from '@mui/material';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext  } from '../../../context/authContex';
import { useContext } from 'react';
import { TableCell,Table,TableHead } from '@mui/material';
import SortRequests from './sortReqrests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// import { ProductService } from './service/ProductService';

const RequestList = () => {

    const [userRequests, setUserRequests] = useState([]);
    const [sortOrder, setSortOrder] = useState("old");
     useEffect(() => {
     
               
  
        async function fetchData() {
          const token = sessionStorage.getItem("token");
          const config = {
            headers: {
              'Authorization': 'Bearer ' + token
            }
          }

          const { data } = await axios.get(`http://localhost:3600/api/user_request/ByUserID/${sortOrder}`,  config);
          // const { data } = await axios.get(`http://localhost:3600/api/user_request/search?iduser=${iduser}`);
          setUserRequests(data);

      }
      fetchData();
        
     
    }, []);

  return (   
    <>
    <h1>הסטורית בקשות</h1>
    <SortRequests userRequests={userRequests} setUserRequests={setUserRequests}></SortRequests>
       <Table sx={{ width: '50%', flexShrink: 0 }} sortMode="multiple" size="small" aria-label="a dense table">
        <TableHead sx={{ width: '50%', flexShrink: 0 }}>
            <TableCell align="right" >נושא</TableCell>
            <TableCell align="right">סטטוס</TableCell>
            <TableCell align="right">בקשה</TableCell>
            <TableCell align="right" sortable >תגובה</TableCell>
            <TableCell align="right" >תאריך</TableCell>
        </TableHead>
      </Table>
      {userRequests?.length && userRequests.map((user_request)=>{return <><SingleUserRequest user_request={user_request} />  </>})}
    </>
  )
}



export default RequestList;
