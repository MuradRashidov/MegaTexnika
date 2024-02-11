"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import { Montserrat } from 'next/font/google';
//const montserrat = Montserrat({subsets:["latin"]})

const theme = createTheme({
  components:{
    MuiTypography:{
      
      styleOverrides:{

        root:{
        
        }
      }
    },

    MuiLink:{
        styleOverrides:{
            root:{
                textDecoration:"none",
                padding:8,
                color:"#353535",
                fontSize:"calc(5px + 0.8vw)",
                fontWeight:700,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                border:"1px solid",
                borderRadius:30,
                width:"calc(100px + 5vw)",
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