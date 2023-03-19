import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../Context/PaginationContext";
import TablePagination from "@mui/material/TablePagination";
import { useAppSelector } from "../app/hooks"
import React, { useContext } from "react";


const Pagination = (props: any) => {
  const { countries} = useAppSelector(
    (state: { countryR: any }) => state.countryR
  );
  const page: any = useContext(PaginationContextPage);
  const rowsPerPage: any = useContext(PaginationContextRowsPerPage);
  const { handleChangePage, handleChangeRowsPerPage } = props;

  const createHandleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    handleChangePage(event, newPage);
  };

  const createHandleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChangeRowsPerPage(event);
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50, 100, { label: 'All', value: -1 }]}
      colSpan={8}
      count={countries.length}
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
