import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'next-auth/react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height:"100%",
    bgcolor: 'background.paper',
    marginTop:5,
    gap:3
  };
  

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);
  const pathname = usePathname();
  interface ILink{
    id:number,
    href:string,
    name:string
}
const links:ILink[] = [
    {
        id:1,
        href:"/",
        name:"Əsas səhifə"
    },
    {
        id:2,
        href:"/about",
        name:"Haqqımızda"
    },
    {
        id:3,
        href:"/techniques",
        name:"Texnikalar"
    },
    {
        id:4,
        href:"/leaseterms",
        name:"Icarə şərtləri"
    },
    {
        id:5,
        href:"/blog",
        name:"Blog"
    },
    {
        id:6,
        href:"/contact",
        name:"Əlaqə"
    }
    
]

  return (
    <Box sx={{backgroundColor:"white",marginTop:5}}>
      <Button onClick={handleOpen}><MenuIcon/></Button>
      <Modal
        sx={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

           
           <Stack sx={style}>
           {
             links.map(link=>{
               return <Link 
                            onClick={handleClose}
                            key={link.id}
                            className={pathname === link.href? "active":""}
                            style={{
                                    textDecoration:"none",
                                    color:"#596C72",
                                    padding:10,
                                    borderRadius:5,
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    fontSize:18
                                  }}  
                            href={link.href}>
                                {link.name}
                      </Link>
                       
                    })
                }
                <Box
                  sx={{matginTop:3,display:"flex",justifyContent:"center"}}
                >
                <Button 
                    onClick={() => signOut()}
                    sx={{width:"70%",display:"flex",justifyContent:"center"}} 
                    variant="contained" color="secondary" 
                    endIcon={<LogoutIcon/>}>
                        Çıxış
                </Button>
                </Box>
           </Stack>
           
      </Modal>
    </Box>
  );
}