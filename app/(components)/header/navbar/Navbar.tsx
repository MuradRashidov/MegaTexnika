"use client"
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { inherits } from 'util'
import LoginButton from './LoginButton'
import MobileMenu from './MobileMenu'

const Navbar = () => {
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
    const pathname = usePathname();
    //console.log(pathname);
    
  return (
    <Box sx={{my:2}}>
        <Container sx={{
            display:"Flex",
            justifyContent:"space-between",
            alignItems:"center"

            
        }}>
            <Box>
               
                <Image  alt="logo" width={150} height={40} src="/images/logo.png"/>
            </Box>
            <Box sx={{display:{
                width:"60%",
                xs:"none",
                md:"flex",
                justifyContent:"space-between"
            }}}>
                {
                    links.map(link=>{
                        return <Link className={pathname === link.href? "active":""} style={{
                            textDecoration:"none",
                            color:"black",
                            padding:10,
                            borderRadius:5,
                            

                    }} 
                    key={link.id} 
                    href={link.href}>{link.name}</Link>
                    })
                }
            </Box>
            <Box sx={{display:{
                xs:"none",
                md:"flex"
            }}}>
                <LoginButton/>
            </Box>
            <Box sx={{display:{xs:"block",md:"none"}}}>
                <MobileMenu/>
            </Box>
        </Container>
    </Box>
  )
}

export default Navbar
