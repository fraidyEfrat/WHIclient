
import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UpdateDelete=(idarticle)=>{
    const navigate=useNavigate()
return(
    <Button onClick={()=>navigate(`/addArticle`)}>עריכה</Button>
)
}
export default UpdateDelete