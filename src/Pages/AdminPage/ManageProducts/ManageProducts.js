import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Container, LinearProgress, Typography } from '@mui/material';
import EditProductsCartTableRaw from './EditProducts/EditProductsCartTableRaw';

const ManageProducts = () => {

    const [loding, setLoding] = useState(true)
    const [allCart, setAllCart] = useState([])
    const [del, setDel] = useState(false)
    del && setTimeout(function () { setDel(false); }, 2000);
    useEffect(() => {
        fetch('http://localhost:27017/products')
            .then(res => res.json())
            .then(data => {
                setAllCart(data)
                setLoding(false)
            })
    }, [allCart])
    return (
        <Container maxWidth={'xl'} sx={{ my:5 }}>
            <Typography variant='h4'>Order management</Typography> <br />
            <Typography textAlign={'end'} p={'0 6px 3px 0'}>Total Products: {allCart.length}</Typography>

            <TableContainer component={Paper}  style={{
                resize: 'both', minWidth: '100%', maxWidth: '100%', height: '700px', overflow: 'scroll'
            }}>
                {
                    del && <Alert variant="outlined" severity="success">
                        Successfully deleted
                    </Alert>
                }
                {loding ? <LinearProgress /> :
                    <Table sx={{ position: 'relative', minWidth: 'max-content' }} aria-label="simple table">
                        <TableHead sx={{ bgcolor: 'white', position: 'sticky', top: 0 }}>
                            <TableRow sx={{ bgcolor: 'white' }}>
                                <TableCell >Product Name</TableCell>
                                <TableCell align="center">Product ID</TableCell>
                                <TableCell align="center">Product Price</TableCell>
                                <TableCell align="center">Product Rating</TableCell>
                                <TableCell align="center">Product date</TableCell>
                                <TableCell align="center">Product state</TableCell>
                                <TableCell align="center">Product Brand</TableCell>
                                <TableCell align="center">Product Update</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody  >
                            {allCart.map((data, index) => <EditProductsCartTableRaw allCart={allCart} setAllCart={setAllCart} del={del} setDel={setDel} data={data} index={index}></EditProductsCartTableRaw>)}
                        </TableBody>

                    </Table>}
            </TableContainer>

        </Container>
    );
};

export default ManageProducts;