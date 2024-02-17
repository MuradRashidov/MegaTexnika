import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const ResponsiveTested = () => {
  return (
    <Box>
        <Box sx={{
            width:"auto",
            minHeight:550,
            backgroundImage:"url('/images/home/tested_2.png')",
            objectFit:"cover",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            position:"relative",
            zIndex:-1
        }}>
            <Box sx={{
            width:"100%",
            minHeight:"100%",
            backgroundColor:"black",
            position:"absolute",
            opacity:0.7,
            zIndex:2,
            display:"flex",
            alignItems:"center"
        }}>
            
            <Box sx={{
              paddingX:2,
              paddingTop:5,
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              gap:3,
              color:"white",
              zIndex:2
           }}>
            <Typography sx={{
                fontWeight:700
            }} variant="h4" component="h3">
              Mega Texnika-da sınaqdan keçirilmiş texnikalar
            </Typography>
            <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            </Typography>
            <Link style={{
                textDecoration:"none",
                padding:8,
                color:"#353535",
                backgroundColor:"#FFC01F",
                fontSize:"calc(5px + 0.9vw)",
                fontWeight:700,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                border:"1px solid",
                borderRadius:30,
                width:"calc(100px + 5vw)"
            }} href="/about">Haqqımızda</Link>
           </Box>
        </Box>
      
        </Box>
    </Box>
  )
}

export default ResponsiveTested