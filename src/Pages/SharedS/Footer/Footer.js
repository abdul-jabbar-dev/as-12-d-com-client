import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemText, ListSubheader, TextField, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Container>
                <Grid container justifyContent={'space-between'}>
                    <Grid item xs={3}  >
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Policy
                                    </ListSubheader>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Returns Policy" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Warranty Policy" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Privacy Policy" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Shipping Policy" />
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Utilitis
                                    </ListSubheader>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Pricing" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Developers" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="About us" />
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemText primary="Security" />
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="standard-basic" label="Name" variant="standard" />
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        <TextField id="standard-basic" label="Massage" variant="standard" /><br />
                        <Button variant='text'>Submit</Button>

                    </Grid>
                </Grid>
                <hr />
                <Typography color={'GrayText'} fontSize={'12px'} textAlign={'center'}>
                    Copyright© 2021 HANVON UGEE (HK) TECHNOLOGY CO., LIMITED All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;