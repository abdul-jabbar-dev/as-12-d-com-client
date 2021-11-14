import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const ProductsPage = () => {
    const [isSpin, setIsSpin] = useState(false)
    const [products, setProducts] = useState([])
    useEffect(() => {
        setIsSpin(true)
        fetch('https://d-com-aj.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .finally(re => setIsSpin(false))
    }, [])
    return (
        <Container sx={{ my: 5 }} >
            <Typography display={'inline'}variant='h4' pl={'6%'}>
                Explore 
                D-com products
            </Typography>

            <Grid mt={2} sx={{ bgcolor: '#DBDBDB' }} justifyContent={'center'} container gap={2} >
                {isSpin ? < CircularProgress /> :
                    products.map(item => <Product key={item._id} items={item}></Product>)
                }
            </Grid>
        </Container>
    );
};

export default ProductsPage;