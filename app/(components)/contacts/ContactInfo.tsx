import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const ContactInfo = () => {
  return (
    <Box sx={{
      marginY:{xs:3,md:0},
      paddingY:{xs:3},
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      gap:2,
      minWidth:{xs:500,md:280},
      paddingX:2,
      
      
      }} >
        <Box sx={{
          boxShadow: `
          9px 9px 0px rgba(89, 108, 114, 0.1),
          -9px -9px 0px rgba(89, 108, 114, 0.1),
          9px -9px 0px rgba(89, 108, 114, 0.1),
          -9px 9px 0px rgba(89, 108, 114, 0.1)`,
          padding:3 ,
          display:"flex",
          flexDirection:"column",
          gap:3
        }}>
        <Typography variant="h4">Əlaqə</Typography>
        <Box>
            <Typography className="lightFont" sx={{fontSize:14}}>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
            <Typography className="lightFont" sx={{fontSize:14}}>+994(51) 123 45 67 +994(12) 123 45 67</Typography>
            <Typography className="lightFont" sx={{fontSize:14}}>info@megatexnika.az</Typography>
        </Box>
        <Box>
            <Typography sx={{fontSize:14}}>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
            <Box sx={{display:"flex",gap:2,marginY:1}}>
                <Instagram/>
                <Facebook/>
                <Twitter/>
            </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default ContactInfo