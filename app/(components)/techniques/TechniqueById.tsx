"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchTechniques, selectTechniques, selectTechniquesStatus, selectTechniquesError } from '@/redux/features/techniqueSlice';
import { useAppDispatch } from '@/redux/store'
import ITechnique from '@/interfaces/data';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
//import techniques from '@/data/data';
const TechniqueById = ({techniqueId}:any) => {
    const techniques:ITechnique[] = useSelector(selectTechniques);
   
    let searchedTechnique:ITechnique | undefined = techniques.find(technique=>technique._id==techniqueId);
    const [imgUrl,setImgUrl] = useState(searchedTechnique?.imageUrl)
    console.log("asdf",searchedTechnique);
    

  return (
    <Box>
        <Container>
            <Typography>Ana səhifə | Texnikalar | {searchedTechnique?.name}</Typography>
            <Box sx={{display:"flex",marginY:3,flexDirection:{xs:"column",md:"row"}}}>
                <Stack sx={{flex:1,flexDirection:{xs:"row",md:"column"}}}>
                    {techniques.map((technique:ITechnique,index:number)=>{
                        if(index<5){
                             return <Box className={technique.imageUrl == imgUrl?"active":""} key={technique._id}>
                                            <Image 
                                            onClick={()=>{setImgUrl(technique.imageUrl)}} 
                                            src={technique.imageUrl || ""} 
                                            alt={technique.name || ""} 
                                            width={72} 
                                            height={120}/>
                                    </Box>
                        }
                        else{
                            return null
                        }
                    })}
                </Stack>
                <Box sx={{
                            flex:3,
                            display:"flex",
                            alignItems:"center",
                            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                            borderRadius: 4,
                            padding: 2
            
                        }}>
                    <Image src={imgUrl || ""} alt={searchedTechnique?.name || ""} width={400} height={500} layout="responsive"/>
                </Box>
                <Box sx={{
                    flex:4,
                    padding:3,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    gap:6,
                    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
                    borderRadius: 4,
                    }}>
                    <Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Typography color="secondary" sx={{fontSize:20,fontWeight:700}}>{searchedTechnique?.name}</Typography>
                        <Typography sx={{color:"#B0ADAD",fontSize:14}}>2017</Typography>
                    </Box>
                    <Box>
                    <Typography sx={{color:"#686868",fontSize:14}}>{searchedTechnique?.categoryName}</Typography>
                    </Box>
                    </Box>
                    <Box sx={{color:"#686868",fontSize:14}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an unknown printer
                        standard dummy text ever since the 1500s, when an unknown printer
                    </Box>
                    <Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Typography sx={{color:"#596C72",fontSize:15}}>Günlük icarə:</Typography>
                        <Typography sx={{color:"#FFC01F",fontSize:20,fontWeight:600}}>{searchedTechnique?.dailyRent} AZN</Typography>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                        <Typography sx={{color:"#596C72",fontSize:15}}>Aylıq icarə:</Typography>
                        <Typography sx={{color:"#FFC01F",fontSize:20,fontWeight:600}}>{searchedTechnique?.monthlyRent} AZN</Typography>
                    </Box>
                    </Box>
                    <Box>
                        <Button sx={{width:"100%",color:"#353535",fontWeight:700}} variant="contained" color="primary">Günlük icarə et</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    </Box>
  )
}

export default TechniqueById