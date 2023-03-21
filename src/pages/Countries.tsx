import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../Context/PaginationContext";
import {
  SortingContextOrder,
  SortingContextOrderBy,
} from "../Context/SortingContext";
import { TableContext } from "../Context/TableContext";
import Pagination from "../components/Pagination";
import TableHeader from "../components/Tables/TableHeader";
import TableData from "../components/Tables/TableData";
import { fetchCountries ,searchCountries } from "../redux/country/countrySlice";
import { Order, OrderBY } from "../types/CountryTypes";

import { TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

import "react-toastify/dist/ReactToastify.css";
import CircleLoader from "react-spinners/CircleLoader";

export const Countries = () => {
  const {isLoading} = useAppSelector(
    (state) => state.countryR
  );
  const [country, setCountry] = useState<string | null>(null);
  const [isSearch, setIsSearch] = useState(false);
  //sorting
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<OrderBY>("name");

  //Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (newValue:string) => {
    if (newValue) {
      setCountry(newValue);
      setIsSearch(true);
      dispatch(searchCountries(newValue));
    } else {
      setIsSearch(false);
      setCountry(null);
    }
  };
  const handleRequestSort = (event: React.MouseEvent<HTMLButtonElement>, property: "name" | "population") => {
    const isAscending = (orderBy === property && order === "asc");
    setOrderBy(property);
    setOrder(isAscending ? "desc" : "asc");
  };
  return (
    <div className="main">
      {isLoading? <CircleLoader
        color={'red'}
        loading={isLoading}
        size={50}
        cssOverride={{display: "block", margin:"auto", marginTop:"12rem", height:"100vh"}}
        aria-label="Loading Spinner"
        speedMultiplier={3}
      /> :
      <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 3, ml : 1,width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField label="Search Countries" color="primary" focused
      value={country}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}
      />
      </div>
    </Box>
      <SortingContextOrder.Provider value={order}>
        <SortingContextOrderBy.Provider value={orderBy}>
          <PaginationContextPage.Provider value={{page, setPage}}>
            <PaginationContextRowsPerPage.Provider value={{rowsPerPage,setRowsPerPage}}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHeader
                    order={order}
                    orderBy={orderBy}
                    handleRequestSort={handleRequestSort}
                  />
                  <TableContext.Provider value={isSearch}>
                    <TableData />
                   </TableContext.Provider>
                  <TableFooter>
                      <TableRow>
                  <Pagination
                  />
                  </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </PaginationContextRowsPerPage.Provider>
          </PaginationContextPage.Provider>
        </SortingContextOrderBy.Provider>
      </SortingContextOrder.Provider>
      </div>}
    </div>
  );
};
