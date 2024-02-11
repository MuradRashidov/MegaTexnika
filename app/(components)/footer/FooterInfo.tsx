import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const FooterInfo = () => {
  return (
    <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems: {xs:"center", md:"start"}

      }}
    >
        <Typography>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
        <Box>
            <Instagram/>
            <Facebook/>
            <Twitter/>
        </Box>
    </Box>
  )
}

export default FooterInfo