import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct/HomeProduct';

const HomeProducts = () => {
    const [isSpin, setIsSpin] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setIsSpin(true)
        fetch('http://localhost:27017/products?items=6')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .finally(re => setIsSpin(false))

    }, [])
    return (
        <Container sx={{ my: 15 }} >
            <Typography variant='h4' color={'GrayText'} mb={2} textAlign={'center'}>Letest Post</Typography>
            <Grid sx={{ bgcolor: '#DBDBDB' }} justifyContent={'center'} container gap={2} >

                {isSpin ? < CircularProgress /> :
                    products.map(item => <HomeProduct key={item._id} item={item}></HomeProduct>)
                }
            </Grid>
        </Container>
    );
};

export default HomeProducts;