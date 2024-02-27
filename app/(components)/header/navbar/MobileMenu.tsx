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

const style = {
    width: "100%",
    height:"100%",
    bgcolor: 'background.paper',
    gap:3,
  };
  

export default function MobileMenu() {
  const {data:session} = useSession();
  //console.log(session?.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(!open);
  const pathname = usePathname();
  const avatarUrl = "https://shorturl.at/hCGPV";
  const profileImage = session?.user?.image || avatarUrl
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
    <Box sx={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Button sx={{display:"flex",alignItems:"center",justifyContent:"flex-end"}} onClick={handleOpen}>
        <MenuIcon sx={{display:"flex",justifyContent:"flex-end"}}/>
      </Button>
      <Modal
        sx={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          
         
           
          <Stack sx={style}>
          <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:3,padding:6, gap:4}}>
            <Box>
            <img style={{width:50,height:50,zIndex:3,borderRadius:"50%",marginBottom:1}} src={profileImage} alt="profileImage"/>
            <Typography sx={{fontWeight:500}} color="primary">{session?.user?.name}</Typography>
            </Box>
            <Button sx={{paddingY:1}} color="secondary" variant="outlined" onClick={()=>{handleClose()}}>
            <Close color="secondary"/>
            </Button>
            
          </Container>
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
                    sx={{width:"75%",display:"flex",justifyContent:"center"}} 
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