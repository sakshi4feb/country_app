import {
  PaginationContextPage,
  PaginationContextRowsPerPage,
} from "../Context/PaginationContext";
import TablePagination from "@mui/material/TablePagination";
import React, { useContext } from "react";

const Pagination = (props: any) => {
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
      component="div"
      count={500}
      page={page}
      onPageChange={createHandleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={createHandleChangeRowsPerPage}
    />
  );
};

export default Pagination;
