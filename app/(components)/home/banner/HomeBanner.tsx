import { Box, Container, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeBanner = () => {
  return (
    <Box>
        <Container>
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
                    <Typography variant='h3' component='h1'>
                       Ağır texnikanızı bizdən satın alın
                    </Typography>
                    <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    </Typography>
                    <Link>Ətraflı</Link>
                  </Box>
                  <Box sx={{flex:1}}>
                    <Image layout='responsive' width={400} height={250} src="/images/home/banner.png" alt="banner"/>
                  </Box>

            </Stack>
        </Container>
    </Box>
  )
}

export default HomeBanner