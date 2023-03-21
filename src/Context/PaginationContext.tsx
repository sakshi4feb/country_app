import { createContext } from "react";
import { PaginationContentPage, PaginationContentRowsPerPage } from "../types/CountryTypes";

export const PaginationContextPage = createContext<PaginationContentPage>({
    page:0,
    setPage:()=>{}
});
export const PaginationContextRowsPerPage = createContext<PaginationContentRowsPerPage>({
    rowsPerPage: 10,
    setRowsPerPage:(number)=>{}
});
