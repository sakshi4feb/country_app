import { nanoid } from "@reduxjs/toolkit";
import React, { useContext} from "react";
import { Link } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../../Context/PaginationContext";
import {
  SortingContextOrder,
  SortingContextOrderBy,
} from "../../Context/SortingContext";
import { TableContext } from "../../Context/TableContext";
import { updateFavourite } from "../../redux/country/countrySlice";
import { stableSort, getComparator } from "../../services/sorting";
import { CountryT } from "../../types/CountryTypes";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableData = () => {

  const search = useContext(TableContext);
  const page: any = useContext(PaginationContextPage);
  const rowsPerPage: any = useContext(PaginationContextRowsPerPage);
  const order = useContext(SortingContextOrder);
  const orderBy= useContext(SortingContextOrderBy);
  const { countries, searchedCountry , favouriteCountries } = useAppSelector(
    (state) => state.countryR
  );
  const isFavourite = (countryName : string)=>(favouriteCountries.includes(countryName))
  const dispatch = useAppDispatch();
  const renderCountries = stableSort(countries, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((country: CountryT) => (
      <TableRow
        key={nanoid()}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <img src={country.flags.png} alt="flag" width="100"></img>
        </TableCell>
        <TableCell align="justify">{country.name.common}</TableCell>
        <TableCell align="justify">{country.region}</TableCell>
        <TableCell align="justify">{country.population}</TableCell>
        <TableCell align="justify">
          {country.languages &&
            (Object.values(country.languages) as string[]).map((language) => (
              <li key={nanoid()}>{language}</li>
            ))}
        </TableCell>
        <TableCell align="justify">
          <IconButton color={isFavourite(country.name.common) ? "secondary" : "primary"}
            onClick={() => dispatch(updateFavourite(country.name.common))}>
            <FavoriteIcon  />
          </IconButton>
        </TableCell>

        <TableCell align="justify">
          <Link to={country.name.common} state={country}>
            <IconButton>
              <ArrowForwardIosIcon color="primary" />
            </IconButton>
          </Link>
        </TableCell>
      </TableRow>
    ));

  const renderSearchCountry = searchedCountry.map((country: CountryT) => (
    <TableRow
      key={nanoid()}
    >
      <TableCell component="th" scope="row">
        <img src={country.flags.png} alt="flag" width="100"></img>
      </TableCell>
      <TableCell>{country.name.common}</TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>
        {country.languages &&
          (Object.values(country.languages) as string[]).map((language) => (
            <li key={nanoid()} >{language}</li>
          ))}
      </TableCell>
      <TableCell>
      <IconButton color={isFavourite(country.name.common) ? "secondary" : "primary"}
            onClick={() => dispatch(updateFavourite(country.name.common))}>
            <FavoriteIcon  />
          </IconButton>
      </TableCell>
      <TableCell>
        <Link to={country.name.common} state={country}>
          <IconButton>
            <ArrowForwardIosIcon color="primary" />
          </IconButton>
        </Link>
      </TableCell>
    </TableRow>
  ));
  return (
    <>
      <TableBody>{search ? renderSearchCountry : renderCountries}</TableBody>
      <ToastContainer />
    </>
  );
};

export default TableData;
