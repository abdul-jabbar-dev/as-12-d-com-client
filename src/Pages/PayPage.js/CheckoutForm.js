import React, { useEffect, useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Button, CircularProgress } from '@mui/material';
const CheckoutForm = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [process, setProcess] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const product = data

    useEffect(() => {
        fetch('https://d-com-aj.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: Math.round(product.productprice) })
        }).then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))

    }, [product.productprice])
    const updateProduct = (payment) => {
        product['paymentIntent'] = payment
        fetch(`https://d-com-aj.herokuapp.com/cart/${product._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            setSuccess('')
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcess(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
            setSuccess('')
            error && setProcess(false)
        } else {
            setError('')
            setSuccess('payment success')
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'product.userName',
                        email: product.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
        } else {
            setError('')

            setProcess(false)
            updateProduct(paymentIntent)
        }
    };

    return (
        <form style={{ padding: '60px 0'}} onSubmit={handleSubmit}>
            <CardElement 
                options={{
                    style: {
                     
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                         
                            '::placeholder': {
                                color: '#707070',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {process ? <CircularProgress></CircularProgress> : <Button variant='outlined' sx={{ my: 10 }} type="submit" disabled={!stripe || success}>
                Pay ${product.productprice}
            </Button>}
            {
                error && <p style={{ color: 'red' }} >{error}</p>
            }
            {
                success && <p style={{ color: 'green' }} >{success}</p>
            }

        </form>
    );
};

export default CheckoutForm;