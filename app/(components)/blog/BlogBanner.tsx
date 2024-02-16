import { Box, Container, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BlogBanner = () => {
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
                    flex:3,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"start",
                    paddingY:8,
                    gap:1
                    }}>
                    <Typography variant='h3'>
                        Yeniliklər
                    </Typography>
                    <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    </Typography>
                  </Box>
                  <Box sx={{flex:5}}>
                    <Image layout='responsive' width={400} height={250} src="/images/blog/blogbanner_2.png" alt="banner"/>
                  </Box>

            </Stack>
        </Container>
    </Box>
  )
}

export default BlogBanner