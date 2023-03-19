import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import React from "react";
import { Order, OrderBY } from "../../types/CountryTypes";


type TableHeaderProps = {
  order : Order,
  orderBy : OrderBY,
  handleRequestSort : (event :React.MouseEvent<HTMLButtonElement> , property : OrderBY ) => void
}
const TableHeader = (props: TableHeaderProps) => {
  const { order, orderBy, handleRequestSort } = props;
  const createSortHandler = (property: OrderBY ) => (event: React.MouseEvent<HTMLButtonElement>) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>Flag</TableCell>
        <TableCell key="name">
          <TableSortLabel
            active={orderBy === "name"}
            direction={orderBy === "name" ? order : "asc"}
            onClick={createSortHandler("name")}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell>Region</TableCell>
        <TableCell key="population" align="justify">
          <TableSortLabel
            active={orderBy === "population"}
            direction={orderBy === "population" ? order : "asc"}
            onClick={createSortHandler("population")}
          >
            Population
          </TableSortLabel>
        </TableCell>
        <TableCell>Languages</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
