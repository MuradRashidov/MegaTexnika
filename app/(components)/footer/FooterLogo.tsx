import { Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterLogo = () => {
    
  return (
    <Link  href="/">
        <Box 
          sx={{
            justifyContent:'center'
        }}
        >
        <Image alt="logo" width={150} height={40} src="/images/logo.png"/>

        </Box>
    </Link>
  )
}

export default FooterLogo