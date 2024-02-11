"use client"
import React, { useState } from 'react';
import { Box, Container, TextField, Button, FormGroup, FormControl, InputLabel, FormHelperText } from '@mui/material';
import ITechnique from '@/interfaces/data';
import { getTechniques } from '@/app/(components)/home/categories/HomeCategories';
import mongoose from 'mongoose';

const HomeCategories = () => {
  const [techniques, setTechniques] = useState<ITechnique[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    categoryName: '',
    imageUrl: '',
    dailyRent: '',
    monthlyRent: '',
    productionYear: '',
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
      // Form verilerini kontrol et
      const isValid = validateFormData(formData);
      if (!isValid) {
        console.error("Form validation failed");
        return;
      }

      // Teknikleri POST et
      const response = await fetch("http://localhost:3000/api/techniques", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to post technique");
      }
      const responseData = await response.json();
      console.log("Technique posted successfully:", responseData);

      // Teknikleri yeniden almak için GET isteği gönder
      getTechniques().then((techs) => {
        setTechniques(techs);
      });
    } catch (error) {
      console.error("Error posting technique:", error);
    }
  };

  // Form verilerini doğrulayan işlev
  const validateFormData = (data: any) => {
    // Modeli kullanarak gerekli doğrulamaları gerçekleştir
    const TechniqueSchema = new mongoose.Schema({
      name: { type: String, required: true },
      categoryName: { type: String, required: true },
      imageUrl: { type: String, required: true },
      dailyRent: { type: Number, required: true },
      monthlyRent: { type: Number, required: true },
      productionYear: { type: String, required: true }
    });
    const Technique = mongoose.model('Technique', TechniqueSchema);
    const technique = new Technique(data);
    const validationError = technique.validateSync();
    if (validationError) {
      console.error("Validation error:", validationError);
      return false;
    }
    return true;
  };

  return (
    <Box>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <FormControl>
              <InputLabel htmlFor="name">Name</InputLabel>
              <TextField
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="categoryName">Category Name</InputLabel>
              <TextField
                id="categoryName"
                name="categoryName"
                value={formData.categoryName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
              <TextField
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="dailyRent">Daily Rent</InputLabel>
              <TextField
                id="dailyRent"
                name="dailyRent"
                value={+formData.dailyRent}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="monthlyRent">Monthly Rent</InputLabel>
              <TextField
                id="monthlyRent"
                name="monthlyRent"
                value={+formData.monthlyRent}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="productionYear">Production Year</InputLabel>
              <TextField
                id="productionYear"
                name="productionYear"
                value={formData.productionYear}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            </FormControl>
          </FormGroup>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default HomeCategories;
