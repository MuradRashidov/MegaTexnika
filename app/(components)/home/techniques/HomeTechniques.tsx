"use client"
//import techniques from '@/data/data'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeTechnique from './HomeTechnique'
import Link from 'next/link'
import ITechnique from '@/interfaces/data'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechniques, selectTechniques, selectTechniquesStatus, selectTechniquesError } from '@/redux/features/techniqueSlice';
import { useAppDispatch } from '@/redux/store'

const HomeTechniques = () => {

  const dispatch = useAppDispatch();
  const techniques = useSelector(selectTechniques);
  const status = useSelector(selectTechniquesStatus);
  const error = useSelector(selectTechniquesError);
  useEffect(() => {
    dispatch(fetchTechniques());
  }, [dispatch]);
  
console.log(techniques);
  return (
    <Box sx={{marginY:4}}>
        <Container>
        <Typography sx={{marginY: {xs:2},color:"#596C72",fontSize:30,fontWeight:700}}>Texnikalar</Typography>
        <Grid container spacing={5}>
  {techniques.map((technique: ITechnique, index:number) => (
    index < 4 ? (
      <Grid key={technique._id} item xs={12} sm={6} md={3}>
        <HomeTechnique {...technique}/>
      </Grid>
    ) : null
  ))}
</Grid>

        <Box sx={{display:"flex",justifyContent:"center"}}>
        <Link  className="nLink_2" href="/techniques">Hamısına Bax</Link>
        </Box>
        </Container>
    </Box>
  )
}

export default HomeTechniques