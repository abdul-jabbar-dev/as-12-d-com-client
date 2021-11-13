import React from 'react';
import { Button, CardMedia, Grid,Box,Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = (props) => {
    console.log(props);
    const { productName, productprice, productRating, productStoct, _id, productImg } = props.items

    return (
        <Grid item md={3.5} px={2} py={1} sm={5} xs={11}>
            <Box >
                <Link to={'/'}>
                    <CardMedia
                        sx={{
                            borderRadius: 2, ':hover': {
                                transition: '.2s all',
                                transform: 'scale(1.1)'
                            },
                        }}
                        component="img"
                        height="160"
                        image={productImg}
                        alt="green iguana"
                    />
                </Link>
            </Box><br />
            <Typography variant='h6' sx={{ textTransform: 'uppercase' }} fontWeight={300} color={'#FF6A00'} textAlign={'center'}>
                {(productName).slice(0, 25)}
            </Typography>
            <Typography variant='h5' sx={{ textTransform: 'uppercase' }} fontWeight={300} color={'#FF6A00'} textAlign={'center'}>
                &#2547;  {productprice}
            </Typography>

            <Box>
                <Typography variant='body1' mt={2} sx={{ textTransform: 'uppercase' }} fontWeight={300}>
                    Product Rating <small>{productRating}</small>
                </Typography>
                <Rating
                    initialRating={productRating}
                    readonly
                    emptySymbol={<StarBorderIcon color='warning'></StarBorderIcon>}
                    fullSymbol={<StarIcon color={'warning'}></StarIcon>}
                />
            </Box>
            <Box mt={2}>
                <Typography paddingX={'5px'} py={'3px'} borderRadius={3} color={'white'} bgcolor={productStoct === 'inStock' ? 'green' : 'red'} variant='button'>{productStoct}</Typography>
            </Box>

            <Link style={{ textDecoration: 'none', display: 'grid', margin: '10px 0 0  0' }} to={`/products/${_id}`}>
                <Button sx={{ cursor: 'pointer' }} variant='outlined'>
                    View
                </Button>
            </Link>
        </Grid>
    );
};

export default Product;