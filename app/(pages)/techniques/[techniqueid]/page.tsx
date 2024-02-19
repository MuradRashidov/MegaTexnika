import TechniqueById from '@/app/(components)/techniques/TechniqueById'
import { Box } from '@mui/material'
import React from 'react'
const page = ({params:{techniqueid}}:any) => {

  return (
    <Box>
        <TechniqueById techniqueId={techniqueid}/>
    </Box>
  )
}

export default page