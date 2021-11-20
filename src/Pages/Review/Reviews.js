
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Container, Grid } from '@mui/material';
import UseFirebase from '../../Utilitis/Auth/UseFirebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Reviews = () => {
    const { user } = UseFirebase()
    const [poke, setPoke] = useState(true)
    const [cart, setCart] = useState([])
    const [isProductDone, setIsProductDone] = useState(false)
    const [loding, setLoding] = useState(false)
    const history = useHistory()
    let sum = 0

    const deletItem = (id, index, is) => {
        let sure;
        is ? sure = window.confirm(`Are You Sure? You Want to Delete `) : sure = true
        if (sure) {
            setLoding(true)
            fetch(`http://localhost:27017/cart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data === cart[index]._id) {
                        const remaining = cart.filter(find => find[index]._id !== cart[index]._id)
                        setPoke(!poke)
                        setCart(remaining)
                    }
                    else {
                        setPoke(!poke)
                        // setLoding(false)
                    }
                })
        }
    }
    isProductDone && setTimeout(() => setIsProductDone(false), 2000)
    loding && setTimeout(() => setLoding(false), 2000)
    const handleShip = (id, index, is, product) => {

        history.push(`/pay/${id}`)




        // fetch(`http://localhost:27017/cart/${id}`, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ ...product })
        // })
        //     .then(res => res.json())
        //     .then(rece => {
        //         setIsProductDone(true)
        //         setPoke(!poke)
        //     }).finally(e => e
        //     )
        // deletItem(id, index, is)
    }
    useEffect(() => {

        fetch(`http://localhost:27017/cart?email=${user.email}`)
            .then(res => res.json())
            .then(rece => {

                let i = rece.filter((item) => !item.user)
                setCart(i)
            }).finally(e => e
            )
    }, [poke, user])
    console.log(cart);
    return (
        <React.Fragment>

            <Container sx={{ my: 5 }}>
                <Typography variant='h4' textAlign={'center'}>Processed order</Typography>
                <Grid container xs={12} >
                    <Grid item width={'100%'} >
                        <Box>
                            <Typography variant="h6" gutterBottom>
                                Order summary
                            </Typography>
                            {cart.length === 0 && <Typography variant='h5' color={'GrayText'} textAlign={'center'} >You need some add products</Typography>}
                            <List disablePadding>
                                {cart.map((product, index) => {
                                    sum += product.productprice
                                    return (
                                        <ListItem key={product._id} sx={{ py: 1, px: 3 }}>
                                            <ListItemText sx={{ ml: 1 }} primary={product.productName} secondary={product.desc} />
                                            <Typography variant="body2">&#2547; {parseFloat(product.productprice)}</Typography>

                                            <Button sx={{ mx: 3 }} size="small" color={'error'} variant='outlined'
                                                onClick={() => deletItem(product._id, index, true)}>Delete</Button>

                                          {
                                                product.orderState ? <Button sx={{ mx: 3 }} size="small" color={'success'} disabled variant='outlined'
                                                    >Paid</Button> : <Button sx={{ mx: 3 }} size="small" color={'success'} variant='outlined'
                                                    onClick={() => handleShip(product._id, index, false, product)}>shiped</Button>
                                          }
                                        </ListItem>
                                    )
                                })}
                                <ListItem sx={{ py: 3, px: 0 }}>
                                    <ListItemText  >
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            Total
                                        </Typography>

                                    </ListItemText>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                        &#2547;{sum}
                                    </Typography>

                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                    <br /><br />
                    {isProductDone === true ? <Alert severity="success">Order Confirmed....</Alert> : ''}
                     {loding === true ? <Alert severity="success">Order Delete successfully</Alert> : ''}

                </Grid >
            </Container>
        </React.Fragment>
    );
};

export default Reviews;
