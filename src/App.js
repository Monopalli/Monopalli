import './App.css';
import {ThemeProvider} from "@mui/material";
import * as React from "react";
import Header from "./components/Header";
import Hero from './components/Hero';
import theme from './components/Theme';

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
          <Hero/>
    </div>
      </ThemeProvider>
  );
}

export default App;
