import ITechnique from '@/interfaces/data'
import { Category } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeTechnique = ({_id,name,categoryName,imageUrl,dailyRent,monthlyRent,productionYear}:ITechnique) => {
  return (
    <Box sx={{paddingTop:2}}>
       <Image alt={name} src={imageUrl} width={220} height={150} layout='responsive'/>
       <Box sx={{
            display:"flex",
            flexDirection:"column",
            padding:4,
            gap:3
       }}>
            <Box sx={{
            display:"flex",
            flexDirection:"column",

       }}>
                <Typography sx={{color:"#596C72",fontSize:18,fontWeight:600}}>Məhsulun adı</Typography>
                <Typography sx={{color:"#686868",fontSize:14,fontWeight:400}}>{name}</Typography> 
                <Typography sx={{color:"#B0ADAD",fontSize:14,fontWeight:400,marginTop:1}}>{productionYear}</Typography>   
            </Box>
            <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-end",
            color:"#FFC01F",
            fontSize:18,
            fontWeight:600
       }}>
                <Typography>{monthlyRent} AZN/ay</Typography>
                <Typography>{dailyRent} AZN/gün</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center"
            }}>
                <Link>Icarə et</Link>
            </Box>
       </Box>
    </Box>
  )
}

export default HomeTechnique