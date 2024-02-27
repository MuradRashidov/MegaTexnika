import INews from '@/interfaces/news'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeSingleNews = ({id,title,description,publishDate,imageUrl}:INews) => {
  return (
    <Box sx={{
      boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)" ,
      fontWeight:600,
      transition:"all 0.5s",
      "&:hover": { 
        transform: "scale(1.02)" 
       }
      }}>
       <Image alt="texnika" src={imageUrl} width={220} height={150} layout='responsive'/>
       <Stack sx={{
        gap:2,
        padding:2
       }}>
        <Typography sx={{color:"#191919",fontSize:16,fontWeight:700}} component="h6">{title}</Typography>
        <Typography sx={{color:"#69768B",fontSize:14,fontWeight:400}} component="p">{description.slice(0,45)}...</Typography>
        <Typography sx={{color:"#69768B",fontSize:12,fontWeight:500,marginTop:2}}>{publishDate}</Typography>
       </Stack>
    </Box>
  )
}

export default HomeSingleNews