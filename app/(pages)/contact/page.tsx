import ContactForm from '@/app/(components)/contacts/ContactForm'
import ContactInfo from '@/app/(components)/contacts/ContactInfo'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <Box sx={{marginY:5}}>
      <Container>
      <Box sx={{display:"flex"}}>
        <Typography sx={{display:"flex",marginY:1,color:"#ADADAD",gap:1}}>Ana səhifə 
        <Typography sx={{color:"#596C72"}}> | Əlaqə</Typography>
        </Typography>
    </Box>
        <Box sx={{display:"flex"}}>
          <Box sx={{flex:3}}><ContactForm/></Box>
          <Box sx={{flex:2,display:"flex",justifyContent:"flex-end"}}><ContactInfo/></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact