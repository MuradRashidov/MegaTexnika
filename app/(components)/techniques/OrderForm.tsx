import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:"99%",md:"50%"},
  bgcolor: 'background.paper',
  p: 4,
};
const modalStyle = {
    marginY:12,
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height:{xs:"100%"},
    bgcolor: 'transparent',
    p: 4,
  };

export default function OrderForm({open,setOpen,handleOpen,handleClose,searchedTechnique}:any) {
  const [formData, setFormData] = useState({
    techniqueId: '',
    userId: '',
    phoneNumber: '',
    email: '',
    fullName: '',
    companyName: '',
    orderAmount: 0,
});
const handleChange = (e:any) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
    async function handleSubmit(e:any) {
      e.preventDefault();
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({...searchedTechnique, ...formData })
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data?.session?.url); 
                window.location.href =data?.session?.url;
            } else {
                throw new Error('Payment failed'); 
            }
        } catch (error:any) {
            console.error('Error:', error.message); 
        }
    }

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
         <form onSubmit={handleSubmit}>
            <Grid sx={{gap:3}} container>
              <Grid item xs={12}>
                        <TextField
                        sx={{width:"100%"}}
                          label="(+994) Əlaqə nömrəsi"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                      />
              </Grid>
              <Grid item xs={12}>
                        <TextField
                        sx={{width:"100%"}}
                          label="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                      />
                </Grid>
                          <Grid item xs={12}>
                          <TextField
                          sx={{width:"100%"}}
                          label="Ad, Soyad"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                      />
                </Grid>
                <Grid item xs={12}>
                          <TextField
                          sx={{width:"100%"}}
                          label="Şirkət adı"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                      />
                </Grid>
            </Grid>
            
           
            
            
           
            <Button onClick={handleSubmit} sx={{width:"100%",color:"#353535",fontWeight:700, marginY:3}} variant="contained" color="primary">
                            Günlük icarə et
          </Button> 
        </form> 
        </Box>
      </Modal>
    </Container>
  );
}