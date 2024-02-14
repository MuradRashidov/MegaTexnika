"use client"
import React, { useState } from 'react';
import { Box, Container, TextField, Button } from '@mui/material';
import axios from 'axios'; 
import { useRouter } from 'next/navigation';

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
      <Container>
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
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default RegisterForm;