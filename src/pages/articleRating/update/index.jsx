
import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Update=({idarticle})=>{
    const navigate=useNavigate()
return(
    <Button onClick={()=>navigate(`/updateArticle/${idarticle}`)}>עריכה</Button>
)
}
export default Update