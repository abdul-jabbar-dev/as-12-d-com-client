import { Box, Button, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseFirebase from '../../Utilitis/Auth/UseFirebase';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const PreviewPage = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const { user } = UseFirebase()
    const { productName, productprice, productRating, productStoct, postDate, spacification, discription, productColor, _id, productImg } = data
    let date = Date(postDate)
    // get single data 
    useEffect(() => {
        fetch(`http://localhost:27017/products/${id}`)
            .then(res => res.json())
            .then(item => setData(item))
    }, [id])
    const postToCart = (id) => {
        delete data?._id
        data['email'] = user.email
        data['userName'] = user.displayName
        data['cartDate'] = new Date().toDateString()
        fetch(`http://localhost:27017/cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data })
        })
            .then(res => res.json())
            .then(item => item)
    }
    return (
        <Container >
            <Grid container>
                <Grid item sm={5}>
                    <img width={'100%'} src={productImg} alt='df' />
                </Grid>
                <Grid item sm={7}>
                    <Typography variant='h4' mt={3} sx={{ textTransform: 'uppercase' }} fontWeight={300} color={'#FF6A00'} textAlign={'center'}>
                        {productName}
                    </Typography>
                    <Box mt={2}>
                        <Typography display={'inline'} variant='subtitle1' fontWeight={400}  >
                            Product ID : &nbsp;
                        </Typography >
                        <Typography display={'inline'} variant='subtitle1' fontWeight={300} sx={{ textTransform: 'uppercase' }}  >
                            {_id}
                        </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} >
                        <Typography display={'inline'} variant='subtitle1' fontWeight={400}  >
                            Product Post Date : &nbsp;
                        </Typography >
                        <Typography display={'inline'} variant='subtitle1' fontWeight={300} sx={{ textTransform: 'uppercase' }}  >
                            {(new Date(date)).toLocaleDateString('en-BD')}
                        </Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography paddingX={'5px'} py={'3px'} borderRadius={3} color={'white'} bgcolor={productStoct === 'inStock' ? 'green' : 'red'} variant='button'>{productStoct}</Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography display={'inline'} variant='h6' fontWeight={400}  >
                            Price : &nbsp;
                        </Typography >
                        <Typography display={'inline'} variant='h5' sx={{ textTransform: 'uppercase' }}  >
                            &#2547;  {productprice}
                        </Typography>

                    </Box>
                    <Box display={'flex'} alignItems={'center'} mt={1}>
                        <Typography display={'inline'} variant='h6' fontWeight={400}  >
                            Product Rating : &nbsp;
                        </Typography>
                        <Rating
                            readOnly
                            value={parseInt(productRating)}
                            emptySymbol={<StarBorderIcon color='warning'></StarBorderIcon>}
                            fullSymbol={<StarIcon color={'warning'}></StarIcon>}
                        />
                    </Box>
                  
                  
                    <Box mt={1} display={'flex'}>
                        <Typography display={'inline'} variant='h6' fontWeight={400}  >
                            Available Color : &nbsp;
                        </Typography >
                        {productColor === 'Default' ? 'No color' : <Box width={'30px'} height={'30px'} bgcolor={productColor} borderRadius={30}></Box>}
                    </Box>
                    <Box mt={1}>
                        <Typography display={'inline'} variant='h6' fontWeight={400}  >
                            Spacification : &nbsp;
                        </Typography >
                        <Typography display={'inline'} variant='body1'   >
                            {spacification}
                        </Typography>
                    </Box>
                 
                    <Box mb={3} mt={1}>
                        <Typography display={'inline'} variant='h6' fontWeight={400}  >
                            Discription : &nbsp;
                        </Typography >
                        <Typography display={'inline'} variant='body1'   >
                            {discription}
                        </Typography>
                    </Box>

                    <Button onClick={() => postToCart(data._id)} variant='outlined'>Add to Cart</Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default PreviewPage;