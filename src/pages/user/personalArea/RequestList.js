import React from 'react'
import SingleUserRequest from './singleUserRequest'
import { Grid, TableBody } from '@mui/material';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext  } from '../../../context/authContex';
import { useContext } from 'react';
import { TableCell,Table,TableHead,TableRow } from '@mui/material';
import SortRequests from './sortReqrests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import navigate from 'navigate';
import { useNavigate } from 'react-router-dom';
import SynagogueOutlinedIcon from '@mui/icons-material/Synagogue';
import SynagogueIcon from '@mui/icons-material/Synagogue';


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
const navigate=useNavigate()
  return (   
    <>
    <h1>הסטורית בקשות</h1>
    <SortRequests userRequests={userRequests} setUserRequests={setUserRequests}/>
    {/* <FormControlLabel control={<Checkbox {...label} icon={<SynagogueOutlinedIcon sx={{color:indigo[700]}}/>} checkedIcon={<SynagogueIcon sx={{color:indigo[700]}}/>} id={'1'} onChange={(e)=>{filter(e.target.id)}}/>} label="Synagogue" /> */}
       <Table sx={{ width: '50%' }} sortMode="multiple" size="small" >
        <TableHead >
            <TableCell align="right" >נושא</TableCell>
            <TableCell align="right">סטטוס</TableCell>
            <TableCell align="right">בקשה</TableCell>
            <TableCell align="right" sortable >תגובה</TableCell>
            <TableCell align="right" >תאריך</TableCell>
        </TableHead>
        {userRequests?.length && userRequests.map((user_request)=>  


        <TableBody>

        {/* {.map((row) => ( */}
          <TableRow
          sx={{cursor:"pointer"}}
          onClick={()=>navigate("/add")}
            key={"row.name"}
          >
            <TableCell align="right"  sx={{maxWidth:6, textOverflow:"ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{"subjectsubjectsubjectsubjectsubjectsubjectsubjectsubjectsubjectsubjectsubjectsubject"}</TableCell>
            <TableCell align="right">{"user_request.status"}</TableCell>
            <TableCell align="right">{"user_request.request"}</TableCell>
            <TableCell align="right">{"user_request.response"}</TableCell>
            <TableCell align="right">{"user_request.date"}</TableCell>
          </TableRow>
        {/* ))} */}
      </TableBody>  )}
      </Table>
    </>
  )
}



export default RequestList;
