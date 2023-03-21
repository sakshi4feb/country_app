import React, { useState } from "react";

import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";
import Index from "./routes";

import Paper from "@mui/material/Paper";
import { amber,blue } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

function App() {
  const [mode, setMode] = useState<boolean>(true);
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
      primary:blue,
      divider: amber[500],
    },
    typography: {
      fontFamily: "'Nunito', sans-serif",
    },
  });
  return (
    <ThemeContext.Provider value={{mode,setMode}}>
    <ThemeProvider theme={theme}>
      <Paper>
        
        <Index />
      </Paper>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
