// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import axios from 'axios';

// const AutocompleteComponent = ({ path, searchType }) => {
//   const [dataTerm, setDataTerm] = useState([]);

//   const handleSearch = async (value) => {
//     console.log("💕💕💕💕💕💕💕💕💕💕💕💕");
//     console.log(value);
//     try {
//       const res = await axios.get(`http://localhost:3600/api/${path}/${value}`, {
//         withCredentials: true,
//       });
//       setDataTerm(res.data);
//       console.log("❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️");
//       console.log(dataTerm);
//     } catch (err) {
//       // Handle error
//     }
//   };

//   const handleInputChange = (event, value, reason) => {
//     if (reason === 'input') {
//       handleSearch(value);
//       if (value.length >= 2) {
//         setTimeout(() => {
//           // Handle any additional actions after a delay
//         }, 1000);
//       }
//     }
//   };

//   return (
//     <Autocomplete
//       disablePortal
//       id="customer-autocomplete"
//       options={dataTerm}
//       //getOptionLabel={(option) => option.name} 
//       getOptionLabel={(option) => (typeof option === 'string' ? option : option.topic)}
//       value={null}
//       onChange={(event, newValue) => {
//         // Handle value change
//       }}
//       onInputChange={handleInputChange}
//       sx={{ width: '15vw' }}
//       renderInput={(params) => <TextField {...params} label={`${searchType}`} variant="outlined" />}
//     />
//   );
// };

// export default AutocompleteComponent;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const AutocompleteComponent = ({ path, searchType ,setSearch}) => {
  const [dataTerm, setDataTerm] = useState([]);

  const handleSearch = async (value) => {
    try {
      const res = await axios.get(`http://localhost:3600/api/${path}/string/${value}`, {
        withCredentials: true,
      });
      setDataTerm(res.data);
      setSearch(res.data.topic);
    } catch (err) {
      // Handle error
    }
  };

  const handleInputChange = (event, value, reason) => {
    if (reason === 'input') {
      handleSearch(value);
      if (value.length >= 2) {
        setTimeout(() => {
          // Handle any additional actions after a delay
        }, 1000);
      }
    }
  };

  return (
    <Autocomplete
      disablePortal
      id="customer-autocomplete"
      options={dataTerm}
      getOptionLabel={(option) =>
        typeof option === 'string' ? option : option.topic
      }
      value={null}
      // Call the setSelectedOption callback when an option is selected
      onChange={(event, newValue) => {
      }}
      onInputChange={handleInputChange}
      sx={{ width: '15vw' }}
      renderInput={(params) => (
        <TextField {...params} label={`${searchType}`} variant="outlined" />
      )}
    />
  );
};

export default AutocompleteComponent;
