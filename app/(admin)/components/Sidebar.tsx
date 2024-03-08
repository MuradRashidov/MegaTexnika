"use client"
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import UserInfo from './UserInfo'
import SideMenu from './SideMenu'
import Image from 'next/image'
import CopyRight from '@/app/(components)/footer/CopyRight'

const Sidebar = ({handleOpen}:any) => {
  return (
    <Box onClick={()=> handleOpen()}  sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",padding:2,backgroundColor:"#596C72",height:"100vh",width:{xs:"100%",md:"18%"},position:{xs:"relative",lg:"fixed"},top:0,left:"0"}}>
            <UserInfo/>
            <SideMenu/>
            <Box sx={{backgroundColor:"white",padding:1,isplay:"flex",alignItems:"center",borderRadius:1}}>
             <Image alt="meqatexnika" src="/images/logo.png" width={150} height={35}/>
        </Box>
        <Stack sx={{alignItems:"center",justifyContent:"center"}}>
        <Box sx={{display:"flex",justifyContent:"center"}}>
            <Typography sx={{color:"white",fontSize:12,fontWeight:400,display:"flex",textAlign:"center"}}>
                © 2022 Megatexnika / Müəllif hüquqları
            </Typography>
        </Box>
        <Box sx={{display:"flex",gap:1}}>
            <Typography sx={{color:"#FFC01F",fontSize:12,fontWeight:400}}>Design by</Typography>
            <Typography sx={{color:"#FFC01F",fontSize:12,fontWeight:700}}>JEDAİ</Typography>

        </Box>
        </Stack>
    </Box>
  )
}

export default Sidebar