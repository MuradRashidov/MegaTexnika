import { Box, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';
const page = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:3,height:"100vh"}}>
        <Box sx={{display:"flex",justifyContent:"center",color:"lime"}}>
        <CheckCircleIcon sx={{fontSize:100}}/>
        </Box>
        <Box>
            <Typography sx={{fontSize:14,color:"grey",fontWeight:500}}>
                Odəniş uğurlu oldu və sifarişiniz qeydə alındı
            </Typography>
        </Box>
        <Box>
          <Link href="/">
             Home
          </Link>
        </Box>
    </Box>
  )
}

export default page