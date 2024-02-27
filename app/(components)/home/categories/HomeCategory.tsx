import ITechnique from '@/interfaces/data'
import { Category } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeCategory = ({_id,name,categoryName,imageUrl}:ITechnique) => {
  return (
    <Box sx={{
      paddingTop:2,
      boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)" ,
      fontWeight:600,
      transition:"all 0.5s",
      "&:hover": { 
        transform: "scale(1.02)" 
       }
      }}>
       <Typography sx={{
          display:"flex",
          fontSize:22,
          fontWeight:600,
          alignItems:"center",
          justifyContent:"center",
          fontColor:"#596C72",
          paddingY:"30px",
        }}>
          {categoryName}
        </Typography> 
       <Image alt={name} src={imageUrl} width={220} height={150} layout='responsive'/>
    </Box>
  )
}

export default HomeCategory