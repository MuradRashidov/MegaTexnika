import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
const ContactForm = () => {
  return (
   <Box>
    <Typography sx={{marginY:3}}>Bizə yazın!</Typography>
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
                        <TextField
                            sx={{width:"100%",maxHeight:200}}
                            id="outlined-multiline-flexible"
                            label="Mesaj"
                            multiline
                            maxRows={8}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" sx={{backgroundColor:"#FFC01F",width:"100%",color:"#353535"}}>Göndər</Button>
                        </Grid>
                        
                    </Grid>
   </Box>
  )
}

export default ContactForm