import React , { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import { Link } from "react-router-dom";

import { nanoid } from '@reduxjs/toolkit'

import { fetchCountries } from '../redux/country/countrySlice'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Autocomplete, TextField ,Stack}  from '@mui/material';
import { updateFavourite , searchCountry } from '../redux/country/countrySlice';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IconButton } from '@mui/material';


export const Countries = () => {
    const {countries , searchedCountry} = useAppSelector((state: { countryR: any }) => state.countryR)
    const [country, setCountry] = useState(null)
    const [isSearch, setIsSearch] = useState(false)
    console.log({country})
    const dispatch = useAppDispatch()
    useEffect(()=>{
      
      dispatch(fetchCountries())
    },[dispatch])

    const handleClick=(countryName : any)=>{
       dispatch(updateFavourite(countryName))
    }
    const handleSearch=(newValue:any)=>{
      if(newValue){
      setCountry(newValue)
    
      setIsSearch(true)
    
      dispatch(searchCountry(newValue))
      }
      else{
        setIsSearch(false)
        setCountry(null)

      }
    }
    
    const renderCountries=  countries.map((country: any) =>  (
      
      <TableRow
      key={nanoid()}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
      <TableCell component="th" scope="row"><img src={country.flags.png} alt="flag" width="100"></img></TableCell>
      <TableCell align="right">{country.name.common}</TableCell>
      <TableCell align="right">{country.region}</TableCell>
      <TableCell align="right">{country.population}</TableCell>
      <TableCell align="right">{ country.languages && (Object.values(country.languages) as string[]).map((language)=><li>{language}</li>)}
      </TableCell>
      <TableCell align="right"><IconButton onClick={()=>handleClick(country.name.common)}><FavoriteIcon color= "primary" /></IconButton></TableCell>
      <TableCell align="right"><Link to={country.name.common} state={country}><IconButton><ArrowForwardIosIcon color="primary"/></IconButton></Link></TableCell>
 </TableRow>
  ))

  const renderSearchCountry = searchedCountry.map((country: any) =>  (
      
    <TableRow
    key={nanoid()}
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
    <TableCell component="th" scope="row"><img src={country.flags.png} alt="flag" width="100"></img></TableCell>
    <TableCell align="right">{country.name.common}</TableCell>
    <TableCell align="right">{country.region}</TableCell>
    <TableCell align="right">{country.population}</TableCell>
    <TableCell align="right">{ country.languages && (Object.values(country.languages) as string[]).map((language)=><li>{language}</li>)}
    </TableCell>
    <TableCell align="right"><IconButton onClick={()=>handleClick(country.name.common)}><FavoriteIcon color= "primary" /></IconButton></TableCell>
    <TableCell align="right"><Link to={country.name.common} state={country}><IconButton><ArrowForwardIosIcon color="primary"/></IconButton></Link></TableCell>
</TableRow>

  
))
    return (
            <>
                <Stack spacing={2} sx={{ width: 400 }}>
                <Autocomplete
                  id="size-small-standard"
                  size="small"
                  options={countries}
                  getOptionLabel={(option) => option.name.common}
                  defaultValue={countries[1]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      placeholder="Search a Country" 
                      label="Countries"

                    />
                  )}
                  value={country}
                 // onChange={(e,newCountry)=>setCountry(newCountry)}
                  onChange={(e,newCountry)=>handleSearch(newCountry)}
                />
                </Stack>

                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Flag</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Population</TableCell>
                        <TableCell align="right">Languages</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>{isSearch?renderSearchCountry:renderCountries}</TableBody>
                </Table>
                </TableContainer>
                
               
                </>
    )
}
