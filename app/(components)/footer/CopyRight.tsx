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
        <Typography>© 2022 Megatexnika / Müəllif hüquqları</Typography>
        <Typography>Design by JEDAİ</Typography>
    </Box>
  )
}

export default CopyRight