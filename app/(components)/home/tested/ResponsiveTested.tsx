import { Box, Button, Link, Typography } from '@mui/material'
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
            
              <Button sx={{width:120}}  color="primary" variant="contained">
              <Link className="nLink_3" href="/about">
              Haqqımızda
              </Link>
              </Button>
           </Box>
        </Box>
      
        </Box>
    </Box>
  )
}

export default ResponsiveTested