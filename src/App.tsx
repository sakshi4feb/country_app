import "./App.css";
import Index from "./routes";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { red } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
      primary: {
        main: red[700],
      },
    },
    typography: {
      fontFamily: "'Nunito', sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Switch onClick={() => setMode(!mode)}></Switch>
        <Index />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
