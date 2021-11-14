import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views/lib/SwipeableViews';
import { Avatar, Container, Rating, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HomeReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:27017/userreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = reviews.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Container sx={{ my: 15 }} maxWidth={'md'}>
            <Typography color={'GrayText'} variant='h4' mb={2} textAlign={'center'}>Users Reviews </Typography>

            <Box sx={{ width: '100%', flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {reviews?.map((step, index) => (
                        <div key={step._id}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        height: '100%',
                                        display: 'block',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}>

                                    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '60%', height: '300%', padding: '10px', margin: '0 auto' }} >
                                        <Typography fontSize={'12px'} alignSelf={'end'} mb={1}>{new Date(step.reviewDate).toDateString()}</Typography>
                                        <Avatar
                                            sx={{ bgcolor: 'ActiveCaption', width: '100px', height: '100px' }}
                                            alt={step.userName}
                                            src={step.userImg}
                                        />
                                        {/* <img style={{ borderRadius: '100%' }} width={'100px'} height={'100px'} src={step.userImg} alt={`Post By ${(step.userName).toUpperCase()}`} /> */}
                                        <Typography mt={1}>{(step.userName).toUpperCase()}</Typography>
                                        <Typography fontWeight={400} variant='subtitle2' mt={1}>{(step.userEmail)}</Typography>
                                        <Typography my={2} color={'#756E76'}>&#10077; {step.reviewDiscription} &#10078;</Typography>
                                        <Rating onChange={(event, newValue) => {
                                        }} name="half-rating" defaultValue={step.experienceRating} precision={0.5} />
                                        <Typography variant='subtitle2' color={'#47576E'}>{step.reviewsuggestions}</Typography>
                                    </div>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    sx={{ justifyContent: 'center' }}
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                />
            </Box>
        </Container>
    );
};

export default HomeReviews;