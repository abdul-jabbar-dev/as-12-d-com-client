import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Container } from '@mui/material';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51JwXO7Ez5fvmGZeQOGbuXEZTjvlXRI4cZJ3jS0h6kgoMcAG1YrI2GVTeMBiwpgwbxX9ebr4YPJwrUJJpeunIRT1K00xQiQSMYm');
const Pay = () => {
    
    const [data, setData] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://d-com-aj.herokuapp.com/cart/${id}`)
            .then(res => res.json())
            .then(item => setData(item))
    }, [id])


    return (

        <React.Fragment>
            <Container sx={{ mt: 15, mb: 38 }} maxWidth={'md'}>
                <h2>Hi : {data.userName}</h2>
                <h3>Product: {data.productName}</h3>
                <h4>Price: {data.productprice}</h4>
                <h6 style={{color:'gray'}}>dummy card:     4242424242424242    visa</h6>

               {
                    data.productprice && <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>
               }
            </Container>
        </React.Fragment>
    );
};

export default Pay;