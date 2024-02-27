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
                    
                      <Button sx={{width:120}}  color="primary" variant="contained">
                      <Link style={{padding:0}} className="nLink_3">Ətraflı</Link>
                      </Button>
                    
                      
                    
                  </Box>
        </Box>
       
        </Box>
    </Box>
  )
}

export default ResponsiveHomeBanner