import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ResponsiveTested from './ResponsiveTested'

const Tested = () => {
  return (
    <Box>
       <Container  sx={{marginY:4,display:{xs:"none",md:"block"}}}>
        <Stack flexDirection="row" gap={3}>
         <Box sx={{flex:1,display:{
            xs:"none",
            md:"flex"
         },
         alignItems:"flex-end"
         
         }}>
           <Image
           style={{
            boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)",
            border:"10px solid #ffffff",
           }}
            alt="Mega Texnika" src="/images/home/tested_1.png" width={280} height={550} layout="responsive"/> 
        </Box>   
        <Box sx={{
            flex:2,
            paddingLeft:10,
            
            }}>
              <Box sx={{
                display:"flex",
                justifyContent:"flex-end",
                boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)",
                border:"10px solid #ffffff",
            
            }}>
              <Image alt="Mega Texnika" src="/images/home/tested_2.png" width={100} height={50} layout="responsive"/> 
              </Box>
           <Box sx={{
              paddingX:5,
              paddingTop:5,
              display:"flex",
              flexDirection:"column",
              gap:3
           }}>
            <Typography  sx={{color:"#596C72",fontWeight:700}}  variant="h3" component="h3">
              Mega Texnika-da sınaqdan keçirilmiş texnikalar
            </Typography>
            <Typography
               sx={{color:"#353535",width:"90%",fontWeight:400,fontSize:14}}
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled
            </Typography>
            <Link className="nLink" href="/about">Haqqımızda</Link>
           </Box>
        </Box>
        </Stack>
        </Container> 
        <Box sx={{display:{xs:"block",md:"none"}}}>
            <ResponsiveTested/>
        </Box>
    </Box>
  )
}

export default Tested