"use client";
import { Box, Button, Container, Typography } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';

const UserInfo = () => {
    const {data:session} = useSession();
    //console.log(session)
    const avatarUrl = "https://shorturl.at/hCGPV";
    const profileImage = session?.user?.image || avatarUrl
  return (
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
         <Box>
            <img style={{width:50,height:50,zIndex:3,borderRadius:"50%",marginBottom:1}} src={profileImage} alt="profileImage"/>
            <Typography sx={{fontWeight:700}} color="primary">{session?.user?.name}</Typography>
        </Box>
        <Box
                  sx={{matginTop:3,display:"flex",justifyContent:"center"}}
                >
                <Button
                    color="primary"
                    onClick={() => signOut()}
                    sx={{width:"75%",display:"flex",justifyContent:"center",paddingX:3}} 
                    variant="outlined"  
                    endIcon={<LogoutIcon/>}>
                        Çıxış
                </Button>
                </Box>
    </Box>
  )
}

export default UserInfo