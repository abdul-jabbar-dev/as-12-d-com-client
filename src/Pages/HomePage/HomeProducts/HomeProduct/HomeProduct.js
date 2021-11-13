import { Button, CardMedia, Grid, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/system';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const HomeProduct = ({ item }) => {
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
                        image={item.productImg}
                        alt="green iguana"
                    />
                </Link>
            </Box><br />
            <Typography variant='h6' sx={{ textTransform: 'uppercase' }} fontWeight={300} color={'#FF6A00'} textAlign={'center'}>
                {(item.productName).slice(0,25)}
            </Typography>
            <Typography variant='h5' sx={{ textTransform: 'uppercase' }} fontWeight={300} color={'#FF6A00'} textAlign={'center'}>
               &#2547;  {item.productprice}
            </Typography>
            <Box>
                {item.country}
            </Box>
            <Box>
                <Typography variant='body1'mt={2} sx={{ textTransform: 'uppercase' }} fontWeight={300}>
                    Product Rating <small>{item.productRating}</small>
                </Typography>
                <Rating
                    initialRating={item.productRating}
                    readonly
                    emptySymbol={<StarBorderIcon color='warning'></StarBorderIcon>}
                    fullSymbol={<StarIcon color={'warning'}></StarIcon>}
                />
            </Box>
           
            <Link  style={{textDecoration:'none', display:'grid',margin:'10px 0 0  0'}} to={`/products/${item._id}`}>
                <Button  sx={{ cursor: 'pointer' }} variant='outlined'>
                    View
                </Button>
            </Link>
        </Grid>
    );
};

export default HomeProduct;