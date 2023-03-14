import React from 'react'
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';

const TableHeader = (props:any) => {
    const {order, orderBy , handleRequestSort} = props
    const createSortHandler = (property:any)=> (event:any) =>{
        handleRequestSort(event,property)
    }

  return (
    <TableHead>
    <TableRow>
        <TableCell>Flag</TableCell>
        <TableCell key = "name" align="right">
            <TableSortLabel active={orderBy==="name"}  
                            direction={orderBy==="name"?order:"asc"}
                            onClick={createSortHandler("name")}>Name</TableSortLabel>
        </TableCell>
        <TableCell align="right">Region</TableCell>
        <TableCell key="population" align="right">
            <TableSortLabel active={orderBy==="population"}  
                            direction={orderBy==="population"?order:"asc"}
                            onClick={createSortHandler("population")}>Population</TableSortLabel>
        </TableCell>
        <TableCell align="right">Languages</TableCell>
    </TableRow>
    </TableHead>
  )
}

export default TableHeader