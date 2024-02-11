import INews from '@/interfaces/news'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeSingleNews = ({id,title,description,publishDate,imageUrl}:INews) => {
  return (
    <Box sx={{paddingTop:2}}>
       <Image alt="texnika" src={imageUrl} width={220} height={150} layout='responsive'/>
       <Stack sx={{
        gap:2,
        padding:2
       }}>
        <Typography component="h6">{title}</Typography>
        <Typography component="p">{description.slice(0,30)}...</Typography>
        <Typography>{publishDate}</Typography>
       </Stack>
    </Box>
  )
}

export default HomeSingleNews