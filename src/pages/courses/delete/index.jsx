import * as React from 'react';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const Delete=({idcourse})=>{
    const [err, setErr] = useState(null);
    const handleDeleteCourse =async ()=>{
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
        try{
         await axios.delete(`http://localhost:3600/api/course/${idcourse}`,config);
        // console.log("res.data",res.data);
        }
        catch (err) {
          setErr(err.response.data?.message);
        }
      }
    

return(
    
    <IconButton onClick={handleDeleteCourse}>
                       <DeleteIcon/>        
   </IconButton>

)
}
export default Delete