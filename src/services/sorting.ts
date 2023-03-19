import {CountryT, Order, OrderBY } from "../types/CountryTypes";

export function descendingComparatorForName(a: any, b: any, orderBy: any) {
  if ((b[orderBy].common)  < a[orderBy].common) {
    return -1;
  }
  if (b[orderBy].common > a[orderBy].common) {
    return 1;
  }
  return 0;
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
  console.log("inside getCOMP")
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
export function stableSort<T>(array: CountryT[], comparator: (a:CountryT, b:CountryT) => number) {
  console.log("inside STABLESORT")
  const stabilizedThis = array.map((el: CountryT, index: number) => [el, index] as [CountryT, number]);
  // console.log(stabilizedThis)
  stabilizedThis.sort((a, b) => {
  //  console.log(a[0])
  console.log("above comp")
    const order = comparator(a[0], b[0]);
    console.log("below comp")
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  
  return stabilizedThis.map((el) => el[0]);
}
