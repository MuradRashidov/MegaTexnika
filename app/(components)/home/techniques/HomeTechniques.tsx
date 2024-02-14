"use client"
//import techniques from '@/data/data'
import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeTechnique from './HomeTechnique'
import Link from 'next/link'
import ITechnique from '@/interfaces/data'
import { useSelector, useDispatch } from 'react-redux';
import { fetchTechniques, selectTechniques, selectTechniquesStatus, selectTechniquesError } from '@/redux/features/techniqueSlice';

const HomeTechniques = () => {

  const dispatch = useDispatch();
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
        <Typography sx={{marginY:5}}>Texnikalar</Typography>
        <Grid container spacing={5}>
  {techniques.map((technique: ITechnique, index) => (
    index < 4 ? (
      <Grid key={technique._id} item xs={12} sm={6} md={3}>
        <HomeTechnique {...technique}/>
      </Grid>
    ) : null
  ))}
</Grid>

        <Box sx={{display:"flex",justifyContent:"center"}}>
        <Link style={{
                backgroundColor:"#FFC01F",
                textDecoration:"none",
                padding:8,
                color:"#353535",
                fontSize:"calc(5px + 0.8vw)",
                fontWeight:700,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:30,
                width:"calc(100px + 5vw)"
            }} href="/techniques">Hamısına Bax</Link>
        </Box>
        </Container>
    </Box>
  )
}

export default HomeTechniques