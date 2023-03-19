import { createContext } from "react";
import { Order, OrderBY } from "../types/CountryTypes";

export const SortingContextOrder = createContext<Order>("asc");
export const SortingContextOrderBy = createContext<OrderBY>("name");
