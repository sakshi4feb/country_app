export function descendingComparatorForName(a: any, b: any, orderBy: any) {
  // console.log(a[orderBy])
  // console.log(b[orderBy])
  if (b[orderBy].common < a[orderBy].common) {
    return -1;
  }
  if (b[orderBy].common > a[orderBy].common) {
    return 1;
  }
  return 0;
}

export function descendingComparatorForPopulation(
  a: any,
  b: any,
  orderBy: any
) {
  // console.log(a[orderBy])
  // console.log(b[orderBy])
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
// type Order = 'asc' | 'desc';
export function getComparator(order: any, orderBy: any) {
  if (orderBy === "name") {
    return order === "desc"
      ? (a: any, b: any) => descendingComparatorForName(a, b, orderBy)
      : (a: any, b: any) => -descendingComparatorForName(a, b, orderBy);
  } else {
    return order === "desc"
      ? (a: any, b: any) => descendingComparatorForPopulation(a, b, orderBy)
      : (a: any, b: any) => -descendingComparatorForPopulation(a, b, orderBy);
  }
}
export function stableSort(array: any, comparator: (a: any, b: any) => number) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}
