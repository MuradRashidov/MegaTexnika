import { Box, Typography } from '@mui/material'
import React from 'react'

const CopyRight = () => {
  return (
    <Box 
    sx={{
        display:"flex",
        flexDirection:{
            xs:"column",
            md:"row"
        },
        justifyContent:{
            xs:"center",
            md:"space-between"
        },
        alignItems:{
            xs:"center",
            
        },
        marginTop: 4
    }}
    >
        <Typography sx={{color:"#353535",fontSize:12,fontWeight:400}}>© 2022 Megatexnika / Müəllif hüquqları</Typography>
        <Box sx={{display:"flex",gap:1}}>
        <Typography sx={{color:"#353535",fontSize:12,fontWeight:400}}>Design by</Typography>
        <Typography sx={{color:"#353535",fontSize:12,fontWeight:700}}>JEDAİ</Typography>

        </Box>
    </Box>
  )
}

export default CopyRight