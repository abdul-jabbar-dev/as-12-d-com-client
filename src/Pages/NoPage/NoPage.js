import { Container, Typography } from '@mui/material';
import React from 'react';

const NoPage = () => {
    return (
        <Container sx={{my:36}}>
                <Typography variant='h4' textAlign={'center'}>404</Typography>
                <Typography variant='h4' textAlign={'center'}>No Page Found</Typography>
        </Container>
    );
};

export default NoPage;