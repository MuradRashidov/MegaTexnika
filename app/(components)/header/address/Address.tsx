import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Address = () => {
    const iconStyle = {
        fontSize:14
    }
  return (
    <Box  sx={{backgroundColor:"#FFC01F",py:1}}>
        <Container sx={{display:"flex", width:"100%",justifyContent:'space-between',alignItems:"center"}}>
        <Typography sx={{
            fontSize:12,
            fontWeight:500,
            lineHeight:"14.6px"
        }}>
        +994(12) 123 45 67 | Fətəli Xan Xoyski 111A, Bakı Azərbaycan
        </Typography>
        <Box sx={{display:"flex",justifyContent:"flex-end",flexDirection:{xs:"column",sm:"row"},gap:1,width:"10%"}}>
            <Instagram style={iconStyle}/>
            <Facebook style={iconStyle}/>
            <Twitter style={iconStyle}/>
        </Box>
        </Container>
    </Box>
  )
}

export default Address