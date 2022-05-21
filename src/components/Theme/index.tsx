import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary:{ main: "#2EDB4B",
            contrastText: "#ffffff"},
        secondary: {
            main: "#1A202C",
            contrastText: '#ffffff'
        },
        common: {
            white: '#ffffff'
        }
    },
    typography: {
        fontFamily: "'Inter', sans-serif",
        button: {
            textTransform: 'none'
        }
    },
    //shadows: ["none"]
});

export default theme;