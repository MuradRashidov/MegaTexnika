import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

const ResponsiveHomeBanner = () => {
  return (
    <Box>
        <Box sx={{
            width:"auto",
            minHeight:500,
            backgroundImage:"url('/images/home/banner.png')",
            objectFit:"cover",
            backgroundPosition:"center",
            backgroundSize:"cover",
            position:"relative",
            backgroundRepeat:"no-repeat",
            //zIndex:-2,
        }}>
            <Box sx={{
            width:"100%",
            minHeight:"100%",
            backgroundColor:"black",
            position:"absolute",
            opacity:0.7,
            display:"flex",
            alignItems:"center"
        }}>
             
             <Box sx={{
                    flex:1,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    paddingY:3,
                    //zIndex:2,
                    color:"white",
                    margin:2,
                    gap:3
                    }}>
                    <Typography variant='h4' component='h1'>
                       Ağır texnikanızı bizdən satın alın
                    </Typography>
                    <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    </Typography>
                    <Link sx={{cursor:"pointer",backgroundColor:"#FFC01F",zIndex:5,fontSize:"calc(11px + 0.9vw)"}} color="primary">Ətraflı</Link>
                  </Box>
        </Box>
       
        </Box>
    </Box>
  )
}

export default ResponsiveHomeBanner