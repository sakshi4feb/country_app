import React, { useContext } from "react";

import { useAppSelector } from "../app/hooks"
import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../Context/PaginationContext";

import TablePagination from "@mui/material/TablePagination";

const Pagination = () => {
  const { countries, searchedCountry} = useAppSelector(
    (state) => state.countryR
  );
  const {page ,setPage} = useContext(PaginationContextPage);
  const {rowsPerPage, setRowsPerPage} = useContext(PaginationContextRowsPerPage);

   console.log(searchedCountry)
  const createHandleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const createHandleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
   setRowsPerPage(parseInt(event.target.value, 10));
   setPage(0);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50, 100, { label: 'All', value: -1 }]}
      colSpan={8}
      count={searchedCountry.length ? searchedCountry.length : countries.length}
      page={page}
      onPageChange={createHandleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={createHandleChangeRowsPerPage}
      SelectProps={{
        inputProps: {
          'aria-label': 'rows per page',
        },
        native: true,
      }}
    />
  );
};

export default Pagination;
