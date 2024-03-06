"use client"
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const SideMenu:React.FC = () => {
    const pathname = usePathname();

    interface ILink{
        id:number,
        href:string,
        name:string
    }
    const links:ILink[] = [
        {
            id:1,
            href:"/profile",
            name:"Hesabım"
        },
        {
            id:2,
            href:"/createtechnique",
            name:"Məhsul əlavə et"
        },
        {
            id:3,
            href:"/orders",
            name:"Sifarişlər"
        },
        {
            id:4,
            href:"/admintechniques",
            name:"Texnikalar"
        }
        
    ]
  return (
    <Stack sx={{gap:1,margin:1}}>
        {links.map((link,index)=>{
            return <Link
                 key={link.id} 
                 href={link.href}
                 className={pathname === link.href? "active":""}
                 style={{
                           textDecoration:"none",
                           color:"white",
                           padding:10,
                           borderRadius:5,
                           display:"flex",
                           justifyContent:"flex-start",
                           alignItems:"center",
                           fontSize:18
                                  }}  
                  >
                    {link.name}
                </Link>
        })}
    </Stack>
  )
}

export default SideMenu