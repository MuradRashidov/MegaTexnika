import {Box, Container, Grid } from '@mui/material'
import React from 'react'
import FooterLogo from './FooterLogo'
import FooterMenu from './FooterMenu'
import FooterContact from './FooterContact'
import FooterInfo from './FooterInfo'
import CopyRight from './CopyRight'

const Footer = () => {
  return (
    <Box sx={{backgroundColor:"#FFf0C6"}}>
  <Container sx={{paddingY:7}}>
    <Grid justifyContent="space-between" spacing={2} container>
      <Grid item xs={12} md={3} lg={2} sx={{paddingY:3, display: 'flex', justifyContent: {xs:"center", lg:"start"}}}>
        <FooterLogo />
      </Grid>
      <Grid item xs={12} md={3} lg={1} sx={{display: 'flex', justifyContent: {xs:"center", lg:"start"}}}>
        <FooterMenu/>
      </Grid>
      <Grid item xs={12} md={3} lg={4} sx={{display: 'flex', justifyContent: {xs:"center", lg:"center"}}}>
        <FooterContact/>
      </Grid>
      <Grid item xs={12} md={3} lg={4} sx={{display: 'flex', justifyContent: {xs:"center", lg:"end"}}}>
        <FooterInfo/>
      </Grid>
    </Grid>
    <CopyRight/>
  </Container>
</Box>

  )
}

export default Footer