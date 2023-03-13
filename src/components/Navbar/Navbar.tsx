import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { useAppSelector} from '../../app/hooks'

const Navbar = () => {
  const {favouriteCountries} = useAppSelector((state:any) => state.countryR)
  
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position='relative'>
          <Toolbar>
          <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>COUNTRY</Typography>
          <Link to={"/"}><HomeIcon/></Link>
          <Link to={"/favoutiteCountries"}><Badge badgeContent={favouriteCountries.length} color="primary"><FavoriteIcon/></Badge></Link>
          </Toolbar>
        </AppBar>
        </Box>
      
        </>
      )
}

export default Navbar