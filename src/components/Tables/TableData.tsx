import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../../Context/PaginationContext";
import {
  SortingContextOrder,
  SortingContextOrderBy,
} from "../../Context/SortingContext";
import { TableContext } from "../../Context/TableContext";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { updateFavourite } from "../../redux/country/countrySlice";
import { stableSort, getComparator } from "../../services/sorting";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { nanoid } from "@reduxjs/toolkit";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableData = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const search = useContext(TableContext);
  const page: any = useContext(PaginationContextPage);
  const rowsPerPage: any = useContext(PaginationContextRowsPerPage);
  const order: any = useContext(SortingContextOrder);
  const orderBy: any = useContext(SortingContextOrderBy);
  const { countries, searchedCountry } = useAppSelector(
    (state: { countryR: any }) => state.countryR
  );
  const dispatch = useAppDispatch();
  const renderCountries = stableSort(countries, getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((country: any) => (
      <TableRow
        key={nanoid()}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <img src={country.flags.png} alt="flag" width="100"></img>
        </TableCell>
        <TableCell align="right">{country.name.common}</TableCell>
        <TableCell align="right">{country.region}</TableCell>
        <TableCell align="right">{country.population}</TableCell>
        <TableCell align="right">
          {country.languages &&
            (Object.values(country.languages) as string[]).map((language) => (
              <li>{language}</li>
            ))}
        </TableCell>
        <TableCell align="right">
          <IconButton
            onClick={() => dispatch(updateFavourite(country.name.common))}
          >
            <FavoriteIcon color="primary" />
          </IconButton>
        </TableCell>

        <TableCell align="right">
          <Link to={country.name.common} state={country}>
            <IconButton>
              <ArrowForwardIosIcon color="primary" />
            </IconButton>
          </Link>
        </TableCell>
      </TableRow>
      //dispatch(updateFavourite(country.name.common))
    ));

  const renderSearchCountry = searchedCountry.map((country: any) => (
    <TableRow
      key={nanoid()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <img src={country.flags.png} alt="flag" width="100"></img>
      </TableCell>
      <TableCell align="right">{country.name.common}</TableCell>
      <TableCell align="right">{country.region}</TableCell>
      <TableCell align="right">{country.population}</TableCell>
      <TableCell align="right">
        {country.languages &&
          (Object.values(country.languages) as string[]).map((language) => (
            <li>{language}</li>
          ))}
      </TableCell>
      <TableCell align="right">
        <IconButton
          onClick={() => dispatch(updateFavourite(country.name.common))}
        >
          <FavoriteIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell align="right">
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
