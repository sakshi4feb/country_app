import {CountryT, Order, OrderBY } from "../types/CountryTypes";

export interface Country {
  common: string;
}

export function descendingComparatorForName(a:any, b: any, orderBy: OrderBY) {
  console.log(b)
  console.log(b[orderBy])
  console.log(b[orderBy].common)
  return (b[orderBy].common).localeCompare(a[orderBy].common)
}

export function descendingComparatorForPopulation(a: CountryT, b: CountryT, orderBy: OrderBY
) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order:Order, orderBy: OrderBY)  {
  console.log(orderBy)
  console.log(order)
  if (orderBy === "name") {
    return order === "desc"
      ? (a: CountryT, b: CountryT) => descendingComparatorForName(a, b, orderBy)
      : (a: CountryT, b: CountryT) => -descendingComparatorForName(a, b, orderBy);
  } else {
    return order === "desc"
      ? (a: CountryT, b: CountryT) => descendingComparatorForPopulation(a, b, orderBy)
      : (a: CountryT, b: CountryT) => -descendingComparatorForPopulation(a, b, orderBy);
  }
}
export function stableSort(array: CountryT[], comparator: (a:CountryT, b:CountryT) => number) {

  const stabilizedThis = array.map((el: CountryT, index: number) => [el, index] as [CountryT, number]);
  // console.log(stabilizedThis)
  stabilizedThis.sort((a, b) => {
  //  console.log(a[0])
  const order = comparator(a[0], b[0]);
   if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  
  return stabilizedThis.map((el) => el[0]);
}
