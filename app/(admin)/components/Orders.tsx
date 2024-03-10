import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Order from './Order';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }:any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#FFC01F",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    display:"flex",
    justifyContent:"flex-start"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        axios.get("/api/orders")
            .then(({ data }) => setOrders(data))
            .catch(error => console.error('Error fetching orders:', error));
    };

    useEffect(() => {
        fetchOrders();
    }, []); // Boş bağımlılık dizisi, yalnızca bileşen ilk render edildiğinde çalışmasını sağlar

    return (
        <Container>
            <TableContainer sx={{ maxWidth: { xs: 500, md: 900, lg: 1100 } }} component={Paper}>
                <Table sx={{ minWidth: 500, maxWidth: { xs: 500, md: 900, lg: 1100 } }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left" >Məhsul adı</StyledTableCell>
                            <StyledTableCell align="left" >Məhsul rəsmi</StyledTableCell>
                            <StyledTableCell align="left" >Sifarişçi adı</StyledTableCell>
                            <StyledTableCell align="left">Şirkət adı</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Telefon</StyledTableCell>
                            <StyledTableCell align="left">Sifariş məbləği</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ minWidth: 500, maxWidth: { xs: 500, md: 900, lg: 1100 } }}>
                        {orders.map((order: any, index: number) => {
                            return <Order key={index} {...order} />
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Orders;
