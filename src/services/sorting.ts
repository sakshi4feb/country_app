import {CountryT, Order, OrderBY } from "../types/CountryTypes";

export function descendingComparator(a:CountryT, b: CountryT, orderBy: OrderBY) {
  if (orderBy === "name")
  return (b[orderBy].common).localeCompare(a[orderBy].common)
  else {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
}

export function getComparator(order:Order, orderBy: OrderBY)  {
  if (orderBy === "name") {
    return order === "desc"
      ? (a: CountryT, b: CountryT) => descendingComparator(a, b, orderBy)
      : (a: CountryT, b: CountryT) => -descendingComparator(a, b, orderBy);
  } else {
    return order === "desc"
      ? (a: CountryT, b: CountryT) => descendingComparator(a, b, orderBy)
      : (a: CountryT, b: CountryT) => -descendingComparator(a, b, orderBy);
  }
}
export function stableSort(array: CountryT[], comparator: (a:CountryT, b:CountryT) => number) {

  const stabilizedThis = array.map((el: CountryT, index: number) => [el, index] as [CountryT, number]);
  stabilizedThis.sort((a, b) => {
  const order = comparator(a[0], b[0]);
   if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
