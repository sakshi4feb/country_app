import React, { useState } from "react";

import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";
import Index from "./routes";

import Paper from "@mui/material/Paper";
import { blue, grey, red} from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...blue,
        ...(mode === 'dark' && {
          main: '#80deea',
        }),
      },
      secondary: {
        ...red,
        ...(mode === 'dark' && {
          main: '#ff1744',
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: '#4a148c',
          paper: '#4a148c',
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: blue[900],
              secondary: grey[800],
            }
          : {
              primary: '#80deea',
              secondary: '#80deea',
            }),
      },
    },
  });
  const theme = createTheme(getDesignTokens(mode));
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
