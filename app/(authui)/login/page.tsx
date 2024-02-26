"use client"
import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, InputAdornment, IconButton } from '@mui/material';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';
import { EmailOutlined, Google, LockOutlined } from '@mui/icons-material';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
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
     const res =  await signIn("credentials",{email:formData.email,password:formData.password,redirect:false})
      router.push("/home")
    } catch (error) {
      console.error("Error registering user:", error);
    }
    finally{
      setFormData({
        email: '',
        password: '',
      })
    }
  };

  return (
    <Box sx={{display:"flex",alignItems:"center",height:"100vh"}}>
      <Container sx={{width:{xs:"100%",md:"60%"},marginY:10}}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            label="Email"
            placeholder="example@gmail.com"
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
          <TextField
            name="password"
            label="Şifrə"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            placeholder="Şifrə"
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
          <Button sx={{marginY:2,color:"#ffffff",fontWeight:600}} fullWidth type="submit" variant="contained" color="primary">
            Daxil ol
          </Button>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginY:2,gap:2}}>
          <Link href="/register">Qeydiyyatdan keç</Link>
        </Box>
          
          
        </form>
      </Container>
    </Box>
  );
};

export default LoginForm;
