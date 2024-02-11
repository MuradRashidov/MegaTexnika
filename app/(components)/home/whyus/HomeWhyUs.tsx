import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import HomeWhyUsResponsive from './HomeWhyUsResponsive'

const HomeWhyUs = () => {
  return (
    <Box>
        <Container>
            <Stack sx={{display:{xs:"none",md:"flex"}}} gap={6} flexDirection="row"  alignItems="center">
                <Stack sx={{paddingY:4,gap:3}}>
                    <Typography variant="h3">Niyə bizi seçməlisiniz</Typography>
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
                <Box>
                    <Image alt="texnika" src="/images/home/whyus.png" width={500} height={320}/>
                </Box>
            </Stack>
        </Container>
        <HomeWhyUsResponsive/>
    </Box>
  )
}

export default HomeWhyUs