import * as React from 'react';
import Button from '@mui/material/Button';
import UserRequest from '../request';
import RequestList from './RequestList';

const PersonalArea=()=>{
  const userName=localStorage.getItem("user name");
    return(<>
      <br></br><br></br><br></br>
     
      <h1 style={{fontSize: 20 , color:"rgb(255, 62, 104)", textAlign:'center', backgroundColor:"rgb(253, 212, 212)", height:"30px", margin:"0px auto"}}> האזור האישי של {userName} ❤</h1>
      <div style={{textAlign:'center'}}>
       <UserRequest></UserRequest>
       <RequestList></RequestList>
       </div>
    </>)
}

export default PersonalArea;