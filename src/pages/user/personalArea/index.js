import * as React from 'react';
import Button from '@mui/material/Button';
import UserRequest from '../request';
import RequestList from './RequestList';

const PersonalArea=()=>{
    return(<>
      <br></br><br></br><br></br>
      <h1>אזור אישי</h1>
       <UserRequest></UserRequest>
       <RequestList></RequestList>
    </>)
}

export default PersonalArea;