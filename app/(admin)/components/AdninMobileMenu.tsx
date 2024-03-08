"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Container, Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut, useSession } from 'next-auth/react';
import { Close } from '@mui/icons-material';
import Sidebar from './Sidebar';

const style = {
    width: "100%",
    height:"100%",
    bgcolor: 'background.paper',
    gap:3,
  };
  

export default function AdminMobileMenu() {
  //const {data:session} = useSession();
  //console.log(session?.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);
//   const pathname = usePathname();
//   const avatarUrl = "https://shorturl.at/hCGPV";
//   const profileImage = session?.user?.image || avatarUrl
  

  return (
    <Box sx={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Button sx={{display:"flex",alignItems:"center",justifyContent:"flex-start",width:"100vw",marginX:5}} onClick={handleOpen}>
        <MenuIcon sx={{display:"flex",justifyContent:"center",marginY:2}}/>
      </Button>
      <Modal
        sx={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Sidebar handleOpen={handleOpen}/>
         
         
          
          
           
      </Modal>
    </Box>
  );
}