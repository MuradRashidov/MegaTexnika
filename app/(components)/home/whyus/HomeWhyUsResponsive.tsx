import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeWhyUsResponsive = () => {
  return (
   <Box sx={{display:{xs:"flex",md:"none"}}}>
    <Box>
    

   

<Box
  sx={{
    width: 'auto',
    height: 'auto',
    backgroundImage: "url('/images/home/whyus.png')",
    objectFit: 'cover',
    backgroundPosition: 'center',
    zIndex: 5,
    color:"white",
    position:"relative"
  }}
>
<Box sx={{width:"100%",height:"100%",backgroundColor:"black",position:"absolute",opacity:0.4,zIndex:-1}}></Box>
<Stack sx={{paddingY:4,gap:3,color:"#FFFFFF",margin:2}}>
                    <Typography variant="h4">Niyə bizi seçməlisiniz</Typography>
                    <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scramble
                      </Typography>
                      <Typography>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      as opposed to using Content here, content here, making it look like readable English
                      </Typography>
                </Stack>
</Box>


    </Box>
   </Box>
  )
}

export default HomeWhyUsResponsive