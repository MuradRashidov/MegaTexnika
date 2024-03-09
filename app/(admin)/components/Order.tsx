"use client"
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import ITechnique from '@/interfaces/data';
import { fetchTechniques, selectTechniques } from '@/redux/features/techniqueSlice';
import { useAppDispatch } from '@/redux/store';
import Image from 'next/image';

const StyledTableCell:any = styled(TableCell)(({ theme }:any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));






const Order = ({fullName,companyName,email,phoneNumber,orderAmount,techniqueId}:any) => {
//    const [_order,_setOrder] = useState({fullName:"",companyName:"",email:""});
//    useEffect(()=>{
//     _setOrder(order)
//    },[])
  const dispatch = useAppDispatch();

    
    //const [imgUrl,setImgUrl] = useState(searchedTechnique?.imageUrl)
    useEffect(() => {
      dispatch(fetchTechniques());
      //setImgUrl(searchedTechnique?.imageUrl)
    }, [dispatch]);
    const techniques:ITechnique[] = useSelector(selectTechniques);
    let searchedTechnique:ITechnique | undefined = techniques.find(technique=>technique._id==techniqueId);
    console.log(techniques)
    
    //console.log('KELKW',imgUrl)
    return (
      
                <StyledTableRow >
                  <StyledTableCell align="left">{searchedTechnique?.name}</StyledTableCell> 
                  <StyledTableCell align="left">
                    <Image alt={searchedTechnique?.name || ""} src={searchedTechnique?.imageUrl || ""} width={50} height={40}/>
                  </StyledTableCell> 
                  <StyledTableCell align="left">{fullName}</StyledTableCell> 
                  <StyledTableCell align="left">{companyName}</StyledTableCell>
                  <StyledTableCell align="left">{email}</StyledTableCell>
                  <StyledTableCell align="left">{phoneNumber}</StyledTableCell>
                  <StyledTableCell align="left">{orderAmount}</StyledTableCell>
                </StyledTableRow>
      );
}

export default Order