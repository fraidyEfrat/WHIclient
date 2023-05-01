import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Sort } from '@mui/icons-material';

const SortRequests=({userRequests,setUserRequests})=>{

const  [val, setVal] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const sort=(val)=>{
    if(val=="ישן לחדש"){
      val.sort((a, b) => a - b);
    }
    return val.slice().Sort(-1)
  }

  const handleChange = (event) => {
    setVal(event.target.value);
    setUserRequests(sort(val))
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">sort</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={val}
          label="מיון"
          // onChange={handleChange}
        >
          <MenuItem value={10}>ישן לחדש</MenuItem>
          <MenuItem value={20}>חדש לישן</MenuItem>
        </Select>
      </FormControl>
    </div>
  );

  }
  export default SortRequests;