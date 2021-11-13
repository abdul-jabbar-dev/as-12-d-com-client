import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid, Typography, Container, Box, Button, Avatar, CssBaseline, CircularProgress, Alert } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import GoogleIcon from '@mui/icons-material/Google';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import UseFirebase from '../../../Utilitis/Auth/UseFirebase';

const theme = createTheme();
const Registration = () => {

    const { loginWithGoogle, user, createUser, isLoading } = UseFirebase()
    const [googleSucc, setGoogleSucc] = useState(false)
    const history = useHistory()
    user.uid && history.push('/')

    const handlerGoogle = () => {
        loginWithGoogle(setGoogleSucc)
        user.uid && setGoogleSucc(true)
    }
    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        createUser(data.get('email'), data.get('password'), data.get('displayName'))
        event.currentTarget.reset()
        event.preventDefault();
        user.uid && setGoogleSucc('Create')
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#1976D2' }}>
                        {isLoading ? <CircularProgress color="inherit" /> :
                            <CreateIcon />}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="displayName"
                                    required
                                    fullWidth
                                    id="displayName"
                                    label="Full Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>

                        <Grid alignItems={'center'} justifyContent='space-between' container >
                            <Grid item>
                                <span onClick={handlerGoogle}>
                                    <Avatar sx={{ m: 1, bgcolor: '#1976D2', cursor: 'pointer' }}>
                                        <GoogleIcon />
                                    </Avatar>
                                </span>
                            </Grid>
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                            {
                                googleSucc === true && <Alert severity="success">Login successfully </Alert>
                            }
                            {
                                googleSucc === 'Create' && <Alert severity="success">Account created successfully</Alert>
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>

        </ThemeProvider>
    );
};

export default Registration;