import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Tested = () => {
  return (
    <Box>
       <Container sx={{marginY:4}}>
        <Stack flexDirection="row" gap={3}>
         <Box sx={{flex:1,display:{
            xs:"none",
            md:"flex"
         },alignItems:"flex-end"}}>
           <Image alt="Mega Texnika" src="/images/home/tested_1.png" width={280} height={550} layout="responsive"/> 
        </Box>   
        <Box sx={{
            flex:2,
            paddingX:5,
            
            }}>
           <Image alt="Mega Texnika" src="/images/home/tested_2.png" width={100} height={50} layout="responsive"/> 
           <Box sx={{
              paddingX:5,
              paddingTop:5,
              display:"flex",
              flexDirection:"column",
              gap:3
           }}>
            <Typography sx={{
                fontWeight:700
            }} variant="h3" component="h3">
              Mega Texnika-da sınaqdan keçirilmiş texnikalar
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
        </Stack>
        </Container> 
    </Box>
  )
}

export default Tested