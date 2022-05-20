import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import {createTheme, ThemeProvider} from "@mui/material";
import * as React from "react";


const theme = createTheme({
    palette: {
        primary:{ main: "#2EDB4B",
        contrastText: "#FFFFFF"},
    },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
     <Button >BhenChoda</Button>
    </div>
      </ThemeProvider>
  );
}

export default App;
