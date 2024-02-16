import { Box, Typography } from '@mui/material'
import React from 'react'

const BlogResponsiveBanner = () => {
  return (
    <Box>
        <Box sx={{
            width: 'auto',
            minHeight: 300,
            backgroundImage: "url('/images/blog/blogbanner_2.png')",
            objectFit: 'cover',
            backgroundPosition: 'center',
            zIndex: 5,
            color:"white",
            position:"relative",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            
        }}>
            <Box sx={{
                width:"100%",
                height:"100%",
                backgroundColor:"black",
                position:"absolute",
                opacity:0.4,
                zIndex:-1
            }}></Box>
            <Box sx={{padding:3}}>
            <Typography variant='h3'>
                        Yeniliklər
                    </Typography>
                    <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    </Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default BlogResponsiveBanner