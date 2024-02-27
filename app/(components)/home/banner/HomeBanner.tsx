import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ResponsiveHomeBanner from './ResponsiveHomeBanner'
import Link from 'next/link'

const HomeBanner = () => {
  return (
    <Box>
        <Container sx={{display:{xs:"none",md:"flex"}}}>
            <Stack sx={{
                paddingY:3,
                flexDirection:{
                    sx:"column",
                    md:"row"
                 }
            }}

             >
                  <Box sx={{
                    flex:1,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-evenly",
                    paddingY:3
                    }}>
                    <Typography sx={{color:"#596C72",fontWeight:700}} variant='h3' component='h1'>
                       Ağır texnikanızı bizdən satın alın
                    </Typography>
                    <Typography sx={{color:"#353535",width:"80%",fontWeight:400,fontSize:14}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    </Typography>
                    <Link className="nLink" href="/about">Ətraflı</Link>
                  </Box>
                  <Box sx={{
                      flex: 1,
                      boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)",
                      border:"10px solid #ffffff",
                      borderRadius: "0px", 

                    }}>
                    <Image layout='responsive' width={400} height={250} src="/images/home/banner.png" alt="banner"/>
                  </Box>

            </Stack>
        </Container>
        <Box sx={{display:{xs:"block",md:"none"}}}>
          <ResponsiveHomeBanner/>
        </Box>
    </Box>
  )










}

export default HomeBanner