import React ,{useState} from 'react'
import Index from './routes';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { red } from '@mui/material/colors';


function App() {
  const [mode, setMode] = useState(false)
  const theme = createTheme({
    palette: {
       mode: mode ? "light" : "dark",
       primary: {
        main : red[700]
       }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>  
    <Paper>
      <Switch onClick={()=>setMode(!mode)}></Switch>
        <Index />
    </Paper>    
    </ThemeProvider>
  );
};

export default App
