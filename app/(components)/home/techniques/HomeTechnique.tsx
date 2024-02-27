import ITechnique from '@/interfaces/data'
import { Category } from '@mui/icons-material'
import { Box, Button, Divider, Link as MuiLink, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Link  from "next/link"

const HomeTechnique = ({_id,name,categoryName,imageUrl,dailyRent,monthlyRent,productionYear}:ITechnique) => {
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
            <Link href={`/techniques/${_id}`}>
  
    <Image alt={name} src={imageUrl} width={220} height={150} layout='responsive' />
 
</Link>
<Divider/>
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
                <Link style={{color:"#353535",textDecoration:"none",display:"flex",justifyContent:"center"}} href={`techniques/${_id}`}>
                    <Button color="primary" variant="contained">
                       Icarə et
                    </Button>
                </Link>
            </Box>
       </Box>
    </Box>
  )
}

export default HomeTechnique