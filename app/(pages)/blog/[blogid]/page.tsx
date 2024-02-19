import news from '@/data/news'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const page = ({params:{blogid}}:any) => {
    const searchedNews = news.find(n=>n.id==blogid)
    console.log(searchedNews)
  return (
    <Box sx={{marginY:3}}>
        <Container>
            <Box sx={{
        display:"flex",
        flexDirection:{xs:"column",md:"row"},
        gap:3
    }}>
            <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>
                <Typography>{searchedNews?.title}</Typography>
                <Typography>{searchedNews?.publishDate}</Typography>
                <Typography>{searchedNews?.description}</Typography>
            </Box>
            <Box
             sx={{
                width:"100%",
                minHeight:{xs:500, md:300},
                background:`url(${searchedNews?.imageUrl}) no-repeat center`,
                backgroundSize:"cover",
                objectFit:"cover"
                
             }}
            >
                
            </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default page