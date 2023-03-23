import { createContext } from "react";
import { IsSearchContent } from "../types/CountryTypes";

export const TableContext = createContext<IsSearchContent>({
    isSearch: false,
    setIsSearch : ()=> {}
});
