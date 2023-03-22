import React ,{useContext} from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../app/hooks";
import { ThemeContext } from "../../Context/ThemeContext";

import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";


const Navbar = () => {
  const { favouriteCountries } = useAppSelector((state) => state.countryR);
  const {mode,setMode}  = useContext(ThemeContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
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
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              COUNTRY
            </Typography>
            <Link to={"/"}>
              <HomeIcon color={mode==='light'? "secondary" : "primary" }/>
            </Link>
            <Link to={"/favoutite-countries"}>
              <Badge badgeContent={favouriteCountries.length} color="primary">
                <FavoriteIcon color={mode==='light'? "secondary" : "primary" }/>
              </Badge>
            </Link>
            <Switch color={mode==='light'? "secondary" : "primary" } onClick={() =>{mode==='light'? setMode('dark'):setMode('light') }} ></Switch>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
