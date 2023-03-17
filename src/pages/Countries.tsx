import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../Context/PaginationContext";
import {
  SortingContextOrder,
  SortingContextOrderBy,
} from "../Context/SortingContext";
import { TableContext } from "../Context/TableContext";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import Pagination from "../components/Pagination";
import TableHeader from "../components/TableHeader";
import TableData from "../components/Tables/TableData";
import { fetchCountries } from "../redux/country/countrySlice";
import { searchCountry } from "../redux/country/countrySlice";
import { Autocomplete, TextField, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import CircleLoader from "react-spinners/CircleLoader";

export const Countries = () => {
  const { countries , isLoading} = useAppSelector(
    (state: { countryR: any }) => state.countryR
  );
  const [country, setCountry] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  //sorting
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  //Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (newValue: any) => {
    if (newValue) {
      setCountry(newValue);

      setIsSearch(true);

      dispatch(searchCountry(newValue));
    } else {
      setIsSearch(false);
      setCountry(null);
    }
  };

  const handleRequestSort = (event: any, property: any) => {
    const isAscending = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAscending ? "desc" : "asc");
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <div>
      {isLoading? <CircleLoader
        color={'red'}
        loading={isLoading}
        size={50}
        cssOverride={{display: "block", margin:"auto", marginTop:"12rem", height:"100vh"}}
        aria-label="Loading Spinner"
        speedMultiplier={3}
      /> : 
      <div>
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
          onChange={(e, newCountry) => handleSearch(newCountry)}
        />
      </Stack>
      <SortingContextOrder.Provider value={order}>
        <SortingContextOrderBy.Provider value={orderBy}>
          <PaginationContextPage.Provider value={page}>
            <PaginationContextRowsPerPage.Provider value={rowsPerPage}>
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
                </Table>
              </TableContainer>
              <Pagination
                handleChangePage={handleChangePage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </PaginationContextRowsPerPage.Provider>
          </PaginationContextPage.Provider>
        </SortingContextOrderBy.Provider>
      </SortingContextOrder.Provider>
      </div>}
    </div>
  );
};
