"use client"
import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography } from '@mui/material';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';
import { Google } from '@mui/icons-material';
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
      const response = await axios.post("http://localhost:3000/api/users", formData);
      console.log("User registered successfully:", response.data);
      router.push("/")
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
    <Box>
      <Container sx={{width:"60%",marginY:10}}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="name"
            label="Username"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button fullWidth type="submit" variant="contained" color="primary">
            Qeydiyyatdan keç
          </Button>
          
          
        </form>
        
        <Button onClick={(e)=>{e.preventDefault,signIn("google"),router.push("/")}} startIcon={<Google/>} sx={{marginTop:2,backgroundColor:"orangeRed"}}  fullWidth variant="contained">
            Google ilə davam edin
          </Button>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginY:1,gap:2}}>
          <Typography>Hesabnız var?</Typography>
          <Link href="/login">Daxil ol</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterForm;
