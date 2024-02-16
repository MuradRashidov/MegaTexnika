import BlogBanner from '@/app/(components)/blog/BlogBanner'
import BlogNews from '@/app/(components)/blog/BlogNews'
import BlogResponsiveBanner from '@/app/(components)/blog/BlogResponsiveBanner'
import { Box,Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
   <Box>
      <Box sx={{display:{xs:"none",md:"block"}}}><BlogBanner/></Box>
      <Box sx={{display:{xs:"block",md:"none"}}}><BlogResponsiveBanner/></Box>
      <BlogNews/>
   </Box>
  )
}

export default page