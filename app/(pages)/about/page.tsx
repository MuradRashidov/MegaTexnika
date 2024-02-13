import AboutBlog from '@/app/(components)/about/AboutBlog'
import Tested from '@/app/(components)/home/tested/Tested'
import HomeWhyUs from '@/app/(components)/home/whyus/HomeWhyUs'
import { Box } from '@mui/material'
import React from 'react'
const AboutWhyUs = HomeWhyUs;
const About = () => {
  return (
    <Box>
      <AboutBlog/>
      <Tested/>
      <AboutWhyUs/>
    </Box>
  )
}

export default About