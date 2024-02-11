import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HomeSingleNews from './HomeSingleNews'
import news from '@/data/news'

const HomeNews = () => {
  return (
    <Box>
        <Container>
        <Typography>Xəbərlər</Typography>
        <Grid container spacing={5}>
            {
              news.map(singleNews=>{
                return <Grid key={singleNews.id} item xs={12} sm={6} md={3}>
                  <HomeSingleNews {...singleNews}/>
                </Grid>
              })
            }
        </Grid>
        </Container>
    </Box>
  )
}

export default HomeNews