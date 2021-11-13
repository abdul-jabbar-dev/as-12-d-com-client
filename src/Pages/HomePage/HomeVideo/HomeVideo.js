import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const HomeVideo = () => {
    return (
        <Container sx={{ mb: 15 }} >
            <Typography variant='h4' mb={2} color={'GrayText'} textAlign={'center'}>Our  Strategy </Typography>

            <Grid container justifyContent={'space-between'} spacing={{ xs: 1, sm: 2 }}  >
                <Grid item md={4} xs={6} >

                    <iframe style={{ borderRadius: '5px' }} width={'100%'} height="200" src="https://www.youtube.com/embed/OEv5xThx6oA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </Grid>
                <Grid item md={4} xs={6}>

                    <iframe style={{ borderRadius: '5px' }} width={'100%'} height={"200"} src="https://www.youtube.com/embed/T0jAzqU2Zzc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </Grid>
                <Grid item display={{ md: 'none' }} md={4} xs={6}>

                    <iframe style={{ borderRadius: '5px' }} width={'100%'} height="200" src="https://www.youtube.com/embed/T0jAzqU2Zzc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </Grid>
                <Grid item md={4} xs={6}>

                    <iframe style={{ borderRadius: '5px' }} width={'100%'} height="200" src="https://www.youtube.com/embed/v4REzw4hugc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomeVideo;