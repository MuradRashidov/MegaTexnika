"use client"
//import techniques from '@/data/data'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ITechnique from '@/interfaces/data'
import HomeTechnique from '../home/techniques/HomeTechnique'
import { useSelector } from 'react-redux';
import { fetchTechniques, selectTechniques, selectTechniquesStatus, selectTechniquesError } from '@/redux/features/techniqueSlice';
import { useAppDispatch } from '@/redux/store'

const TechniquesComponent = () => {
    const dispatch = useAppDispatch();
    const techniques = useSelector(selectTechniques);
    const status = useSelector(selectTechniquesStatus);
    const error = useSelector(selectTechniquesError);
useEffect(() => {
  dispatch(fetchTechniques());
}, [dispatch]);
console.log(techniques)
  
  return (
    <Box sx={{marginY:4}}>
        <Container>
        <Typography sx={{marginY: {xs:2},color:"#596C72",fontSize:30,fontWeight:700}}>Texnikalar</Typography>
        <Grid container spacing={5}>
  {techniques.map((technique: ITechnique, index:any) => (
     
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