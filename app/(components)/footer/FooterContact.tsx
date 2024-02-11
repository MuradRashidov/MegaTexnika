import { Box, Typography } from '@mui/material'
import React from 'react'

const FooterContact = () => {
  return (
    <Box 
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems: {xs:"center", md:"start"}
        
      }}
    >
        <Typography component='p'>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
        <Typography component='p'>+994(51) 123 45 67</Typography>
        <Typography component='p'>+994(12) 123 45 67</Typography>
        <Typography component='p'>info@lmegatexnika.az</Typography>
    </Box>
  )
}

export default FooterContact