import './App.css';
import Button from "./components/Button/Button";
import {createTheme, ThemeProvider} from "@mui/material";
import * as React from "react";
import styled from "@mui/material/styles/styled";


const theme = createTheme({
    palette: {
        primary:{ main: "#2EDB4B",
        contrastText: "#ffffff"},
    },
    shadows: ["none"]
});

const Navbar = styled('div')`
    overflow: auto;
    padding: 10px 40px;
    border-bottom: solid #1A202C;
    display: flex;
    justify-content: space-between;
    width: 97%;
`;


function App() {
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
          <Navbar>
            <Button>Swagat Hai</Button>
              <div>
                  <Button variant="outlined">Login</Button>
                  <Button>Sign Up</Button>
              </div>
          </Navbar>
    </div>
      </ThemeProvider>
  );
}

export default App;
