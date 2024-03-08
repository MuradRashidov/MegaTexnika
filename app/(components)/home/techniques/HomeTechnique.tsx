"use client"
import ITechnique from '@/interfaces/data'
import { Category } from '@mui/icons-material'
import { Box, Button, Divider, Link as MuiLink, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import Link  from "next/link"
import { useSession } from 'next-auth/react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from 'react-redux'
import { deleteTechnique, selectTechniques } from '@/redux/features/techniqueSlice'
import EditTechniqueModal from '@/app/(admin)/components/EditTechniqueModal'
import { useAppDispatch } from '@/redux/store'

const HomeTechnique = ({_id,name,categoryName,imageUrl,dailyRent,monthlyRent,productionYear}:ITechnique) => {
    const dispatch = useAppDispatch();
    const session:any = useSession();
    //console.log(session?.data?.user?.role)
    const role = session?.data?.user?.role
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const techniques: ITechnique[] = useSelector(selectTechniques);
    let searchedTechnique:ITechnique | undefined = techniques.find(technique=>technique._id==_id);

  return (
    <Box sx={{
        paddingTop:2,
        boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.3)" ,
        fontWeight:600,
        transition:"all 0.5s",
        "&:hover": { 
        transform: "scale(1.02)" 
       }
    }}>
      <EditTechniqueModal  searchedTechnique={searchedTechnique} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose}/>


            <Link href={`/techniques/${_id}`}>
  
    <Image alt={name} src={imageUrl} width={220} height={150} layout='responsive' />
 
</Link>
<Divider/>
       <Box sx={{
            display:"flex",
            flexDirection:"column",
            padding:4,
            gap:3
       }}>
            <Box sx={{
            display:"flex",
            flexDirection:"column",

       }}>
                <Typography sx={{color:"#596C72",fontSize:18,fontWeight:600}}>Məhsulun adı</Typography>
                <Typography sx={{color:"#686868",fontSize:14,fontWeight:400}}>{name}</Typography> 
                <Typography sx={{color:"#B0ADAD",fontSize:14,fontWeight:400,marginTop:1}}>{productionYear}</Typography>   
            </Box>
            <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-end",
            color:"#FFC01F",
            fontSize:18,
            fontWeight:600
       }}>
                <Typography>{monthlyRent} AZN/ay</Typography>
                <Typography>{dailyRent} AZN/gün</Typography>
            </Box>
            <Box sx={{
                display:"flex",
                justifyContent:"center"
            }}>
                {role ==="user" && (
                    <Link style={{color:"#353535",textDecoration:"none",display:"flex",justifyContent:"center"}} href={`techniques/${_id}`}>
                    <Button color="primary" variant="contained">
                       Icarə et
                    </Button>
                </Link>
                )}
                {role ==="admin" && (
                    <Box sx={{display:"flex", gap:2}}>
                    <Button onClick={handleOpen} endIcon={<EditOutlinedIcon/>} color="secondary" variant="contained">
                       Dəyişdir
                    </Button>
                    <Button
                     endIcon={<DeleteOutlineOutlinedIcon/>
                     } 
                     sx={{backgroundColor:"orangered"}} 
                     variant="contained"
                     onClick={(e:any)=>{
                           e.preventDefault();
                           console.log(_id);
                           dispatch(deleteTechnique(_id||""));
                     }}
                     >
                       Sil
                    </Button>
                    </Box>
                )}
            </Box>
       </Box>
    </Box>
  )
}

export default HomeTechnique