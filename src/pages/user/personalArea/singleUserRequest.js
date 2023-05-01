import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';


const SingleUserRequest = ({user_request}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log("in SingleUserRequest")
  console.log(user_request)
  console.log("user_request.request:")
  console.log(user_request.request);

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  // sx={{ width: '30%', flexShrink: 0 }}
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  ];

  return (
    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
    sx={{ width: '50%', flexShrink: 0 }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            {/* <TableContainer component={Paper}> */}
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="right">{user_request.subject}</TableCell>
            <TableCell align="right">{user_request.status}</TableCell>
            <TableCell align="right">{user_request.request}</TableCell>
            <TableCell align="right">{user_request.response}</TableCell>
            <TableCell align="right">{user_request.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow
           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
            <TableCell align="right">תאריך</TableCell>
            <TableCell align="right">תוכן הפניה</TableCell>
            <TableCell align="right">בקשה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{user_request.date}</TableCell>
              <TableCell align="right">{user_request.response}</TableCell>
              <TableCell align="right">{user_request.request}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}
export default SingleUserRequest;