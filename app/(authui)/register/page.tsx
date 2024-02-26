"use client"
import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Grid, InputAdornment, IconButton } from '@mui/material';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';
import { Email, EmailOutlined, Google, LockOutlined, PersonOutline } from '@mui/icons-material';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", formData);
      console.log("User registered successfully:", response.data);
      await signIn("credentials",{email:formData.email,password:formData.password,redirect:false})
      router.push("/home")
      //router.push("/")
    } catch (error) {
      console.error("Error registering user:", error);
    }
    finally{
      setFormData({
        email: '',
        name: '',
        password: '',
      })
    }
  };

  return (
    <Box  sx={{display:"flex",alignItems:"center",height:"100vh"}}>
      <Container sx={{width:{xs:"100%",md:"60%",},marginY:10}}>
        <form onSubmit={handleSubmit}>
          <Grid sx={{gap:1}} container>
                <Grid  item xs={12}>
                  
                <TextField
            name="email"
            label="Email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <EmailOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
                </Grid>
                <Grid item xs={12}>
                <TextField
            name="name"
            label="İstifadəçi adı"
            placeholder="İstifadəçi adı"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <PersonOutline />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
                </Grid>
                <Grid item xs={12}>
                <TextField
            name="password"
            label="Şifrə"
            type="password"
            placeholder="Şifrə"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <LockOutlined />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
                </Grid>
                <Grid item xs={12}>

                <Button sx={{marginTop:1,color:"#ffffff",fontWeight:600}} fullWidth type="submit" variant="contained" color="primary">
            Qeydiyyatdan keç
          </Button>
                </Grid>
          </Grid>
        </form>
        
        <Button onClick={(e)=>{e.preventDefault,signIn("google"),router.push("/")}} color="secondary" startIcon={<Google/>} sx={{marginTop:2,fontWeight:600}}  fullWidth variant="contained">
            Google ilə davam edin
          </Button>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginY:1,gap:2}}>
          <Typography sx={{fontWeight:600,color:"#596C72",fontSize:12}}>Hesabnız var?</Typography>
          <Link href="/login">Daxil ol</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterForm;
