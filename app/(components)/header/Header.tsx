import React from 'react'
import Address from './address/Address'
import Navbar from './navbar/Navbar'
import { Box, Divider } from '@mui/material'

const Header = () => {
  return (
    <Box>
        <Address/>
        <Navbar/>
        <Divider/>
    </Box>
  )
}

export default Header