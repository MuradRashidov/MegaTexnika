"use client"
//import techniques from '@/data/data'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ITechnique from '@/interfaces/data'
import { getTechniques } from '../home/categories/HomeCategories'
import HomeTechnique from '../home/techniques/HomeTechnique'

const TechniquesComponent = () => {
  const [techniques, setTechniques] = useState<ITechnique[]>([]);

  useEffect(() => {
    getTechniques().then((techs) => {
      setTechniques(techs);
      console.log(1)
    });
  }, []);
  return (
    <Box sx={{marginY:4}}>
        <Container>
        <Typography sx={{marginY:5}}>Texnikalar</Typography>
        <Grid container spacing={5}>
  {techniques.map((technique: ITechnique, index) => (
     
      <Grid key={technique._id} item xs={12} sm={6} md={3}>
        <HomeTechnique {...technique}/>
      </Grid>
    
  ))}
</Grid>

        <Box sx={{display:"flex",justifyContent:"center"}}>
        </Box>
        </Container>
    </Box>
  )
}

export default TechniquesComponent