"use client"
import { Box, Button, Typography } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
  const {data:session} = useSession();
  if(session && session.user){
    return <>
    <img style={{width:25,height:25,borderRadius:"50%"}} alt="user" src={session.user.image ?? ""}/>
    <Button onClick={() => signOut()}>Sign out</Button>
    </>
  }
  console.log(session?.user)
  return (
    <Box sx={{display:"flex", flexDirection:"row",gap:1,cursor:"pointer"}}>
        <img style={{width:25,height:25}} alt="dsf" src="https://shorturl.at/ovwyD"/>
        <Button onClick={() => signIn()}>Sign in</Button>

    </Box>
  )
}

export default LoginButton