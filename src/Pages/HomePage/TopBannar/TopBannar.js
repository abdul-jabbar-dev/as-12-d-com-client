import React from 'react';
import topBannarImg from '../../../media/home/topBanner.jpg'
import { Container, Grid, Typography } from '@mui/material';

const TopBannar = () => {
    return (
        <Container  >
            <Grid textAlign={'start'} container bgcolor={'#171717'} alignItems={'center'} color={'white'}>
                <Grid md={4} order={{ xs: 1, md: 0 }} item padding={3}>
                    <Typography variant='h4' color={'white'}>
                        10% Cashback on products
                    </Typography><br />
                    <Typography variant='body1' color={'#DBBD5A'}>
                        Save up to 50% on D-com products. Enjoy additional 10% Cashback (Max ₹27017) using SBI, AXIS, YES & HDFC bank cards*
                    </Typography>
                </Grid>
                <Grid order={{ xs: 0, md: 1 }} item md={8} >
                    <img width={'100%'} src={topBannarImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default TopBannar;