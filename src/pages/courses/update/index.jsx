
import * as React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Update=({idcourse})=>{
    const navigate=useNavigate()
return(
    <>
    <div>
    <Button onClick={()=>navigate(`/updateCourse/${idcourse}`)}>עריכה</Button>
</div>
    </>
)
}
export default Update