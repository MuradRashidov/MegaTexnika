import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ContactInfo = () => {
  return (
    <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,maxWidth:280,padding:2}} >
        <Typography>Əlaqə</Typography>
        <Box>
            <Typography>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
            <Typography>+994(51) 123 45 67 +994(12) 123 45 67</Typography>
            <Typography>info@megatexnika.az</Typography>
        </Box>
        <Box>
            <Typography>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
            <Box sx={{display:"flex",gap:2}}>
                <Instagram/>
                <Facebook/>
                <Twitter/>
            </Box>
        </Box>
    </Box>
  )
}

export default ContactInfo