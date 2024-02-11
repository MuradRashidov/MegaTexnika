import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const HomeContact = () => {
  return (
    <Box sx={{marginTop:20,marginBottom:5,paddingY:2,backgroundColor:"#EFEFEF",position:"relative"}}>
        <Container>
            <Stack sx={{width:{xs:"100%",lg:"40%"},gap:3}}>
                    <Typography component="h6">Bizimlə əlaqə saxla!</Typography>
                    <Typography component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                    </Typography>
                    <Grid spacing={2} container>
                        <Grid item xs={12} lg={6}>
                            <TextField sx={{width:"100%"}} id="outlined-basic" label="Ad, Soyad" variant="outlined" />
                        </Grid>
                        <Grid  item xs={12} lg={6}>
                            <TextField sx={{width:"100%"}} id="outlined-basic" label="Şirkətin adı" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField sx={{width:"100%"}} id="outlined-basic" label="E-mail" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <TextField sx={{width:"100%"}} id="outlined-basic" label="Telefon" variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" sx={{backgroundColor:"#FFC01F",width:"100%",color:"#353535"}}>Göndər</Button>
                        </Grid>
                    </Grid>
            </Stack>
            <Box sx={{position:"absolute",right:15,top:-120, display:{xs:"none",lg:"block"} }}>
                <Image alt="traktor" src="/images/home/traktor.png" width={600} height={340}/>
            </Box>
    </Container>
    </Box>
  )
}

export default HomeContact