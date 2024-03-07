import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '@/redux/store';
import { addTechnique, updateTechnique } from '@/redux/features/techniqueSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: "0%",
  left: "5%",
  right:"5%",
  //transform: 'translate(-50%, -50%)',
  width: {xs:"99%",md:"90%"},
  height:"100vh",
  bgcolor: 'background.paper',
};
const modalStyle = {
    marginY:12,
    position: 'absolute' as 'absolute',
    top: "0%",
    left: "0%",
    //transform: 'translate(-50%, -50%)',
    width: "100%",
    height:"100vh",
    bgcolor: 'transparent',
  };
const EditTechniqueModal = ({open,setOpen,handleOpen,handleClose,searchedTechnique}:any) => {
    const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    name: searchedTechnique.name,
    categoryName: searchedTechnique.categoryName,
    imageUrl: searchedTechnique.imageUrl,
    dailyRent: searchedTechnique.dailyRent,
    monthlyRent: searchedTechnique.monthlyRent,
    productionYear: searchedTechnique.productionYear
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
    try {
        dispatch(updateTechnique({_id:searchedTechnique._id,...formData}));

    } catch (error:any) {
        console.log(error.message)
    }
    setFormData({
      name: '',
      categoryName: '',
      imageUrl: '',
      dailyRent: 0,
      monthlyRent: 0,
      productionYear: 0
    });
    handleClose();
  };
  return (
    <Container>
      <Modal
        sx={modalStyle}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{height:"100%",paddingX:10,paddingY:5,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        
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
      </Modal>
    </Container>
  )
}

export default EditTechniqueModal