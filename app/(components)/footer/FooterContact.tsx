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
        <Typography sx={{fontSize:14,fontWeight:400,color:"#353535"}}>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
        <Typography sx={{fontSize:14,fontWeight:400,color:"#353535"}}>+994(51) 123 45 67</Typography>
        <Typography sx={{fontSize:14,fontWeight:400,color:"#353535"}}>+994(12) 123 45 67</Typography>
        <Typography sx={{fontSize:14,fontWeight:400,color:"#353535"}}>info@lmegatexnika.az</Typography>
    </Box>
  )
}

export default FooterContact