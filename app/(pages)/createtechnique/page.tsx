"use client"
import { addTechnique } from '@/redux/features/techniqueSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function TechniqueForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    categoryName: '',
    imageUrl: '',
    dailyRent: '',
    monthlyRent: '',
    productionYear: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Dispatch addTechnique action with formData
    dispatch(addTechnique(formData));
    // Clear form fields after submission if needed
    setFormData({
      name: '',
      categoryName: '',
      imageUrl: '',
      dailyRent: '',
      monthlyRent: '',
      productionYear: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="categoryName">Category Name:</label>
        <input
          type="text"
          id="categoryName"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dailyRent">Daily Rent:</label>
        <input
          type="number"
          id="dailyRent"
          name="dailyRent"
          value={formData.dailyRent}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="monthlyRent">Monthly Rent:</label>
        <input
          type="number"
          id="monthlyRent"
          name="monthlyRent"
          value={formData.monthlyRent}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="productionYear">Production Year:</label>
        <input
          type="text"
          id="productionYear"
          name="productionYear"
          value={formData.productionYear}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Technique</button>
    </form>
  );
}

export default TechniqueForm;
