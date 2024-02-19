import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import news from '@/data/news'
import BlogSingleNews from './BlogSingleNews'
import Link from 'next/link'

const BlogNews = () => {
  return (
    <Box>
        <Container>
        <Typography>Xəbərlər</Typography>
        <Grid container spacing={5}>
  {news.map(singleNews => (
    <Grid key={singleNews.id} item xs={12} sm={6} md={3}>
      <Link href={`/blog/${singleNews.id}`}>
        <BlogSingleNews {...singleNews}/>
      </Link>
    </Grid>
  ))}
</Grid>
        </Container>
    </Box>
  )
}

export default BlogNews