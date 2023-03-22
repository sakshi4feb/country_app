import { createContext } from "react";

import { ThemeContent } from "../types/CountryTypes";

export const ThemeContext = createContext<ThemeContent>({
mode: 'light',
setMode:() => {}
});
