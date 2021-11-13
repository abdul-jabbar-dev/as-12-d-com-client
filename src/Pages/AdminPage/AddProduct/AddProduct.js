import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Rating, ToggleButtonGroup } from '@mui/material';
import Block from '@uiw/react-color-block';

const AddProduct = () => {
    const [hex, setHex] = useState("Default");
    const [ratingValue, setRatingValue] = useState(2);
    const [alignment, setAlignment] = useState('inStock');
    const [colorActive, setColorActive] = useState('noColor');
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const colorActiveHandler = (event, newAlignment) => {
        if (newAlignment === 'noColor') {
            setHex('Default')
        }
        setColorActive(newAlignment);
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
                productColor: hex.toString(),
                productRating: ratingValue
            })
        }).then(res => {
            
        })
        event.currentTarget.reset()
    };

    return (
        <React.Fragment>
            <Container sx={{ mt: 15 }}>
                <Typography variant="h4" gutterBottom>
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
                        <Grid display={'flex'} item xs={12} sm={6}>
                            <Box width={'60%'} >
                                <ToggleButtonGroup
                                    color={alignment === 'stock' ? 'success' : 'error'}
                                    value={alignment}
                                    exclusive
                                    onChange={handleChange}
                                >
                                    <ToggleButton value="inStock">In Stock</ToggleButton>
                                    <ToggleButton value="outStock">Out Of Stock</ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                            <Box><Typography variant="h6" fontWeight={400} gutterBottom>Give Product rating</Typography>
                                <Rating onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                }} name="half-rating" defaultValue={3} precision={0.5} />
                            </Box>
                        </Grid>
                        <Grid position={'relative'} item xs={12} sm={6}>
                            <Box>
                                <ToggleButtonGroup
                                    color={colorActive === 'noColor' ? 'info' : 'error'}
                                    value={colorActive}
                                    exclusive
                                    onChange={colorActiveHandler}
                                >
                                    <ToggleButton value="noColor">Product Color Default</ToggleButton>
                                    <ToggleButton value="addColor">Add Product Color</ToggleButton>
                                </ToggleButtonGroup>
                            </Box>
                            <Box>
                                {
                                    colorActive === 'addColor' && <Block
                                        style={{ position: 'absolute', left: '40%', zIndex: 85555 }}
                                        color={hex}
                                        onChange={(color) => {
                                            setHex(color.hex);
                                        }}
                                    />
                                }
                            </Box>
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
            </Container>
        </React.Fragment >
    );
};

export default AddProduct;