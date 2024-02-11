import ITechnique from '@/interfaces/data'
import { Category } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeCategory = ({_id,name,categoryName,imageUrl}:ITechnique) => {
  return (
    <Box sx={{paddingTop:2}}>
       <Typography sx={{display:"flex",alignItems:"center",justifyContent:"center",fontColor:"#596C72"}}>{categoryName}</Typography> 
       <Image alt={name} src={imageUrl} width={220} height={150} layout='responsive'/>
    </Box>
  )
}

export default HomeCategory