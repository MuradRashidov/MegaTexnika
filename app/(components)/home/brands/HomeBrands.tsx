import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeBrands = () => {
  const imageUrls:string[] = [
    "/images/home/hyundai.png",
    "/images/home/hitachi.png",
    "/images/home/bobcatbrand.png",
    "/images/home/komatsu.png",
    "/images/home/case.png",
    "/images/home/cat.png",
    "/images/home/liugong.png",
  ]
  return (
    <Box sx={{marginY:4}}>
       <Typography sx={{color:"#596C72",fontSize:30,fontWeight:700,display:"flex",justifyContent:"center",marginY:4}}>Markalar</Typography> 
       <Grid container rowSpacing={4}  sx={{justifyContent:{xs:"center",md:"space-between"}}}>
          {imageUrls.map(imageUrl=>{
            return <Grid sx={{display:"flex",justifyContent:"center"}} key={imageUrl}  item xs={6} sm={3} lg={1}>
              <Image width={100} height={30}  src={imageUrl} alt={imageUrl.slice(13,imageUrl.indexOf("."))}/>
              </Grid>
          })}
       </Grid>
    </Box>
  )
}

export default HomeBrands