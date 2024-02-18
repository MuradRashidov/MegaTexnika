import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const AboutBlog = () => {
  return (
   <Box>
    <Container>
       <Typography sx={{display:"flex",marginY:1,color:"#ADADAD",gap:1}}>Ana səhifə 
        <Typography sx={{color:"#596C72"}}> | Haqqımızda</Typography>
       </Typography>
       <Stack sx={{gap:2,marginY:2}}>
       <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Typography sx={{display:"flex",justifyContent:"center"}} component="h1" variant="h2">megaTexnika</Typography>
        <Typography sx={{display:"flex",justifyContent:"center",color:"#FFC01F"}}>Haqqımızda</Typography>
        <Typography 
              sx={{
                display:"flex",
                justifyContent:"center",
                width:{xs:"90%",md:"50%"},
                textAlign:"center",
                color:"#596C72",
                fontWeight:400,
                fontSize:12
                }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
        </Typography>
       </Box>
       <Box sx={{display:{xs:"none",md:"block"}}}>
        <Image alt="ekskavator" src="/images/about/ekskavator.png" width={800} height={300} layout="responsive"/>
       </Box>
       </Stack>
       
    </Container>
   </Box>
  )
}

export default AboutBlog