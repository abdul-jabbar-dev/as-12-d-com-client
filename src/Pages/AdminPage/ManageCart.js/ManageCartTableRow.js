import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from "@mui/material/Stack";
import { Box } from '@mui/system';
import { TableCell, TableRow, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';


const ManageCartTableRow = ({ allCart, setAllCart, del, setDel, data, index }) => {
    console.log(data?.orderState)
    const [stoke, setAlignment] = useState(data.user ? 'proceed' : data?.orderState ? 'paid' : 'pending');

    const handleStoke = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
    const handleDelete = (id, index) => {
        const sure = window.confirm(`Are You Sure? You Want to Delete `)
        if (sure) {
            fetch(`http://localhost:27017/cart/${id}`, {
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

            <TableCell component="th" scope="row" >{data.email}</TableCell>
            <TableCell width={'max-content'} align="center">
                {data.userName}
            </TableCell>
            <TableCell align="center">&#2547; {data.productprice}</TableCell>
            <TableCell align="center">{data.productName}</TableCell>
            <TableCell align="center">{data.brand}</TableCell>
            <TableCell sx={{ display: 'flex', justifyContent: 'center' }} align="center">
                <Box sx={{ textTransform: 'uppercase', display: 'flex', borderRadius: '30px', fontSize: '12px', padding: '10px 40px', textAlign: 'center', justifyContent: 'center', width: '60%' }} color={'white'} bgcolor={data.productStoct === 'inStock' ? '#5CB660' : '#BF360C'}>{data.productStoct}</Box>
            </TableCell>
            <TableCell align="center">{data.cartDate}</TableCell>
            <TableCell align="center">
                <Stack direction="row" spacing={4}>
                    <ToggleButtonGroup
                        value={stoke}
                        size={'small'}
                        exclusive

                        color={stoke === 'proceed' ? 'success' : 'warning'}
                        onChange={handleStoke}
                        aria-label="Product Stoke"
                    >
                        <ToggleButton value="paid" aria-label="paid">
                            <Typography fontWeight={600} variant='button'>paid</Typography>
                        </ToggleButton>
                        <ToggleButton value="pending" aria-label="pending">
                            <Typography fontWeight={600} variant='button'>pending </Typography>
                        </ToggleButton>
                        <ToggleButton value="proceed" aria-label="proceed">
                            <Typography fontWeight={600} variant='button'>proceed</Typography>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

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
                    }} >edit</DeleteIcon></TableCell>
        </TableRow>
    );
};

export default ManageCartTableRow;