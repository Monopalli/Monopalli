import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import * as React from "react";
import Header from "./components/Header";


const theme = createTheme({
    palette: {
        primary:{ main: "#2EDB4B",
        contrastText: "#ffffff"},
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        button: {
            textTransform: 'none'
        }
    },
    shadows: ["none"]
});

/*
const Navbar = styled('div')`
    overflow: auto;
    padding: 10px 40px;
    border-bottom: solid #1A202C;
    display: flex;
    justify-content: space-between;
    width: 97%;
`;
*/


function App() {
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
          <Header/>
    </div>
      </ThemeProvider>
  );
}

export default App;
