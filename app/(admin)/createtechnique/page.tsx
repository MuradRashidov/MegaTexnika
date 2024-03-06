"use client"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles, Grid, Box, Typography } from '@mui/material';
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
    <Box>
      <Box sx={{marginX:10,marginTop:15}}>
          <Typography sx={{color:"#596C72",fontWeight:600}}  variant="h4">Yeni məhsul əlavə et</Typography>
        </Box>
    
    <Box sx={{height:"100%",paddingX:10,paddingY:5,display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"center"}}>
        
        <form onSubmit={handleSubmit}>
          <Grid spacing={4} justifyContent="center" alignItems="center" container>
            <Grid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            name="name"
            label="Texnika adı"
            value={formData.name}
            onChange={handleChange}
          />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            name="categoryName"
            label="Kateqoriya"
            value={formData.categoryName}
            onChange={handleChange}
          />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            name="imageUrl"
            label="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />
            </Grid>
            <Grid item xs={12} md={6}>
            <TextField
            required
            fullWidth
            type="number"
            name="Günlük icarə haqqı"
            label="Daily Rent"
            value={formData.dailyRent}
            onChange={handleChange}
          />
            </Grid>
            <Grid item xs={12} md={6}><TextField
            required
            fullWidth
            type="number"
            name="monthlyRent"
            label="Aylıq icarə haqqı"
            value={formData.monthlyRent}
            onChange={handleChange}
          /></Grid>
          <Grid item xs={12} md={6}>
          <TextField
            required
            fullWidth
            type="text"
            name="productionYear"
            label="İstehsal tarixi"
            value={formData.productionYear}
            onChange={handleChange}
          />
          </Grid>
          <Grid item xs={12}>
          <Button 
                sx={{
                    fontWeight:700,
                    color: "#353535",
                    "&:hover": {
                        backgroundColor: "#596C72",
                        color: "white"
                    },
                    transition:"all 0.5s"
                    
                }} 
                fullWidth 
                type="submit" 
                variant="contained" 
                color="primary"
            >
                Əlavə et
</Button>
          </Grid>
          </Grid>
        </form>
    </Box>
    </Box>
  );
};

export default AddTechniqueForm;
