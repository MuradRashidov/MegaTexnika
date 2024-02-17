"use client"
import { Box, Button, Typography } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
  const {data:session} = useSession();
  console.log(session?.user);
  
  if(session && session.user){
    return <Box sx={{display:"flex",alignItems:"center",gap:1}}>
    <img style={{width:25,height:25,borderRadius:"50%"}} alt="user" src={session.user.image ?? ""}/>
    <Button variant="outlined" onClick={() => signOut()}>Sign out</Button>
    </Box>
  }
  console.log(session?.user?.name)
  return (
    <Box sx={{display:"flex", flexDirection:"row",gap:1,cursor:"pointer"}}>
        <img style={{width:25,height:25}} alt="dsf" src="https://shorturl.at/ovwyD"/>
        <Button variant="outlined" color="primary" onClick={() => signIn("google")}>Sign in</Button>

    </Box>
  )
}

export default LoginButton