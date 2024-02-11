import HomeBanner from '@/app/(components)/home/banner/HomeBanner'
import HomeBrands from '@/app/(components)/home/brands/HomeBrands'
import HomeCategories from '@/app/(components)/home/categories/HomeCategories'
import HomeContact from '@/app/(components)/home/contact/HomeContact'
import HomeNews from '@/app/(components)/home/news/HomeNews'
import HomeTechniques from '@/app/(components)/home/techniques/HomeTechniques'
import Tested from '@/app/(components)/home/tested/Tested'
import HomeWhyUs from '@/app/(components)/home/whyus/HomeWhyUs'
import HomeWhyUsResponsive from '@/app/(components)/home/whyus/HomeWhyUsResponsive'
import { Box } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Box>
      <HomeBanner/>
      <HomeCategories/>
      <Tested/>
      <HomeTechniques/>
      <HomeBrands/>
      <HomeNews/>
      <HomeContact/>
      <HomeWhyUs/>
    </Box>
  )
}

export default Home