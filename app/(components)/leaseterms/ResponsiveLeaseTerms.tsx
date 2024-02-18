import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ResponsiveLeaseTerms = () => {
  return (
    <Box>
        <Box sx={{
            width: 'auto',
            minHeight: 300,
            backgroundImage: "url('/images/leaseterms/leaseterms_1.png')",
            objectFit: 'cover',
            backgroundPosition: 'center',
            zIndex: 5,
            color:"white",
            position:"relative",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            
        }}>
            <Box sx={{
                width:"100%",
                height:"100%",
                backgroundColor:"black",
                position:"absolute",
                opacity:0.4,
                zIndex:-1
            }}></Box>
           <Box sx={{
              paddingX:5,
              paddingTop:5,
              display:"flex",
              flexDirection:"column",
              gap:3
           }}>
            <Typography variant="h4" sx={{marginBottom:1,fontWeight:700}}>İcarə şərtləri</Typography>
            <Typography>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            </Typography>
            <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            </Typography>
            <Link style={{
                textDecoration:"none",
                padding:8,
                color:"#353535",
                fontSize:"calc(5px + 0.8vw)",
                fontWeight:700,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                border:"1px solid",
                borderRadius:30,
                width:"calc(100px + 5vw)"
            }} href="/about">Haqqımızda</Link>
           </Box>
        </Box>
    </Box>
  )
}

export default ResponsiveLeaseTerms