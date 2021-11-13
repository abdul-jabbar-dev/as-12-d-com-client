import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/system';
import { TableCell, TableRow } from '@mui/material';
import ProductsConfirmationDialog from './ProductsConfirmationDialog';

const ManageCartTableRow = ({ allCart, setAllCart, del, setDel, data, index }) => {
    const handleDelete = (id, index) => {
        const sure = window.confirm(`Are You Sure? You Want to Delete `)
        if (sure) {
            fetch(`http://localhost:27017/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setDel(true)
                    if (data === allCart[index]._id) {
                        const remaining = allCart.filter(find => find[index]._id !== allCart[index]._id)
                        setAllCart(remaining)
                        setDel(true)
                    }
                })
        }
    }
    return (
        <TableRow
            key={data._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" >{data.productName}</TableCell>
            <TableCell width={'max-content'} align="center">
                {data._id}
            </TableCell>
            <TableCell align="center">&#2547; {data.productprice}</TableCell>
            <TableCell align="center">{data.productRating}</TableCell>
            <TableCell align="center">{(new Date(data.postDate)).toDateString('en-BD')}</TableCell>
            <TableCell sx={{ display: 'flex', justifyContent: 'center' }} align="center">
                <Box sx={{ textTransform: 'uppercase', display: 'flex', borderRadius: '30px', fontSize: '12px', padding: '10px 40px', textAlign: 'center', justifyContent: 'center', width: '60%' }} color={'white'} bgcolor={data.productStoct === 'inStock' ? '#5CB660' : '#BF360C'}>{data.productStoct}</Box>
            </TableCell>
            <TableCell align="center">{data.brand}</TableCell>
            <TableCell align="center">
                <ProductsConfirmationDialog allCart={allCart} setAllCart={setAllCart} del={del} setDel={setDel} data={data} index={index}></ProductsConfirmationDialog>
            </TableCell>
            <TableCell align="center">
                <DeleteIcon onClick={() => handleDelete(data._id, index)}
                    sx={{
                        cursor: 'pointer', ":hover":
                        {
                            transform: 'scale(1.2)'
                            , transition: '.1s all'
                        }, ":active": {
                            transform: 'scale(1)'
                        }
                    }} >Delete</DeleteIcon>
            </TableCell>
        </TableRow>
    );
};

export default ManageCartTableRow;