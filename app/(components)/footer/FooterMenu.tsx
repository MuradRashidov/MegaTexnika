import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const FooterMenu = () => {
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
        }]
  return (
    <Box sx={{maxWidth:200}}>
        {
                    links.map(link=>{

                        return <Box sx={{display:"flex",justifyContent:{xs:"center",md:"flex-start"}
                    }}  key={link.id}>
                            <Link  style={{
                            width:"min-content",
                            textDecoration:"none",
                            color:"#353535",
                            fontWeight:400,
                            display:"flex",
                            flexDirection:"column",
                            fontSize:16
                            
                            }} 
                    
                    href={link.href}>{link.name}</Link></Box> 
                    })
                        
                }
    </Box>
  )
}

export default FooterMenu