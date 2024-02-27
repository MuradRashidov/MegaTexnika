import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import HomeWhyUsResponsive from './HomeWhyUsResponsive'

const HomeWhyUs = () => {
  return (
    <Box sx={{marginY:{xs:0,md:2}}}>
        <Container>
            <Stack sx={{display:{xs:"none",md:"flex"}}} gap={6} flexDirection="row"  alignItems="center">
                <Stack sx={{paddingY:{xs:0,md:4},gap:3}}>
                    <Typography sx={{
                      color:"#596C72",
                      fontSize:50,
                      fontWeight:700
                    }} variant="h3">Niyə bizi seçməlisiniz!</Typography>
                    <Box sx={{width:"85%",flexDirection:"column",display:"flex",gap:1}}>
                    <Typography sx={{fontSize:14,fontWeight:400,color:"#353535"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scramble
                      </Typography>
                      <Typography sx={{fontSize:14,fontWeight:400,color:"#353535"}}>
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                      as opposed to using Content here, content here, making it look like readable English
                      </Typography>
                    </Box>
                </Stack>
                <Box sx={{
                   boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)",
                   border:"10px solid #ffffff",
                }}>
                    <Image alt="texnika" src="/images/home/whyus.png" width={500} height={320}/>
                </Box>
            </Stack>
        </Container>
        <HomeWhyUsResponsive/>
    </Box>
  )
}

export default HomeWhyUs