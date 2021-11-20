import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddAdmin = () => {
    const [added,setAdded] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);
        fetch('http://localhost:27017/user/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }, body: JSON.stringify({
                newAdminDate: new Date(),
                newAdminEmail: data.get('email'),
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setAdded(true)
                }
            })
        event.currentTarget.reset()
    };
    added && setTimeout(() => { setAdded(false)},3000)
    return (
        <Container sx={{ my: 5  }} maxWidth={'lg'}>
            <Typography variant='h4' >Make a new Admin </Typography>
            <Box component="form" aria-required onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="email"
                            name="email"
                            type={'email'}
                            label="Make a new admin"
                            fullWidth
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                       {
                            added && <Alert sx={{ mt: 5 }} severity="success"> Successfully make an admin</Alert>
                       }
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AddAdmin;