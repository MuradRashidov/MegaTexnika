import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const FooterInfo = () => {
  const iconStyle = {
    fontSize:22,
    color:"#353535",
    cursor:"pointer"
  }
  return (
    <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems: {xs:"center", md:"start"}

      }}
    >
        <Typography sx={{fontSize:16,color:"#353535",fontWeight:400}}>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
        <Box sx={{display:"flex",gap:2,marginTop:1}}>
            <Instagram sx={iconStyle}/>
            <Facebook sx={iconStyle}/>
            <Twitter sx={iconStyle}/>
        </Box>
    </Box>
  )
}

export default FooterInfo