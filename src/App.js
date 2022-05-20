import './App.css';
import Button from "./components/Button/Button";
import {createTheme, ThemeProvider} from "@mui/material";
import * as React from "react";
import styled from "@mui/material/styles/styled";
import Container from '@mui/material/Container';

const theme = createTheme({
    palette: {
        primary:{ main: "#2EDB4B",
        contrastText: "#ffffff"},
    },
    shadows: ["none"]
});

const Navbar = styled('div')`
    overflow: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid #1A202C;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;


function App() {
  return (
      <ThemeProvider theme={theme}>
      <div className="App">
          <Container maxWidth="xxl">
              <Navbar>
                  <Button>Swagat Hai</Button>
                  <div>
                      <Button variant="outlined">Login</Button>
                      <Button>Sign Up</Button>
                  </div>
              </Navbar>
          </Container>
      </div>
      </ThemeProvider>
  );
}

export default App;
