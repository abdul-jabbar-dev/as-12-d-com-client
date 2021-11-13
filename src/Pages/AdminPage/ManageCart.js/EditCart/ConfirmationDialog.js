import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, Grid, Rating, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '70%',
    width: '1000px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function ConfirmationDialogRaw({ row }) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);
    const [ratingValue, setRatingValue] = useState(2);

    const [alignment, setAlignment] = useState("inStock");
    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.currentTarget);

        fetch('http://localhost:27017/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }, body: JSON.stringify({
                postDate: new Date(),
                productName: data.get('productName'),
                productprice: data.get('productprice'),
                productImg: data.get('productImg'),
                spacification: data.get('spacification'),
                discription: data.get('discription'),
                brand: data.get('brand'),
                productStoct: alignment,

                productRating: ratingValue
            })
        }).then(res => {

        })
        event.currentTarget.reset()
    };

    return (
        <div>
            <SettingsIcon onClick={handleOpen}
                sx={{
                    cursor: 'pointer', ":hover":
                    {
                        transform: 'scale(1.2)'
                        , transition: '.1s all'
                    }, ":active": {
                        transform: 'scale(1)'
                    }
                }} >edit</SettingsIcon>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography variant="h6" gutterBottom>
                        Add Products
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="productName"
                                    name="productName"
                                    label="Product name"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="productprice"
                                    name="productprice"
                                    label="Product Price"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="productImg"
                                    name="productImg"
                                    label="Product Img Url"
                                    fullWidth
                                    type="url"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="spacification"
                                    name="spacification"
                                    label="Product Spacification"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="discription"
                                    name="discription"
                                    label="Product discription"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="brand"
                                    name="brand"
                                    label="Product Brand"
                                    fullWidth
                                    variant="standard"
                                />
                            </Grid>
                            <Grid alignItems={'center'} container item md={6}>
                                <Grid item my={2} xs={12} md={6}>
                                    Update rating
                                    <br />
                                    <Rating onChange={(event, newValue) => {
                                        setRatingValue(newValue);
                                    }} name="half-rating" defaultValue={3} precision={0.5} />

                                </Grid>
                            </Grid>
                            <Grid alignItems={'center'} container item md={6}>
                                <Grid item my={2} xs={12} md={6}>
                                    <Stack direction="row" >
                                        <ToggleButtonGroup
                                            value={alignment}
                                            color={alignment === 'inStock' ? 'primary' : 'error'}
                                            exclusive
                                            onChange={handleAlignment}
                                            aria-label="text alignment"
                                        >
                                            <ToggleButton sx={{ width: 'max-content' }} value="inStock" aria-label="In Stock">
                                                In stock
                                            </ToggleButton>
                                            <ToggleButton sx={{ width: 'max-content' }} value="OutStock" aria-label="Out of Stock">
                                                Out of stock
                                            </ToggleButton>
                                        </ToggleButtonGroup>
                                    </Stack>

                                </Grid>
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
                            </Grid>
                        </Grid>
                    </Box>



                </Box>
            </Modal>
        </div>
    );
}


export default ConfirmationDialogRaw


