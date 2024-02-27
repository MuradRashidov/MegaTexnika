"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
const monserrat = Montserrat({ subsets: ['latin'] })

const theme = createTheme({

  palette: {
    primary: {
      main: '#FFC01F',
      
    },
    secondary:{
      main:"#596C72"
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
        },
        h4: {
          fontFamily:'Roboto, sans-serif',
          color:"#FFC01F",
          fontSize: '1.75rem',
          fontWeight: 500,
        },
      }
    },
    
    
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          padding: 8,
          color: "#353535",
          fontSize: "calc(5px + 0.8vw)",
          fontWeight: 700,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid",
          borderRadius: 30,
          width: "calc(100px + 5vw)",
          fontFamily: [
            'Mulish',
            'sans-serif',
          ]
        }
      }
    }
  }
});

export default theme;
