import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import news from '@/data/news'
import BlogSingleNews from './BlogSingleNews'

const BlogNews = () => {
  return (
    <Box>
        <Container>
        <Typography>Xəbərlər</Typography>
        <Grid container spacing={5}>
            {
              news.map(singleNews=>{
                return <Grid key={singleNews.id} item xs={12} sm={6} md={3}>
                  <BlogSingleNews {...singleNews}/>
                </Grid>
              })
            }
        </Grid>
        </Container>
    </Box>
  )
}

export default BlogNews