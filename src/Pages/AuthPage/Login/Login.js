import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useHistory } from 'react-router-dom';
import UseFirebase from '../../../Utilitis/Auth/UseFirebase';
import { Alert, CircularProgress } from '@mui/material';
const theme = createTheme();

const Login = () => {
    const [logSucc, setLogSucc] = useState(false)
    const { loginWithGoogle, setUser, user, loginUser, setIsLoading, isLoading } = UseFirebase()
    const history = useHistory()
    user.uid && history.push('/')
    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        loginUser(data.get('email'), data.get('password'))
            .then(res => {
                setUser(res)
                setIsLoading(false)
                setLogSucc(true)
            })
        event.currentTarget.reset();
        event.preventDefault();
    };
    const handlerGoogle = () => {
        loginWithGoogle()
    }
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
                            <LoginIcon />}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid alignItems={'center'} justifyContent='space-between' container>

                            <Grid item xs>
                                <Link to={'/'} variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={'/registration'} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <span onClick={handlerGoogle}>
                            <Avatar sx={{ m: 1, bgcolor: '#1976D2', cursor: 'pointer' }}>
                                <GoogleIcon />
                            </Avatar>
                        </span>
                    </Box>
                    {
                        logSucc === true && <Alert severity="success">Login successfully </Alert>
                    }
                </Box>
            </Container>
        </ThemeProvider >
    );
};

export default Login;