import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const SingleComment = ({rows}) => {
    return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableCell align="right">שם משתמש</TableCell>
          <TableCell align="right">תוכן</TableCell>
       </TableHead>
     <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
           
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.content}</TableCell>
         
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    )
}
export default SingleComment