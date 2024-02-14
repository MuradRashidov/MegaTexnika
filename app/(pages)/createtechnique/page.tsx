"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@mui/material';
import { addTechnique } from '@/redux/features/techniqueSlice';
import { useAppDispatch } from '@/redux/store';



const AddTechniqueForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: '',
    categoryName: '',
    imageUrl: '',
    dailyRent: 0,
    monthlyRent: 0,
    productionYear: 0
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTechnique(formData));
    setFormData({
      name: '',
      categoryName: '',
      imageUrl: '',
      dailyRent: 0,
      monthlyRent: 0,
      productionYear: 0
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        required
        fullWidth
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        name="categoryName"
        label="Category Name"
        value={formData.categoryName}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        name="imageUrl"
        label="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        type="number"
        name="dailyRent"
        label="Daily Rent"
        value={formData.dailyRent}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        type="number"
        name="monthlyRent"
        label="Monthly Rent"
        value={formData.monthlyRent}
        onChange={handleChange}
      />
      <TextField
        required
        fullWidth
        type="text"
        name="productionYear"
        label="Production Year"
        value={formData.productionYear}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Technique
      </Button>
    </form>
  );
};

export default AddTechniqueForm;
