import FrequencyQuestions from '@/app/(components)/leaseterms/FrequencyQuestions'
import LeaseTermsComponent from '@/app/(components)/leaseterms/LeaseTerms'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const LeaseTerms = () => {
  return (
   <Box>
    <Box sx={{display:"flex"}}>
        <Container>
        <Typography sx={{display:"flex",marginY:1,color:"#ADADAD",gap:1}}>Ana səhifə 
        <Typography sx={{color:"#596C72"}}> | Icarə şərtləri</Typography>
        </Typography>
        </Container>
    </Box>
     <LeaseTermsComponent/>
    <FrequencyQuestions/>
   </Box>
  )
}

export default LeaseTerms