import * as React from 'react';
import SingleUserRequest from './singleUserRequest'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../context/authContex';
import { useContext } from 'react';
import { TableCell, Table, TableHead, TableRow, TableBody } from '@mui/material';
import SortRequests from './sortReqrests';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import navigate from 'navigate';
import { useNavigate } from 'react-router-dom';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import { indigo } from '@mui/material/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, FormGroup, Typography } from '@mui/material';
import SynagogueIcon from '@mui/icons-material/Synagogue';
import SynagogueOutlinedIcon from '@mui/icons-material/SynagogueOutlined';
import UserRequest from '../request';
import { Bolt } from '@mui/icons-material';

// import { ProductService } from './service/ProductService';

const RequestList = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [userRequests, setUserRequests] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }

      const { data } = await axios.get(`http://localhost:3600/api/user_request/ByUserID/${sortOrder}`, config);
      // const { data } = await axios.get(`http://localhost:3600/api/user_request/search?iduser=${iduser}`);
      setUserRequests(data);

    }
    fetchData();
  }, [sortOrder]);


  return (
    <>
      <h1 style={{ fontSize: 35 }}>הסטורית בקשות</h1>
      <span style={{ fontSize: 25 }}>מיין לפי תאריך: </span>
      {/* /* <SortRequests userRequests={userRequests} setUserRequests={setUserRequests}/> */}


      <Checkbox {...label} icon={<ArrowUpwardIcon sx={{ color: indigo[700] }} />} checkedIcon={<ArrowDownwardIcon sx={{ color: indigo[700] }} />} onChange={(e) => { setSortOrder(-sortOrder) }} />
      <Table sx={{ width: '70%', textAlign: 'center', maxHeight: 20 }} sortMode="multiple" size="small"  >
        <TableHead>
        <TableCell align="right"><SubjectRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>נושא</span></b></TableCell>
          <TableCell align="right"><AutorenewRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>סטטוס</span></b></TableCell>
          <TableCell align="right"><DraftsRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>בקשה</span></b></TableCell>
          <TableCell align="right" sortable><MarkEmailReadRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>תגובה</span></b></TableCell>
          <TableCell align="right"><DateRangeRoundedIcon style={{ fontSize: '16px', marginRight: '5px' }} /><b><span style={{ fontSize: '16px' }}>תאריך</span></b></TableCell>
        </TableHead>




        <TableBody>


          {userRequests?.length ? userRequests.map((user_request) => <TableRow
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/showRequest/${user_request.iduser_request}`, { state: { iduser_request: user_request.iduser_request } })}
            key={"row.name"}
          >

            <TableCell align="right" >{user_request.subject}</TableCell>
            <TableCell align="right">{user_request.status}</TableCell>
            <TableCell align="right" sx={{ maxWidth: 200, textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user_request.request}</TableCell>
            <TableCell align="right" sx={{ maxWidth: 200, textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>{user_request.response}</TableCell>
            <TableCell align="right">{user_request.date}</TableCell>

          </TableRow>) : "לא נמצאו שאלות"}

        </TableBody>
      </Table>
    </>
  )
}



export default RequestList;
