import { useAppSelector } from "../../app/hooks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const { favouriteCountries } = useAppSelector((state) => state.countryR);

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
              <HomeIcon />
            </Link>
            <Link to={"/favoutiteCountries"}>
              <Badge badgeContent={favouriteCountries.length} color="primary">
                <FavoriteIcon />
              </Badge>
            </Link>
            {/* <Switch onClick={() => setMode()}></Switch> */}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
